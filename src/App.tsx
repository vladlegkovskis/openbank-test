import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Flex, useToast } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { ProductInformation } from './views/ProductInformation';
import { PasswordForm } from './views/PasswordForm';
import { Feedback } from './views/Feedback';
import { Header } from './components/Header/Header';
import { Spinner } from './components/Spinner/Spinner';
import { formInitialValues } from './model/passwordManagerFormInitialValues';
import { validationSchema } from './model/passwordManagerValidationSchema';
import { formModel } from './model/passwordManagerFormModel';
import { responseToString, translate } from './helpers/helpers';
import { submitForm } from './service/api';

// global VARs
const STARTING_STEP = 0;
const STEPS = ['Info', 'Form', 'Feedback'];
// model
const {
  formId,
  formField: { password, repeatPassword, memoryWord },
} = formModel;

export function App(): JSX.Element {
  const toast = useToast();
  const [step, setStep] = React.useState<number>(STARTING_STEP);
  const [apiResponse, setApiResponse] = React.useState<number>(0);
  const isSubmitStep = step === STEPS.findIndex((s) => s === 'Form');
  const isLastStep = step === STEPS.length - 1;
  const currentValidationSchema = validationSchema[step];
  const response = responseToString(apiResponse);
  function handleFeedback() {
    if (response === 'success') {
      return toast({
        title: translate('feedback.toast.passwordCreated'),
        description: translate('feedback.toast.successDescription'),
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
    if (response === 'error') {
      setStep(STARTING_STEP);
    }
    return null;
  }
  function isStatus(status: any): status is { status: number } {
    return 'status' in status;
  }
  async function onFormSubmit(
    values: { password: string; memoryWord: string | undefined },
    actions: { setSubmitting: (arg0: boolean) => void; resetForm: () => void }
  ) {
    try {
      const resp = await submitForm(values.password, values.memoryWord);
      if (resp && isStatus(resp)) {
        setApiResponse(resp.status);
      }
      actions.setSubmitting(false);
      actions.resetForm();
      setStep(() => Math.max(step + 1, 0));
    } catch (errorResponse) {
      setApiResponse(errorResponse.status);
      actions.setSubmitting(false);
      actions.resetForm();
      setStep(() => Math.max(step + 1, 0));
    }
  }
  const onStepSubmit = React.useCallback(
    (values, actions) => {
      if (isSubmitStep) {
        onFormSubmit(values, actions);
      } else {
        setStep(() => Math.max(step + 1, 0));
        actions.setTouched({});
        actions.setSubmitting(false);
      }
    },
    [setStep, step, isSubmitStep]
  );
  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );

  const stepPages = [
    <ProductInformation />,
    <PasswordForm
      password={password}
      repeatPassword={repeatPassword}
      memoryWord={memoryWord}
    />,
    <Feedback apiResponse={apiResponse} />,
  ];

  return (
    <Box>
      <Header />
      <Formik
        initialValues={formInitialValues}
        validationSchema={currentValidationSchema}
        onSubmit={onStepSubmit}
        isInitialValid={currentValidationSchema.isValidSync(formInitialValues)}
      >
        {(props) => {
          return (
            <Form id={formId}>
              <Box
                bg="white"
                boxShadow="0 0 3px #E4E4E4"
                m={{ base: '0', md: '-50px auto 0' }}
                p={{ base: '10px 10px 40px', md: '40px 80px' }}
                pointerEvents={props.isSubmitting ? 'none' : 'auto'}
                w={['100%', '100%', 890]}
              >
                {stepPages[step]}
                {isLastStep ? (
                  <Flex w={['100%', '100%', 720]} justify="flex-end">
                    <Button
                      color="brand.200"
                      fontWeight="normal"
                      onClick={handleFeedback}
                      rightIcon={<ArrowForwardIcon />}
                      variant="link"
                    >
                      {translate(`feedback.${response}.action`)}
                    </Button>
                  </Flex>
                ) : (
                  <Flex justify="space-between">
                    {step !== STARTING_STEP ? (
                      <Button onClick={onPrevClick}>
                        {translate('button.cancel')}
                      </Button>
                    ) : (
                      <Box />
                    )}
                    <Button
                      _hover={{ bg: 'brand.300', opacity: 0.8 }}
                      bg="brand.300"
                      color="white"
                      disabled={isSubmitStep && !props.isValid}
                      rightIcon={<ArrowForwardIcon color="white" />}
                      type="submit"
                    >
                      {isSubmitStep
                        ? translate('button.submit')
                        : translate('button.next')}
                    </Button>
                  </Flex>
                )}
                {props.isSubmitting && <Spinner />}
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
