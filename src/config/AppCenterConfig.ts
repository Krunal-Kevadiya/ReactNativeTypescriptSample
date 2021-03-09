import Analytics from 'appcenter-analytics';

export function appCenterTrackEvent(eventName: string, request: object | null, error: object | null): void {
  Analytics.trackEvent(eventName, {
    Request: JSON.stringify(request || {}),
    Error: JSON.stringify(error || {})
  });
}
