import { translate } from '../helpers/helpers';

export const formModel = {
  formId: 'passwordManagerForm',
  formField: {
    password: {
      name: 'password',
      requiredErrorMsg: translate('form.enterPasswordRequired'),
      pattern: translate('form.enterPasswordPattern'),
    },
    repeatPassword: {
      name: 'repeatPassword',
      requiredErrorMsg: translate('form.confirmPasswordRequired'),
      mustMatch: translate('form.confirmPasswordMatch'),
    },
    memoryWord: {
      name: 'memoryWord',
    },
  },
};
