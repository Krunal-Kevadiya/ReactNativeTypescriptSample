import { SignUpModel } from '@models';
import { isNotNullOrEmpty } from '@utils';
import { FormikProps } from 'formik';

export function isRemainingToFillForm(props: FormikProps<SignUpModel>): boolean {
  const isError =
    isNotNullOrEmpty(props.errors.realName) ||
    isNotNullOrEmpty(props.errors.emailOrPhone) ||
    isNotNullOrEmpty(props.errors.userName);
  const isNoValue =
    !isNotNullOrEmpty(props.values.realName) ||
    !isNotNullOrEmpty(props.values.emailOrPhone) ||
    !isNotNullOrEmpty(props.values.userName);

  return isError || isNoValue;
}
