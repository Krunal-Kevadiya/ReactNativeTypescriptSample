import { AppConsts } from '@constants';
import * as Sentry from '@sentry/react-native';

export function initSentry(): void {
  Sentry.init({ dsn: AppConsts.sentryUrl });
}

export function sentryTrackEvent(eventName: string, request: object | null, error: object | null): void {
  Sentry.withScope((scope) => {
    scope.setExtra(eventName, {
      Request: JSON.stringify(request || {}),
      Error: JSON.stringify(error || {})
    });
    Sentry.captureMessage(eventName, Sentry.Severity.Log);
  });
}

export function sentryTrackError(error: Error): void {
  Sentry.captureException(error);
}

export function loginSentry(user: any): void {
  Sentry.setUser({
    id: String(user.id),
    username: user.username,
    realName: user.realName,
    email: user.email,
    phone: user.phone
  });
}
