import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Title } from '../components/Title/Title';
import { FormPasswordInputs } from '../components/FormPasswordInputs/FormPasswordInputs';
import { FormMemoryWord } from '../components/FormMemoryWord/FormMemoryWord';
import { translate } from '../helpers/helpers';

interface PasswordFormProps {
  password: Password;
  repeatPassword: RepeatPassword;
  memoryWord: MemoryWord;
}

interface Password {
  name: string;
  requiredErrorMsg: string;
}

interface RepeatPassword {
  name: string;
  requiredErrorMsg: string;
}

interface MemoryWord {
  name: string;
}

export function PasswordForm(props: PasswordFormProps): JSX.Element {
  const { password, repeatPassword, memoryWord } = props;
  return (
    <Box>
      <Title underlined text="productInformation.createYourPasswordTitle" />
      <Text pt="32px" color="brand.600" fontSize="sm">
        {translate('form.passwordInfo')}
      </Text>
      <FormPasswordInputs password={password} repeatPassword={repeatPassword} />
      <Text pt="45px" color="brand.600" fontSize="sm">
        {translate('form.memoryWordInfo')}
      </Text>
      <FormMemoryWord memoryWord={memoryWord} />
    </Box>
  );
}
