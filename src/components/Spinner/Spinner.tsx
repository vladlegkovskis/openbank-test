import React from 'react';
import { Box, Spinner as ChakraSpinner } from '@chakra-ui/react';

export function Spinner(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        minWidth: '100%',
        minHeight: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2,
        cursor: 'none',
        pointerEvents: 'none',
      }}
    >
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        emptyColor="brand.300"
        color="brand.200"
        size="xl"
      />
    </Box>
  );
}
