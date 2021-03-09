import { sentryTrackError } from '@config';
import { Alert, BackHandler } from 'react-native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

const useExceptionHandler = () => {
  const reporter = (error: Error) => {
    sentryTrackError(error);
  };

  // This will display only to the dev/QA to detect the error on development version, So, the below string is not part of the application string (Not for the users). Thus, Not added at global Strings.
  const errorHandler = (error: Error, isFatal: boolean) => {
    if (isFatal) {
      reporter(error);
      Alert.alert(
        'Unexpected error occurred',
        `
        Error: ${isFatal ? 'Fatal:' : ''} ${error.name} ${error.message}
        We have reported this to our team ! Please close the app and start again!
        `,
        [
          {
            text: 'Close',
            onPress: () => {
              BackHandler.exitApp();
            }
          }
        ]
      );
    }
  };

  setJSExceptionHandler(errorHandler, true);

  setNativeExceptionHandler((errorString) => {
    sentryTrackError(new Error(errorString));
  });

  return null;
};

export default useExceptionHandler;
