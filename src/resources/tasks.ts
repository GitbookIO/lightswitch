// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
   * Update a task
   */
  update(taskID: number, body: TaskUpdateParams, options?: RequestOptions): APIPromise<Task> {
    return this._client.put(path`/tasks/${taskID}`, { body, ...options });
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

export type TaskListResponse = Array<Task>;

export interface TaskCreateParams {
  id?: number;

  projectId?: number;

  status?: string;

  title?: string;
}

export interface TaskUpdateParams {
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
    type TaskUpdateParams as TaskUpdateParams,
  };
}
