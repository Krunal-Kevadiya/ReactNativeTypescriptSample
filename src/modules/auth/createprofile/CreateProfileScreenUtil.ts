import { CreateProfileModel } from '@models';
import { isNotNullOrEmpty } from '@utils';
import { FormikProps } from 'formik';

export function isRemainingToFillForm(props: FormikProps<CreateProfileModel>): boolean {
  const isError =
    isNotNullOrEmpty(props.errors.source) ||
    isNotNullOrEmpty(props.errors.fileName) ||
    isNotNullOrEmpty(props.errors.data);
  const isNoValue =
    !isNotNullOrEmpty(props.values.source) ||
    !isNotNullOrEmpty(props.values.fileName) ||
    !isNotNullOrEmpty(props.values.data);

  return isError && isNoValue;
}
