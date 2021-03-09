import { VerifyModel } from '@models';
import { isNotNullOrEmpty } from '@utils';
import { FormikProps } from 'formik';

export function isRemainingToFillForm(props: FormikProps<VerifyModel>): boolean {
  const isError = isNotNullOrEmpty(props.errors.otp);
  const isNoValue = !isNotNullOrEmpty(props.values.otp);

  return isError || isNoValue;
}
