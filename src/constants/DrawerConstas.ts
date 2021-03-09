import { FontEnumType } from '@components';
import { AppRoute } from '@navigations';
import { AppConsts } from './AppConsts';
import { DrawerBottomBarStrings } from './StringConsts';

export const drawerMenuList = [
  {
    id: 1,
    label: DrawerBottomBarStrings.home,
    type: FontEnumType.materialIcons,
    icon: 'house',
    navigate: AppRoute.DASH_BOARD
  },
  {
    id: 2,
    label: DrawerBottomBarStrings.editProfile,
    type: FontEnumType.materialCommunityIcons,
    icon: 'account-edit-outline',
    navigate: AppRoute.EDIT_PROFILE,
    params: {}
  },
  {
    id: 3,
    label: DrawerBottomBarStrings.transcriptionLanguage,
    type: FontEnumType.materialIcons,
    icon: 'translate',
    navigate: AppRoute.TRANSLATION_LANGUAGE,
    params: {}
  },
  {
    id: 4,
    label: DrawerBottomBarStrings.help,
    type: FontEnumType.materialCommunityIcons,
    icon: 'face-agent',
    navigate: '',
    params: {}
  },
  {
    id: 5,
    label: DrawerBottomBarStrings.privacyPolicy,
    type: FontEnumType.materialIcons,
    icon: 'policy',
    navigate: AppRoute.BROWSER,
    params: { url: AppConsts.privacyPolicy }
  },
  {
    id: 6,
    label: DrawerBottomBarStrings.termsAndConditions,
    type: FontEnumType.materialIcons,
    icon: 'privacy-tip',
    navigate: AppRoute.BROWSER,
    params: { url: AppConsts.termsConditions }
  },
  {
    id: 7,
    label: DrawerBottomBarStrings.notificationSound,
    type: FontEnumType.materialIcons,
    icon: 'campaign',
    navigate: AppRoute.NOTIFICATION_SOUND,
    params: {}
  }
];

export const drawerMenuPreferenceList = [
  { id: 1, label: DrawerBottomBarStrings.pushNotification },
  { id: 2, label: DrawerBottomBarStrings.autoPlay },
  { id: 3, label: DrawerBottomBarStrings.swipeToReplyAll },
  { id: 4, label: DrawerBottomBarStrings.disablePreview },
  { id: 5, label: DrawerBottomBarStrings.optOutAnalytics },
  { id: 6, label: DrawerBottomBarStrings.darkTheme }
];

export const drawerSignOutMenu = {
  id: 1,
  label: DrawerBottomBarStrings.signOut,
  type: FontEnumType.materialCommunityIcons,
  icon: 'exit-to-app',
  navigate: null
};

export const bottomBarList = [
  { id: 1, label: DrawerBottomBarStrings.unread, type: FontEnumType.materialIcons, icon: 'notifications' },
  { id: 2, label: DrawerBottomBarStrings.all, type: FontEnumType.feather, icon: 'grid' },
  { id: 3, label: '', type: FontEnumType.feather, icon: 'mic' },
  { id: 4, label: DrawerBottomBarStrings.dMs, type: FontEnumType.materialIcons, icon: 'comment' },
  { id: 5, label: DrawerBottomBarStrings.channels, type: FontEnumType.materialIcons, icon: 'tag' }
];
