import { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, AlertButton } from 'react-native';
import {
  Permission,
  Rationale,
  check,
  checkMultiple,
  openSettings,
  request,
  requestMultiple
} from 'react-native-permissions';
/*
const [data, error, askPermission, getPermission] = useMultiplePermissions(
    [PERMISSIONS.IOS.PHOTO_LIBRARY, PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE],
    {
      title: 'Can we access your photo library?',
      message: 'We need access so you can upload photos',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel'
    },
    {
      title: 'Can we access your photo library?',
      message: 'We need access so you can upload photos',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel'
    }
  );
*/
interface PermissionsOptions {
  /** If it should ask the permissions when mounted, defaults to `false` */
  ask?: boolean;
  /** If it should fetch information about the permissions when mounted, defaults to `true` */
  get?: boolean;
}

type PermissionStatus = 'unavailable' | 'denied' | 'limited' | 'granted' | 'blocked';

export function useSinglePermissions(
  type: Permission,
  requestRationale: Rationale,
  requestBlocked: Rationale,
  options: PermissionsOptions = {},
  onGranted?: () => void
): [PermissionStatus | undefined, Error | undefined, () => Promise<void>, () => Promise<void>] {
  const [data, setData] = useState<PermissionStatus | undefined>();
  const [error, setError] = useState<Error>();
  const { ask = false, get = true } = options;

  const askBlockedPermissionsWithState = useCallback(() => {
    const { title, message, buttonPositive, buttonNegative, buttonNeutral } = requestBlocked;

    return new Promise<PermissionStatus>((resolve) => {
      const buttons: AlertButton[] = [];

      if (buttonNegative) {
        const onPress = () => resolve(check(type));
        if (buttonNeutral) buttons.push({ text: buttonNeutral, onPress });
        buttons.push({ text: buttonNegative, onPress });
      }

      buttons.push({
        text: buttonPositive,
        onPress: () => resolve(openSettings().then(() => check(type)))
      });

      Alert.alert(title, message, buttons, { cancelable: false });
    });
  }, [type]);

  const askBlockedPermissions = useCallback(() => {
    const { title, message, buttonPositive, buttonNegative, buttonNeutral } = requestBlocked;

    return new Promise<void>((resolve) => {
      const buttons: AlertButton[] = [];

      if (buttonNegative) {
        const onPress = () => resolve();
        if (buttonNeutral) buttons.push({ text: buttonNeutral, onPress });
        buttons.push({ text: buttonNegative, onPress });
      }

      buttons.push({
        text: buttonPositive,
        onPress: () => resolve(openSettings())
      });

      Alert.alert(title, message, buttons, { cancelable: false });
    });
  }, []);

  const askPermissions = useCallback(() => {
    return request(type, requestRationale)
      .then((status) => {
        if (status === 'blocked') {
          return askBlockedPermissionsWithState();
        }
        return status;
      })
      .then(setData)
      .catch(setError);
  }, [type]);

  const getPermissions = useCallback(() => {
    return check(type).then(setData).catch(setError);
  }, [type]);

  useEffect(() => {
    if (ask) {
      askPermissions();
    }

    if (!ask && get) {
      getPermissions();
    }
  }, [ask, askPermissions, get, getPermissions]);

  useEffect(() => {
    if (data === 'granted' || data === 'limited') {
      onGranted?.();
    }
  }, [data]);

  const callPermission = useMemo(() => (data === 'blocked' ? askBlockedPermissions : askPermissions), []);
  return [data, error, callPermission, getPermissions];
}

function getPermissionResult(
  types: Permission[],
  statuses: Record<Permission[number], PermissionStatus>
): {
  status: PermissionStatus;
  deniedList: Permission[];
  blockedList: Permission[];
} {
  const grantedList = types.filter((type) => statuses[type] === 'granted' || statuses[type] === 'limited');
  const deniedList = types.filter((type) => statuses[type] === 'denied');
  const blockedList = types.filter((type) => statuses[type] === 'blocked');
  let status = '';
  if (grantedList.length === types.length) {
    status = 'granted';
  } else if (deniedList.length > 0) {
    status = 'denied';
  } else if (blockedList.length > 0) {
    status = 'blocked';
  } else {
    status = 'unavailable';
  }
  return { status, deniedList, blockedList };
}

export function useMultiplePermissions(
  types: Permission[],
  requestRationale: Rationale,
  requestBlocked: Rationale,
  options: PermissionsOptions = {},
  onGranted?: () => void
): [PermissionStatus | undefined, Error | undefined, () => Promise<void>, () => Promise<void>] {
  const [data, setData] = useState<PermissionStatus | undefined>();
  const [error, setError] = useState<Error>();
  const { ask = false, get = true } = options;

  // note: its intentional to listen to `type`, not `types`.
  // when `type` is casted to an array, it possible creates a new one on every render.
  // to prevent unnecessary function instances we need to listen to the "raw" value.

  const askBlockedPermissionsWithState = useCallback((blockedList) => {
    const { title, message, buttonPositive, buttonNegative, buttonNeutral } = requestBlocked;

    return new Promise<PermissionStatus>((resolve) => {
      const buttons: AlertButton[] = [];

      if (buttonNegative) {
        const onPress = () => resolve(check(blockedList));
        if (buttonNeutral) buttons.push({ text: buttonNeutral, onPress });
        buttons.push({ text: buttonNegative, onPress });
      }

      buttons.push({
        text: buttonPositive,
        onPress: () => resolve(openSettings().then(() => check(blockedList)))
      });

      Alert.alert(title, message, buttons, { cancelable: false });
    });
  }, []);

  const askDeniedPermissionsWithState = useCallback((deniedList) => {
    const { title, message, buttonPositive, buttonNegative, buttonNeutral } = requestRationale;

    return new Promise<PermissionStatus>((resolve) => {
      const buttons: AlertButton[] = [];

      if (buttonNegative) {
        const onPress = () => resolve(check(deniedList));
        if (buttonNeutral) buttons.push({ text: buttonNeutral, onPress });
        buttons.push({ text: buttonNegative, onPress });
      }

      buttons.push({
        text: buttonPositive,
        onPress: () =>
          resolve(
            requestMultiple(deniedList).then((statuses) => {
              const { status } = getPermissionResult(types, statuses);
              return status;
            })
          )
      });

      Alert.alert(title, message, buttons, { cancelable: false });
    });
  }, []);

  const askBlockedPermissions = useCallback(() => {
    const { title, message, buttonPositive, buttonNegative, buttonNeutral } = requestBlocked;

    return new Promise<void>((resolve) => {
      const buttons: AlertButton[] = [];

      if (buttonNegative) {
        const onPress = () => resolve();
        if (buttonNeutral) buttons.push({ text: buttonNeutral, onPress });
        buttons.push({ text: buttonNegative, onPress });
      }

      buttons.push({
        text: buttonPositive,
        onPress: () => resolve(openSettings())
      });

      Alert.alert(title, message, buttons, { cancelable: false });
    });
  }, []);

  const askPermissions = useCallback(() => {
    return requestMultiple(types)
      .then((statuses) => {
        const { status, deniedList, blockedList } = getPermissionResult(types, statuses);
        if (status === 'denied') {
          return askDeniedPermissionsWithState(deniedList);
        }
        if (status === 'blocked') {
          return askBlockedPermissionsWithState(blockedList);
        }
        return status;
      })
      .then(setData)
      .catch(setError);
  }, [types]);

  const getPermissions = useCallback(() => {
    return checkMultiple(types)
      .then((statuses) => {
        const { status } = getPermissionResult(types, statuses);
        setData(status);
      })
      .catch(setError);
  }, [types]);

  useEffect(() => {
    if (ask) {
      askPermissions();
    }

    if (!ask && get) {
      getPermissions();
    }
  }, [ask, askPermissions, get, getPermissions]);

  useEffect(() => {
    if (data === 'granted' || data === 'limited') {
      onGranted?.();
    }
  }, [data]);

  const callPermission = useMemo(() => (data === 'blocked' ? askBlockedPermissions : askPermissions), []);
  return [data, error, callPermission, getPermissions];
}
