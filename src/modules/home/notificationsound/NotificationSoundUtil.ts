import { MockData } from '@assets';
import { MyThemeColorsType } from '@theme';
import type { ItemType } from './Types';

export function getNotificationList(selectedItem?: ItemType): ItemType[] {
  let list = [...MockData.notificationList];
  list = list.map((item: ItemType) => {
    if (item.id === selectedItem?.id) {
      return { ...item, selected: 2 };
    }
    return { ...item, selected: 0 };
  });
  return list;
}

export function isRemainingToFillForm(list: ItemType[]): boolean {
  return list.filter((item) => item.selected === 1).length <= 0;
}

export function getTextColor(item: ItemType, colors: MyThemeColorsType) {
  if (item.selected === 0) {
    return colors.invertedWhite;
  }
  if (item.selected === 1) {
    return colors.blue;
  }
  return colors.secondary;
}
