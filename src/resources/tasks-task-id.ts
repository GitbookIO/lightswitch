// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class TasksTaskID extends APIResource {
  /**
   * Update a task
   */
  update(taskID: number, body: TasksTaskIDUpdateParams, options?: RequestOptions): APIPromise<Task> {
    return this._client.put(`/tasks/${taskID}`, { body, ...options });
  }
}

export interface Task {
  id?: number;

  projectId?: number;

  status?: string;

  title?: string;
}

export interface TasksTaskIDUpdateParams {
  id?: number;

  projectId?: number;

  status?: string;

  title?: string;
}

export declare namespace TasksTaskID {
  export { type Task as Task, type TasksTaskIDUpdateParams as TasksTaskIDUpdateParams };
}
