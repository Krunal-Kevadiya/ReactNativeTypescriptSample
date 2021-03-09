import { RegexStrings, ValidationStrings } from '@constants';
import * as Yup from 'yup';
import '../datautils/YupUtil';

export const SignInSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .or([Yup.string().email(), Yup.string().matches(RegexStrings.phoneRegExp)], ValidationStrings.emptyEmailOrPhone)
    .required(ValidationStrings.requireEmailOrPhone)
});
