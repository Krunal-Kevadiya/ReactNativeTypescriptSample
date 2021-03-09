import { apiWithCancelToken } from '@config';
import { TeamConsts } from '@constants';
import { ApisauceInstance } from 'apisauce';

const teamService = (api: ApisauceInstance) => () => {
  const inviteLink = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', TeamConsts.inviteLink, {}, credentials, {});
  };
  const inviteTeam = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', TeamConsts.inviteTeam, {}, credentials, {});
  };

  return {
    inviteLink,
    inviteTeam
  };
};

export default teamService;
