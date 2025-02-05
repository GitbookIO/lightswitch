// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as TasksAPI from './tasks';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class TasksTaskID extends APIResource {
  /**
   * Update a task
   */
  update(taskID: number, body: TasksTaskIDUpdateParams, options?: RequestOptions): APIPromise<TasksAPI.Task> {
    return this._client.put(`/tasks/${taskID}`, { body, ...options });
  }
}

export interface TasksTaskIDUpdateParams {
  id?: number;

  projectId?: number;

  status?: string;

  title?: string;
}

export declare namespace TasksTaskID {
  export { type TasksTaskIDUpdateParams as TasksTaskIDUpdateParams };
}
