import { CreateUserNameModel } from '@models';
import { isNotNullOrEmpty } from '@utils';
import { FormikProps } from 'formik';

export function isRemainingToFillForm(props: FormikProps<CreateUserNameModel>): boolean {
  const isError = isNotNullOrEmpty(props.errors.username);
  const isNoValue = !isNotNullOrEmpty(props.values.username);

  return isError || isNoValue;
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
