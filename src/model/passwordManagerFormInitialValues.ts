import { formModel } from './passwordManagerFormModel';

const {
  formField: { password, repeatPassword, memoryWord },
} = formModel;

export const formInitialValues = {
  [password.name]: '',
  [repeatPassword.name]: '',
  [memoryWord.name]: '',
};
