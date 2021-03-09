import { OtherStrings } from '@constants';
import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'or', function or(schemas, msg) {
  return this.test({
    name: 'or',
    message: msg || OtherStrings.yupEmptyDetail,
    test: (value) => {
      if (Array.isArray(schemas) && schemas.length > 1) {
        const resee = schemas.map((schema) => schema.isValidSync(value));
        return resee.some((res) => res);
      }
      throw new TypeError(OtherStrings.yupSchemasInvalid);
    },
    exclusive: false
  });
});
