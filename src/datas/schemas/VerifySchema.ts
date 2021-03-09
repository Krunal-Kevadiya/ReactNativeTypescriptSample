import { RegexStrings, ValidationStrings } from '@constants';
import * as Yup from 'yup';

export const VerifySchema = Yup.object().shape({
  otp: Yup.string()
    .min(6, ValidationStrings.minOtp)
    .matches(RegexStrings.numberRegExp, ValidationStrings.emptyOtp)
    .required(ValidationStrings.requireOtp)
});
