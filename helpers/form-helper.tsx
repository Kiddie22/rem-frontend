import { NextRouter } from 'next/router';
import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { setLogin } from '@/store/user';
import instance from '@/api/axios-instance';

export default async function handleFormSubmit(
  path: string,
  body: object,
  router: NextRouter,
  dispatch: Dispatch<AnyAction>,
): Promise<string> {
  try {
    const res = await instance.post(path, JSON.stringify(body));
    const response = res.data;
    if (response.statusCode === 200 || response.statusCode === 201) {
      dispatch(
        setLogin({
          username: response.username,
          accessToken: response.accessToken,
        }),
      );
      router.push('/');
    }
  } catch (error) {
    const response = error.response.data;
    if (response.statusCode === 400) {
      if (path === '/auth/login') {
        return 'Please check your login credentials';
      }
      return response.message[0];
    }
    if (response.statusCode === 401) {
      return response.message;
    }
    if (response.statusCode === 409) {
      return response.message;
    }
    return response.message[0];
  }
  return '';
}
