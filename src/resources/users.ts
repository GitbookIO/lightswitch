// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  /**
   * Add a new user
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/users', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all users
   */
  list(options?: RequestOptions): APIPromise<UserListResponse> {
    return this._client.get('/users', options);
  }
}

export interface User {
  id?: number;

  email?: string;

  name?: string;
}

export type UserListResponse = Array<User>;

export interface UserCreateParams {
  id?: number;

  email?: string;

  name?: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
  };
}
