import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App } from './App';
import { submitForm } from './service/api';

jest.mock('./service/api');

describe('App test suit', () => {
  beforeEach(() => {
    submitForm.mockReturnValue({ status: 200 });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  const setup = () =>
    render(
      <ChakraProvider>
        <App />
      </ChakraProvider>
    );

  // eslint-disable-next-line jest/expect-expect
  test('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ChakraProvider>
        <App />
      </ChakraProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test('assert Info page', () => {
    // launch [info] page
    setup();
    expect(
      screen.queryByText(
        'Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas.'
      )
    ).toBeInTheDocument();
  });

  test('assert Password page', async () => {
    // launch [info] page
    const { getByText } = setup();
    fireEvent.click(getByText('Siguente'));
    // launch [password] page
    await waitFor(() => {
      expect(
        screen.queryByText(
          'En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdela bien.'
        )
      ).toBeInTheDocument();
    });
  });

  test('enter password that does not match the RegEx', async () => {
    // launch [info] page
    const { queryByPlaceholderText, getByText } = setup();
    fireEvent.click(getByText('Siguente'));
    // launch [password] page
    await waitFor(() => {
      const passwordInput = queryByPlaceholderText('Crea tu contraseña');
      fireEvent.change(passwordInput, { target: { value: 'wrongpass' } });
      fireEvent.click(getByText('Enviar'));
      expect(
        screen.queryByText('Mínimo 8 car, una mayúscula y un dígito')
      ).toBeInTheDocument();
    });
  });

  test('enter passwords that do not match', async () => {
    // launch [info] page
    const { queryByPlaceholderText, getByText } = setup();
    fireEvent.click(getByText('Siguente'));
    // launch [password] page
    await waitFor(async () => {
      const passwordInput = queryByPlaceholderText('Crea tu contraseña');
      const repeatPasswordInput = queryByPlaceholderText(
        'Repite tu contraseña'
      );
      // handle [password] change
      fireEvent.change(passwordInput, { target: { value: 'Password100' } });
      // handle [repeatPassword] change
      fireEvent.change(repeatPasswordInput, {
        target: { value: '001drowssaP' },
      });
      fireEvent.click(getByText('Enviar'));
      expect(
        screen.queryByText('La contraseña repetida debe coincidir')
      ).toBeInTheDocument();
    });
  });

  test('enter correct password', async () => {
    // launch [info] page
    const { queryByPlaceholderText, getByText } = setup();
    fireEvent.click(getByText('Siguente'));
    // launch [password] page
    await waitFor(async () => {
      const passwordInput = queryByPlaceholderText('Crea tu contraseña');
      const repeatPasswordInput = queryByPlaceholderText(
        'Repite tu contraseña'
      );
      // handle [password] change
      fireEvent.change(passwordInput, { target: { value: 'Password100' } });
      // handle [repeatPassword] change
      fireEvent.change(repeatPasswordInput, {
        target: { value: 'Password100' },
      });
      fireEvent.click(getByText('Enviar'));
      expect(screen.queryByText('Loading...')).toBeInTheDocument();
    });
  });
});
