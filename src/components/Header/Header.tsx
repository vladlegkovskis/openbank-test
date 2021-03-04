import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

export function Header(): JSX.Element {
  return (
    <Flex h="70px" bg="brand.100">
      <Image
        p="20px"
        src="https://i.ibb.co/D5zv2sY/logo-openbank.png"
        alt="logo-openbank"
        border="0"
      />
    </Flex>
  );
}
