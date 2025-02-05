// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as TasksTaskIDAPI from './tasks-task-id';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Tasks extends APIResource {
  /**
   * Add a new task
   */
  create(body: TaskCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/tasks', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all tasks
   */
  list(options?: RequestOptions): APIPromise<TaskListResponse> {
    return this._client.get('/tasks', options);
  }
}

export interface Task {
  id?: number;

  projectId?: number;

  status?: string;

  title?: string;
}

export type TaskListResponse = Array<TasksTaskIDAPI.Task>;

export interface TaskCreateParams {
  id?: number;

  projectId?: number;

  status?: string;

  title?: string;
}

export declare namespace Tasks {
  export {
    type Task as Task,
    type TaskListResponse as TaskListResponse,
    type TaskCreateParams as TaskCreateParams,
  };
}
