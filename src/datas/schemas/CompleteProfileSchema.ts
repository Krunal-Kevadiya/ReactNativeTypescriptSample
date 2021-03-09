import { RegexStrings, ValidationStrings } from '@constants';
import * as Yup from 'yup';

export const CompleteProfileSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, ValidationStrings.minUsername)
    .matches(RegexStrings.userNameRegExp, ValidationStrings.emptyUsername)
    .required(ValidationStrings.requireUsername),
  source: Yup.string().required(ValidationStrings.requireProfile),
  fileName: Yup.string().required(ValidationStrings.requireProfile),
  data: Yup.string().required(ValidationStrings.requireProfile).nullable()
});
