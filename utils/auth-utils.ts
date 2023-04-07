import { Dispatch, SetStateAction } from 'react';

export type AuthContextDataType =
  | {
      accessToken: string;
      user: {
        id: string;
        username: string;
        email: string;
        role: string;
      };
    }
  | Record<string, never>;

export type AuthContextApiType = Dispatch<SetStateAction<AuthContextDataType>>;
