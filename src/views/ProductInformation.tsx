import React from 'react';
import { Box, Flex, Checkbox } from '@chakra-ui/react';
import { Title } from '../components/Title/Title';
import { ProductInformationVisuals } from '../components/ProductInformationVisuals/ProductInformationVisuals';
import { ProductInformationTerms } from '../components/ProductInformationTerms/ProductInformationTerms';
import { translate } from '../helpers/helpers';

interface ProductInformationProps {
  setTermsAgreed: React.Dispatch<React.SetStateAction<boolean>>;
  termsAgreed: boolean;
}

function ProductInformation(props: ProductInformationProps): JSX.Element {
  const { setTermsAgreed, termsAgreed } = props;
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
      <Flex justifyContent="flex-end" p="10px 0 40px">
        <Checkbox
          colorScheme="green"
          onChange={() => setTermsAgreed(!termsAgreed)}
          size="md"
        >
          {translate('productInformation.acceptTerms')}
        </Checkbox>
      </Flex>
    </Box>
  );
}
export { ProductInformation };
