import { apiConfig } from '@config';
import { AppConsts } from '@constants';
import FriendService from './FriendService';
import GroupService from './GroupService';
import MessageService from './MessageService';
import OtherService from './OtherService';
import TeamService from './TeamService';
import UserService from './UserService';

const api = apiConfig(AppConsts.apiUrl);

export default {
  friendApi: FriendService(api),
  groupApi: GroupService(api),
  messageApi: MessageService(api),
  otherApi: OtherService(api),
  teamApi: TeamService(api),
  userApi: UserService(api)
};
