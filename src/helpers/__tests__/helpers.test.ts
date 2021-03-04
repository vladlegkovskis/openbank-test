import { translate, responseToString, passwordPattern } from '../helpers';

describe('Helper functions', () => {
  describe('translate helper', () => {
    test('with valid key', () => {
      expect(translate('feedback.success.action')).toEqual('Acceder');
    });

    test('with not a valid key', () => {
      expect(translate('i.am.notValid')).toEqual('i.am.notValid');
    });
  });

  describe('responseToString helper', () => {
    test('success', () => {
      expect(responseToString(200)).toEqual('success');
    });

    test('error', () => {
      expect(responseToString(401)).toEqual('error');
    });

    test('unhandled code', () => {
      expect(responseToString(500)).toEqual('');
    });
  });

  // pattern.test
  describe('pattern helper', () => {
    test('matches the regex', () => {
      expect(passwordPattern.test('Password1')).toBe(true);
    });

    test('not matches the regex', () => {
      expect(passwordPattern.test('Password')).toBe(false);
    });
  });
});
