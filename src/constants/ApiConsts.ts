export const TeamConsts = {
  inviteLink: 'v2/teams/{0}/members/invite-link', // 0.TeamId
  inviteTeam: 'v2/teams/{0}/members' // 0.teamId
};

export const GroupConsts = {
  create: 'v1/group/create',
  threadList: 'v1/group/newCollapseList',
  groupConversation: 'v1/group/group-conversation',
  detail: 'v1/group/details/{0}', // 0.GroupId
  update: 'v1/group/update',
  missingConversation: 'v1/group/messages/fetch-missing',
  messageStatus: 'v1/group/message/read/status',
  leave: 'v1/group/leave/{0}', // 0.GroupId
  snooze: 'v1/group/message/snooze',
  muteUnmute: 'v1/group/mute-unmute',

  inviteLink: 'v2/groups/{0}/invite-link', // 0.GroupId
  inviteMemberLink: 'v2/groups/{0}/members/invite-link', // 0.GroupId
  send: 'v2/group/send',
  deleted: 'v2/groups/{0}' // 0.groupId
};

export const UserApi = {
  signin: 'v1/users/signin',
  signup: 'v1/users/signup',
  verifyCode: 'v1/users/login',
  signOut: 'v1/users/signout',
  profileUpdate: 'v1/users/update',
  profileDetail: 'v1/users/userDetails',
  checkUserName: 'v1/users/check-username/{0}', // 0.SearchUserName
  onBoarding: 'v1/users/onBoarding',

  friendProfile: 'v2/users/{0}/image-and-name', // 0.username
  emailUpdateEmail: 'v2/users/{0}/email', // 0.userId
  emailUpdateConfirm: 'v2/users/{0}/email/confirmation', // 0.userId
  analytics: 'v2/users/{0}/analytics', // 0.userId
  readAllMessage: 'v2/users/{0}/{1}/{2}/messages', // 0.UserId, 1.friends/groups, 2.FriendId/GroupId
  searchMessage: 'v2/users/{0}/messages', // 0.UserId
  updateMessage: 'v2/users/{0}/messages/{1}', // 0.UserId, 1.MessageId
  nonFriendOrUser: 'v2/users/{0}/friends', // 0.userId
  removeFriend: '/v2/users/{0}/friends/{1}' // 0.userId, 1.friendId
};

export const ContactsApis = {
  // isOnYac: 'v2/contacts/is-on-yac'
};

export const OtherApis = {
  unreadMessages: 'v1/unread-messages',
  transcriptionLanguage: 'v1/transcription-languages',
  linkPreview: 'https://link-preview-api.yac.com'
};

export const MessageApis = {
  snooze: 'v1/message/snooze',
  forward: 'v1/message/forward',
  list: 'v1/message/list',
  missingConversation: 'v1/message/fetch-missing',
  friendConversation: 'v1/message/friend-conversation',

  publicUrl: 'v2/messages/{0}/public-url', // 0.MessageId
  preFetch: 'v2/message/save-client-fetch',
  sendNormal: 'v2/message/save-client-complete',
  sendBroadcast: 'v2/message/broadcast-client-complete',
  deleteOrDetailMessage: 'v2/messages/{0}' // 0.MessageId
};

export const FriendApis = {
  addFriend: 'v1/friends/addFriendToList',
  addGroupFriend: 'v1/friends/group/addFriendToList',

  list: 'v2/friends/{0}', // 0.GiveGroupMember<0,1>
  search: 'v2/friends/search/{0}' // 0.search key word
};
