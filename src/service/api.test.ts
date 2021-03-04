import { submitForm } from './api';

describe('Fetching', () => {
  test('async / await works with correct password', async () => {
    const value = await submitForm('Password100');
    expect(value).toEqual({ status: 200 });
  });
  test('async / await reject works', async () => {
    await expect(submitForm('pruebaKO123')).rejects.toEqual({ status: 401 });
  });
});
