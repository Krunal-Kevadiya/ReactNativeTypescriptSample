import React from 'react';

export type ActionSheetPropsType = {
  title?: string;
  message?: string;
  list?: Array<any>;
  renderItem?: ({ item }: any) => React.ReactElement;
  onSwipeComplete?: () => void;
  onBackButtonPress?: () => void;
  children?: React.ReactElement;
  extraFlatListProps?: object;
};

export type ActionSheetHandleType = {
  show: () => void;
  hide: () => void;
};
