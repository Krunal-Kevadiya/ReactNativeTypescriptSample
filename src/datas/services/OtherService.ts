import { apiWithCancelToken } from '@config';
import { OtherApis } from '@constants';
import { ApisauceInstance } from 'apisauce';

const otherService = (api: ApisauceInstance) => () => {
  const unreadMessages = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', OtherApis.unreadMessages, {}, credentials, {});
  };
  const transcriptionLanguage = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', OtherApis.transcriptionLanguage, {}, credentials, {});
  };
  const linkPreview = (credentials: any) => {
    return apiWithCancelToken(api, 'POST', OtherApis.linkPreview, {}, credentials, {});
  };

  return {
    unreadMessages,
    transcriptionLanguage,
    linkPreview
  };
};

export default otherService;
