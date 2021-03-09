import { RegexStrings, ValidationStrings } from '@constants';
import * as Yup from 'yup';
import '../datautils/YupUtil';

export const SignUpSchema = Yup.object().shape({
  realName: Yup.string()
    .min(3, ValidationStrings.minName)
    .matches(RegexStrings.nameRegExp, ValidationStrings.emptyName)
    .required(ValidationStrings.requireName),
  emailOrPhone: Yup.string()
    .or([Yup.string().email(), Yup.string().matches(RegexStrings.phoneRegExp)], ValidationStrings.emptyEmailOrPhone)
    .required(ValidationStrings.requireEmailOrPhone),
  userName: Yup.string()
    .min(4, ValidationStrings.minUsername)
    .matches(RegexStrings.userNameRegExp, ValidationStrings.emptyUsername)
    .required(ValidationStrings.requireUsername)
});
