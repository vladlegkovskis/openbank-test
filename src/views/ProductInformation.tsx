import React from 'react';
import { Box } from '@chakra-ui/react';
import { Title } from '../components/Title/Title';
import { ProductInformationVisuals } from '../components/ProductInformationVisuals/ProductInformationVisuals';
import { ProductInformationTerms } from '../components/ProductInformationTerms/ProductInformationTerms';

function ProductInformation(): JSX.Element {
  return (
    <Box>
      <Title underlined text="productInformation.createYourPasswordTitle" />
      <ProductInformationVisuals />
      <ProductInformationTerms
        subtitle="productInformation.howItWorksSubTitle"
        text="productInformation.howItWorksText"
      />
      <ProductInformationTerms
        subtitle="productInformation.whatInfoSubTitle"
        text="productInformation.whatInfoText"
      />
    </Box>
  );
}
export { ProductInformation };
