import { apiWithCancelToken } from '@config';
import { MessageApis } from '@constants';
import { ApisauceInstance } from 'apisauce';

const messageService = (api: ApisauceInstance) => () => {
  const snooze = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', MessageApis.snooze, {}, credentials, {});
  };
  const forward = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', MessageApis.forward, {}, credentials, {});
  };
  const list = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', MessageApis.list, {}, credentials, {});
  };
  const missingConversation = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', MessageApis.missingConversation, {}, credentials, {});
  };
  const friendConversation = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', MessageApis.friendConversation, {}, credentials, {});
  };

  const publicUrl = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', MessageApis.publicUrl, {}, credentials, {});
  };
  const preFetch = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', MessageApis.preFetch, {}, credentials, {});
  };
  const sendNormal = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', MessageApis.sendNormal, {}, credentials, {});
  };
  const sendBroadcast = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', MessageApis.sendBroadcast, {}, credentials, {});
  };
  const deleteOrDetailMessage = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', MessageApis.deleteOrDetailMessage, {}, credentials, {});
  };

  return {
    snooze,
    forward,
    list,
    missingConversation,
    friendConversation,

    publicUrl,
    preFetch,
    sendNormal,
    sendBroadcast,
    deleteOrDetailMessage
  };
};

export default messageService;
