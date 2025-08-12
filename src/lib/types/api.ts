import type {AxiosError, AxiosResponse} from 'axios';
import {User} from './user.ts';

// Body shape on 200s
export interface ApiSuccessEnvelope<T = unknown> {
  data: T;
  message?: string;
  localKey?: string;
}

// Body shape on 4xx/5xx
export interface ApiErrorEnvelope {
  message?: string;
  localKey?: string;
}

export type ApiAxiosResponse<T = unknown> = AxiosResponse<
  ApiSuccessEnvelope<T>
>;
export type ApiAxiosError = AxiosError<ApiErrorEnvelope>;

export interface AuthResponse {
  access: string;
  refresh: string;
  user: User;
}
