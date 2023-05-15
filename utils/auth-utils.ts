import { Dispatch, SetStateAction } from 'react';
import { User } from './user-utils';

export type AuthContextDataType =
  | {
      accessToken: string;
      user: User;
    }
  | Record<string, never>;

export type AuthContextApiType = Dispatch<SetStateAction<AuthContextDataType>>;
