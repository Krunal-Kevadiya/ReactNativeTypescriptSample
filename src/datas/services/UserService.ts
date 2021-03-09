import { apiWithCancelToken } from '@config';
import { UserApi } from '@constants';
import { ApisauceInstance } from 'apisauce';

const userService = (api: ApisauceInstance) => () => {
  const signin = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.signin, {}, credentials, {});
  };
  const signup = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.signup, {}, credentials, {});
  };
  const verifyCode = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.verifyCode, {}, credentials, {});
  };
  const signOut = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.signOut, {}, credentials, {});
  };
  const profileUpdate = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.profileUpdate, {}, credentials, {});
  };
  const profileDetail = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.profileDetail, {}, credentials, {});
  };
  const checkUserName = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.checkUserName, {}, credentials, {});
  };
  const onBoarding = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.onBoarding, {}, credentials, {});
  };

  const friendProfile = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.friendProfile, {}, credentials, {});
  };
  const emailUpdateEmail = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.emailUpdateEmail, {}, credentials, {});
  };
  const emailUpdateConfirm = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.emailUpdateConfirm, {}, credentials, {});
  };
  const analytics = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.analytics, {}, credentials, {});
  };
  const readAllMessage = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.readAllMessage, {}, credentials, {});
  };
  const searchMessage = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.searchMessage, {}, credentials, {});
  };
  const updateMessage = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.updateMessage, {}, credentials, {});
  };
  const nonFriendOrUser = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.nonFriendOrUser, {}, credentials, {});
  };
  const removeFriend = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', UserApi.removeFriend, {}, credentials, {});
  };

  return {
    signin,
    signup,
    verifyCode,
    signOut,
    profileUpdate,
    profileDetail,
    checkUserName,
    onBoarding,

    friendProfile,
    emailUpdateEmail,
    emailUpdateConfirm,
    analytics,
    readAllMessage,
    searchMessage,
    updateMessage,
    nonFriendOrUser,
    removeFriend
  };
};

export default userService;
