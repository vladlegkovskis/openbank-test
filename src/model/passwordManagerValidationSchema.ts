import * as Yup from 'yup';
import { formModel } from './passwordManagerFormModel';
import { passwordPattern } from '../helpers/helpers';

const {
  formField: { password, repeatPassword, memoryWord },
} = formModel;

export const validationSchema = [
  Yup.object(),
  Yup.object().shape({
    [password.name]: Yup.string()
      .required(`${password.requiredErrorMsg}`)
      .matches(passwordPattern, `${password.pattern}`),
    [repeatPassword.name]: Yup.string()
      .required(`${repeatPassword.requiredErrorMsg}`)
      .test(
        'passwords-match',
        `${repeatPassword.mustMatch}`,
        // eslint-disable-next-line func-names
        function (value) {
          return this.parent.password === value;
        }
      ),
    [memoryWord.name]: Yup.string(),
  }),
  Yup.object(),
];
