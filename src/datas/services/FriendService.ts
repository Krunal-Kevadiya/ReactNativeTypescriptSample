import { apiWithCancelToken } from '@config';
import { FriendApis } from '@constants';
import { ApisauceInstance } from 'apisauce';

const friendService = (api: ApisauceInstance) => () => {
  const addFriend = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', FriendApis.addFriend, {}, credentials, {});
  };
  const addGroupFriend = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', FriendApis.addGroupFriend, {}, credentials, {});
  };

  const list = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', FriendApis.list, {}, credentials, {});
  };
  const search = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', FriendApis.search, {}, credentials, {});
  };

  return {
    addFriend,
    addGroupFriend,

    list,
    search
  };
};

export default friendService;
