import { SignInModel } from '@models';
import { isNotNullOrEmpty } from '@utils';
import { FormikProps } from 'formik';

export function isRemainingToFillForm(props: FormikProps<SignInModel>): boolean {
  const isError = isNotNullOrEmpty(props.errors.emailOrPhone);
  const isNoValue = !isNotNullOrEmpty(props.values.emailOrPhone);

  return isError || isNoValue;
}
