import { CommonActions, DrawerActions, StackActions, TabActions } from '@react-navigation/routers';
import { navigationRef } from './AppNavigator';

function navigatePop(screenCount = 0, isPopToTop = false): void {
  const popAction = isPopToTop ? StackActions.popToTop() : StackActions.pop(screenCount);
  navigationRef.current?.dispatch(popAction);
}

function navigateBack(): void {
  const backAction = CommonActions.goBack();
  navigationRef.current?.dispatch(backAction);
}

function navigateWithReplace(routeName: string, params = {}): void {
  const replaceAction = StackActions.replace(routeName, params);
  navigationRef.current?.dispatch(replaceAction);
}

function navigateWithParam(routeName: string, params = {}): void {
  const navigateAction = CommonActions.navigate({
    name: routeName,
    params
  });
  navigationRef.current?.dispatch(navigateAction);
}

function navigateWithPush(routeName: string, params = {}): void {
  const pushAction = StackActions.push(routeName, params);
  navigationRef.current?.dispatch(pushAction);
}

function navigateWithReset(stackName: string, routeName: string, params = {}): void {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [
      {
        name: stackName,
        state: { routes: [{ name: routeName, params }] }
      }
    ]
  });
  navigationRef.current?.dispatch(resetAction);
}

function navigateOpenDrawer(): void {
  const openAction = DrawerActions.openDrawer();
  navigationRef.current?.dispatch(openAction);
}

function navigateCloseDrawer(): void {
  const closeAction = DrawerActions.closeDrawer();
  navigationRef.current?.dispatch(closeAction);
}

function navigateToggleDrawer(): void {
  const toggleAction = DrawerActions.toggleDrawer();
  navigationRef.current?.dispatch(toggleAction);
}

function navigateJumpToDrawer(routeName: string, params = {}): void {
  const jumpToAction = DrawerActions.jumpTo(routeName, params);
  navigationRef.current?.dispatch(jumpToAction);
}

function navigateJumpToTab(routeName: string, params = {}): void {
  const jumpToAction = TabActions.jumpTo(routeName, params);
  navigationRef.current?.dispatch(jumpToAction);
}

export {
  navigateBack,
  navigatePop,
  navigateWithReplace,
  navigateWithParam,
  navigateWithPush,
  navigateWithReset,
  navigateOpenDrawer,
  navigateCloseDrawer,
  navigateToggleDrawer,
  navigateJumpToDrawer,
  navigateJumpToTab
};
