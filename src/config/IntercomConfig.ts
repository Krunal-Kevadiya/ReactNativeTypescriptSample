import { isIos } from '@theme';
import { isNotNullOrEmpty } from '@utils/StringUtil';
import Intercom from 'react-native-intercom';
import { RESULTS, checkNotifications } from 'react-native-permissions';

const handlePushCheckResponseForIntercom = () => {
  // getApnsOrFcmToken((status, data) => {
  //   if (status) {
  //     if (isIos) {
  //       Intercom.setupAPN(data);
  //       Intercom.registerForPush();
  //     } else {
  //       Intercom.sendTokenToIntercom(data);
  //     }
  //     Intercom.handlePushMessage();
  //   }
  // });
};

const pushNotificationIntercom = () => {
  if (isIos) {
    checkNotifications().then(({ status }) => {
      if (status === RESULTS.GRANTED) {
        handlePushCheckResponseForIntercom();
      }
    });
  } else {
    handlePushCheckResponseForIntercom();
  }
};

export function loginIntercom(user: any): void {
  Intercom.logout();
  Intercom.registerIdentifiedUser({ userId: `${user.id}` });
  const userDetails = {
    username: `${user.username}`,
    email: `${user.email}`,
    phone: `${user.phone}`,
    teamName: `${user.teamName}`,
    teamId: `${user.teamId}`,
    role: `${user.role}`,
    userId: `${user.id}`,
    custom_attributes: {
      Username: `${user.username}`,
      Teamname: `${user.teamName}`,
      Teamid: `${user.teamId}`,
      role: `${user.role}`
    }
  };
  const { profileName } = {}; // checkAndGetUserProfileAndName(user);
  if (isNotNullOrEmpty(profileName)) {
    userDetails.name = `${profileName}`;
  }
  Intercom.updateUser(userDetails);
  pushNotificationIntercom();
}

export function logoutIntercom(): void {
  Intercom.logout();
}
