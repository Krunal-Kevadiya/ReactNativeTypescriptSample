import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useFirebaseNotification = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = messaging?.().onMessage?.(() => {
      // Platform.OS === 'ios' && sendLocalNotification(remoteMessage);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    const getToken = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        // createDefaultChannels();
        // clearNotificationBadge();
        // const token = await messaging().getToken();
        // dispatch(NotificationsActions.registerDeviceToken(token));
      }
    };

    const unsubscribe = messaging().onTokenRefresh(async () => {
      // dispatch(NotificationsActions.registerDeviceToken(token));
    });
    getToken();
    return () => unsubscribe;
  }, [dispatch]);
};

export default useFirebaseNotification;
