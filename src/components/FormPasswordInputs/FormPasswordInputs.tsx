import React, { useState } from 'react';
import { Field } from 'formik';
import {
  InputGroup,
  Input,
  InputRightElement,
  FormLabel,
  Box,
  IconButton,
  Flex,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { translate, passwordPattern } from '../../helpers/helpers';

interface FieldState {
  form: {
    values: {
      password: string;
      repeatPassword: string;
    };
    errors: {
      password:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
      repeatPassword:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
    };
    touched: any;
  };
  field: {
    name: string;
    value: string;
    onBlur(): void;
    onChange(): void;
  };
}

interface FormPasswordInputsProps {
  password: Password;
  repeatPassword: RepeatPassword;
}

interface Password {
  name: string;
  requiredErrorMsg: string;
}

interface RepeatPassword {
  name: string;
  requiredErrorMsg: string;
}

export function FormPasswordInputs(
  props: FormPasswordInputsProps
): JSX.Element {
  const { password, repeatPassword } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  return (
    <Flex
      alignItems={{ base: 'center' }}
      flexDirection={{ base: 'column', md: 'row' }}
      pt="30px"
    >
      <Box h="100px" w={['100%']}>
        <Field name={password.name}>
          {(fieldState: FieldState) => {
            const { form, field } = fieldState;
            return (
              <>
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel
                    fontSize="0.7rem"
                    fontWeight="600"
                    htmlFor={password.name}
                  >
                    {translate('form.enterPassword')}
                  </FormLabel>
                  <InputGroup size="sm" w={['100%', 250]}>
                    <Input
                      placeholder={translate('form.placeholder.enterPassword')}
                      type={showPassword ? 'text' : 'password'}
                      {...field}
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label="View Password"
                        border="none"
                        fontSize="10px"
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={() => setShowPassword(!showPassword)}
                        variant="outline"
                      />
                    </InputRightElement>
                  </InputGroup>
                  <Box
                    background={
                      passwordPattern.test(field.value) ? 'success' : 'warning'
                    }
                    h="5px"
                    position="relative"
                    w={`${field?.value?.length * 5}px`}
                  />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              </>
            );
          }}
        </Field>
      </Box>
      <Box pl={{ md: 30 }} h="100px" w={['100%']}>
        <Field name={repeatPassword.name}>
          {(fieldState: FieldState) => {
            const { form, field } = fieldState;
            return (
              <FormControl
                isInvalid={
                  form.errors.repeatPassword && form.touched.repeatPassword
                }
              >
                <FormLabel
                  fontWeight="600"
                  fontSize="0.7rem"
                  htmlFor={repeatPassword.name}
                >
                  {translate('form.confirmPassword')}
                </FormLabel>
                <InputGroup size="sm" w={['100%', 250]}>
                  <Input
                    {...field}
                    type={showPasswordConfirm ? 'text' : 'password'}
                    placeholder={translate('form.placeholder.confirmPassword')}
                  />
                  <InputRightElement>
                    <IconButton
                      fontSize="10px"
                      border="none"
                      variant="outline"
                      aria-label="View Confirm Password"
                      onClick={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                      icon={
                        showPasswordConfirm ? <ViewOffIcon /> : <ViewIcon />
                      }
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {form.errors.repeatPassword}
                </FormErrorMessage>
              </FormControl>
            );
          }}
        </Field>
      </Box>
    </Flex>
  );
}
