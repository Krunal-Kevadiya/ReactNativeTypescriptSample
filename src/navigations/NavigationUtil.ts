import { DrawerActions } from '@react-navigation/routers';
import { navigationRef } from './AppNavigator';

function navigatePop(isPop = false): void {
  if (isPop) {
    navigationRef.current.pop();
  } else {
    navigationRef.current.popToTop();
  }
}

function navigateBack(isPop = false): void {
  if (isPop) {
    navigatePop(isPop);
  } else {
    navigationRef.current.goBack();
  }
}

function navigateWithReplace(routeName: string, params: object = {}): void {
  navigationRef.current.replace(routeName, params);
}

function navigateWithParam(routeName: string, params: object = {}, isPopTop = false): void {
  if (isPopTop) navigationRef.current.popToTop();
  navigationRef.current.navigate(routeName, params);
}

function navigateWithPush(routeName: string, params: object = {}, isPopTop = false): void {
  if (isPopTop) navigatePop();
  navigationRef.current.push(routeName, params);
}

function navigateWithReset(stackName: string, routeName: string, params: object = {}): void {
  navigationRef.current.reset({
    index: 0,
    routes: [
      {
        name: stackName,
        state: { routes: [{ name: routeName, params }] }
      }
    ]
  });
}

function navigateToggleDrawer(): void {
  navigationRef.current.dispatch(DrawerActions.toggleDrawer());
}

export {
  navigateBack,
  navigatePop,
  navigateWithReplace,
  navigateWithParam,
  navigateWithPush,
  navigateWithReset,
  navigateToggleDrawer
};
