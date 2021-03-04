import { HttpStatus } from './helpers';

const PRUEBA_KO = 'pruebaKO123';

const RESPONSE_OK = { status: HttpStatus.OK.value };
const RESPONSE_KO = { status: HttpStatus.UNAUTHORIZED.value };

export function submitForm(
  password: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  memoryWord = ''
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    return setTimeout(
      () =>
        password !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO),
      3000
    );
  });
}
