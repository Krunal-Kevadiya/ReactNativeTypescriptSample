import { CompleteProfileModel } from '@models';
import { isNotNullOrEmpty } from '@utils';
import { FormikProps } from 'formik';

export function isRemainingToFillForm(props: FormikProps<CompleteProfileModel>): boolean {
  const isError =
    isNotNullOrEmpty(props.errors.source) ||
    isNotNullOrEmpty(props.errors.fileName) ||
    isNotNullOrEmpty(props.errors.data) ||
    isNotNullOrEmpty(props.errors.username);
  const isNoValue =
    !isNotNullOrEmpty(props.values.source) ||
    !isNotNullOrEmpty(props.values.fileName) ||
    !isNotNullOrEmpty(props.values.data) ||
    !isNotNullOrEmpty(props.errors.username);

  return isError && isNoValue;
}

export function getUserNameStatus(isResultStatus?: boolean): {
  iconName: string | undefined;
  iconColor: string | undefined;
} {
  let iconName: string | undefined;
  let iconColor: string | undefined;
  if (isResultStatus) {
    iconName = isResultStatus ? 'check-circle' : 'x-circle';
    iconColor = isResultStatus ? 'green' : 'red';
  }
  return { iconName, iconColor };
}
