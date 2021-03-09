import { ValidationStrings } from '@constants';
import * as Yup from 'yup';

export const CreateProfileSchema = Yup.object().shape({
  source: Yup.string().required(ValidationStrings.requireProfile),
  fileName: Yup.string().required(ValidationStrings.requireProfile),
  data: Yup.string().required(ValidationStrings.requireProfile).nullable()
});
