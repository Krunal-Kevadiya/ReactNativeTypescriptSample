import { RegexStrings, ValidationStrings } from '@constants';
import * as Yup from 'yup';

export const CreateUserNameSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, ValidationStrings.minUsername)
    .matches(RegexStrings.userNameRegExp, ValidationStrings.emptyUsername)
    .required(ValidationStrings.requireUsername)
});
