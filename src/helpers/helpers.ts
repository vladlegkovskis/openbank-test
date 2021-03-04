import { get, isUndefined } from 'lodash';
import es from '../locale/es.json';
import { HttpStatus } from '../service/helpers';

const passwordPattern = new RegExp(
  '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$'
);

const translate = (key: string): string => {
  const message = get(es, key);
  return isUndefined(message) ? key : message;
};

const responseToString = (responseStatus: number): string => {
  if (responseStatus === HttpStatus.OK.value) {
    return 'success';
  }
  if (responseStatus === HttpStatus.UNAUTHORIZED.value) {
    return 'error';
  }
  return '';
};

export { translate, responseToString, passwordPattern };
