import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Title } from '../components/Title/Title';
import { responseToString, translate } from '../helpers/helpers';

interface FeedbackProps {
  apiResponse: number;
}

export function Feedback(props: FeedbackProps): JSX.Element {
  const { apiResponse } = props;

  const response = responseToString(apiResponse);

  return (
    <Box pb="40px">
      <Title text={`feedback.${response}.heading`} underlined={false} />
      <Text fontSize="sm" color="brand.600">
        {translate(`feedback.${response}.message`)}
      </Text>
    </Box>
  );
}
