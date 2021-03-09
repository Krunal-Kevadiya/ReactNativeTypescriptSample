import { isNotNullOrEmpty } from '@utils';
import type { ErrorAlertHandleType } from './Types';

export class ErrorAlertHolder {
  static dropDown: ErrorAlertHandleType | null = null;

  static alertHeight: number = 0;

  static setDropDown(dropDown: ErrorAlertHandleType | null): void {
    if (dropDown) {
      this.dropDown = dropDown;
    }
  }

  static clearDropDown(): void {
    this.dropDown = null;
  }

  static ignoreMessage(message: string): boolean {
    if (isNotNullOrEmpty(message)) {
      return true;
    }
    return false;
  }

  static alertMessage(message: string, image?: number, imageTint?: string, interval?: number): void {
    if (this.ignoreMessage(message)) {
      this.dropDown?.alertWithType(
        message.trim(),
        image,
        imageTint,
        interval === null || interval === undefined ? 2000 : interval
      );
    }
  }

  static alertDynamicHeight(height: number): void {
    if (this.alertHeight === 0) {
      this.alertHeight = height;
      if (this.dropDown?.getAlertDynamicHeight() === 0) {
        this.dropDown?.alertDynamicHeight(height);
      }
    }
  }

  static closeAction(): void {
    this.dropDown?.clearAlert();
  }
}
