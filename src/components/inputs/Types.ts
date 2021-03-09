import type { FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { TextInput } from 'react-native';

type DictionaryType = {
  [key: string]: string;
};

type TextInputPropsType = React.ComponentProps<typeof TextInput>;

export interface FormInputPropsType extends TextInputPropsType {
  ref?: React.LegacyRef<TextInput>;
  id: string;
  label?: string;
  labelColor?: string;
  leftIconName?: string;
  leftIconColor?: string;
  leftIconSize?: number;
  rightIconName?: string;
  rightIconColor?: string;
  rightIconSize?: number;
  errorColor: string;
  errorMsg?: string;
  divider: string;
  isLowerCase: boolean;
  dirty: boolean;
  values: any;
  touched: FormikTouched<DictionaryType>;
  errors: FormikErrors<DictionaryType>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  setFieldTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void;
}
