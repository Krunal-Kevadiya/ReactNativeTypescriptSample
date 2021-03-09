import { apiWithCancelToken } from '@config';
import { GroupConsts } from '@constants';
import { ApisauceInstance } from 'apisauce';

const groupService = (api: ApisauceInstance) => () => {
  const create = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.create, {}, credentials, {});
  };
  const threadList = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.threadList, {}, credentials, {});
  };
  const groupConversation = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.groupConversation, {}, credentials, {});
  };
  const detail = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.detail, {}, credentials, {});
  };
  const update = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.update, {}, credentials, {});
  };
  const missingConversation = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.missingConversation, {}, credentials, {});
  };
  const messageStatus = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.messageStatus, {}, credentials, {});
  };
  const leave = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.leave, {}, credentials, {});
  };
  const snooze = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.snooze, {}, credentials, {});
  };
  const muteUnmute = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.muteUnmute, {}, credentials, {});
  };

  const inviteLink = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.inviteLink, {}, credentials, {});
  };
  const inviteMemberLink = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.inviteMemberLink, {}, credentials, {});
  };
  const send = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.send, {}, credentials, {});
  };
  const deleted = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', GroupConsts.deleted, {}, credentials, {});
  };

  return {
    create,
    threadList,
    groupConversation,
    detail,
    update,
    missingConversation,
    messageStatus,
    leave,
    snooze,
    muteUnmute,

    inviteLink,
    inviteMemberLink,
    send,
    deleted
  };
};

export default groupService;
