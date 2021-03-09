export type InternalDataPropsType = {
  message: string;
  image?: number;
  imageTint?: string;
  interval?: number;
};

export type ErrorAlertPropsType = {
  translucent?: boolean;
  numberOfLines?: number;
};

export type ErrorAlertHandleType = {
  clearAlert: () => void;
  getAlertDynamicHeight: () => number;
  alertDynamicHeight: (height: number) => number;
  alertWithType: (message: string, image?: number, imageTint?: string, interval?: number) => void;
};
