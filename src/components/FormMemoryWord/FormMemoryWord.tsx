import React from 'react';
import { Field } from 'formik';
import {
  Input,
  FormLabel,
  Icon,
  InputGroup,
  Box,
  Text,
} from '@chakra-ui/react';
import { translate } from '../../helpers/helpers';

interface FieldState {
  field: {
    name: string;
    value: string;
    onBlur(): void;
    onChange(): void;
  };
}

interface FormMemoryWordProps {
  memoryWord: {
    name: string;
  };
}

export function FormMemoryWord(props: FormMemoryWordProps): JSX.Element {
  const { memoryWord } = props;
  return (
    <Field name={memoryWord.name}>
      {(fieldState: FieldState) => {
        const { field } = fieldState;
        return (
          <Box p="25px 0 40px">
            <FormLabel fontWeight="600" fontSize="0.7rem" htmlFor="name">
              {translate('form.memoryWord')}{' '}
              <Icon name="info-outline" color="brand.600" size="14px" />
            </FormLabel>
            <InputGroup size="sm">
              <Input
                {...field}
                isInvalid={field.value.length >= 59}
                errorBorderColor="warning"
                placeholder={translate('form.placeholder.memoryWord')}
              />
            </InputGroup>
            <Text
              fontSize="10px"
              color="brand.600"
              float="right"
            >{`${field.value.length}/60`}</Text>
          </Box>
        );
      }}
    </Field>
  );
}
