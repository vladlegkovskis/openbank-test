import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { SVGIcons } from '../../assets/img/SVGIcons';
import { translate } from '../../helpers/helpers';

export function ProductInformationVisuals(): JSX.Element {
  return (
    <Flex
      align={{ base: 'center', md: 'baseline' }}
      flexDirection={{ base: 'column', md: 'row' }}
      justify={{ base: 'center', md: 'space-around' }}
      p={{ base: '10px', md: '75px 110px 40px' }}
    >
      <Flex flexDirection="column" align="center">
        <SVGIcons icon="icon-brain" />
        <Text
          color="brand.600"
          fontSize="sm"
          w="300px"
          p="0 15px"
          textAlign="center"
          text="productInformation.infoBoxOne"
        >
          {translate('productInformation.infoBoxOne')}
        </Text>
      </Flex>
      <Flex flexDirection="column" align="center" pt={{ base: '20px' }}>
        <SVGIcons icon="icon-safe" />
        <Text
          color="brand.600"
          fontSize="sm"
          w="300px"
          p="0 15px"
          textAlign="center"
        >
          {translate('productInformation.infoBoxTwo')}
        </Text>
      </Flex>
    </Flex>
  );
}
