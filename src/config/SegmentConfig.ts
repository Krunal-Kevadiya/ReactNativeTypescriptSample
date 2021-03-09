import { AppConsts } from '@constants';
import analytics, { JsonMap } from '@segment/analytics-react-native';
import { isNotNullOrEmpty } from '@utils';
import { Platform } from 'react-native';
import moment from 'moment';

export function loginSegment(user: any): void {
  const { profileName, profileImage } = {}; // checkAndGetUserProfileAndName(user);
  const userDetails: JsonMap = {
    id: String(user.id),
    user_id: String(user.id),
    username: user.username,
    realName: user.realName,
    email: user.email,
    description: user.bio,
    createdAt: user.createdAt,
    phone: user.phone,
    avatar: profileImage,
    platforms: [Platform.OS],
    appVersion: AppConsts.appVersion,
    lastLogin: moment().toISOString()
  };
  if (isNotNullOrEmpty(profileName)) {
    userDetails.firstName = `${profileName}`;
  }

  analytics
    .setup(AppConsts.segmentKey, {
      // Add any of your Device-mode destinations.
      // using: [Bugsnag, Branch, Firebase, Mixpanel, GoogleAnalytics]
      // Record screen views automatically!
      recordScreenViews: true,
      // Record certain application events automatically!
      trackAppLifecycleEvents: true,
      // Enable platform based event tracking
      ios: {
        trackDeepLinks: true
      },
      android: {}
    })
    .then(() => {
      analytics.identify(String(user.id), userDetails);
    });
}

export function logoutSegment(): void {
  analytics.reset();
}

export function updateSegment(user: any, traits?: JsonMap): void {
  analytics.identify(String(user.id), traits);
}

export function trackEventSegment(trackName: string, properties?: JsonMap): void {
  analytics.track(trackName, properties || {});
}

export function screenEventSegment(screenName: string, properties?: JsonMap): void {
  analytics.screen(screenName, properties);
}

export function groupEventSegment(groupName: string, traits?: JsonMap): void {
  analytics.group(groupName, traits);
}
