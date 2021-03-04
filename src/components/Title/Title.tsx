import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { translate } from '../../helpers/helpers';

interface TitlePropsType {
  text: string;
  underlined: boolean;
}

export function Title(props: TitlePropsType): JSX.Element {
  const { text, underlined = false } = props;
  return (
    <>
      <Text fontSize="2xl" fontWeight="600">
        {translate(text)}
      </Text>
      {underlined && <Box w="40px" h="2px" bg="brand.500" />}
    </>
  );
}
