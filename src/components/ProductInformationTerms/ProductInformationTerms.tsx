import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { translate } from '../../helpers/helpers';

interface ProductInformationTermsPropsType {
  text: string;
  subtitle: string;
}

export function ProductInformationTerms(
  props: ProductInformationTermsPropsType
): JSX.Element {
  const { subtitle, text } = props;
  return (
    <Box pb="40px">
      <Text fontSize="md" fontWeight="600">
        {translate(subtitle)}
      </Text>
      <Text color="#597686" fontSize="sm">
        {translate(text)}
      </Text>
    </Box>
  );
}
