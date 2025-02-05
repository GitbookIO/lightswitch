// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Projects extends APIResource {
  /**
   * Add a new project
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/projects', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all projects
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/projects', options);
  }
}

export interface Project {
  id?: number;

  description?: string;

  name?: string;
}

export type ProjectListResponse = Array<Project>;

export interface ProjectCreateParams {
  id?: number;

  description?: string;

  name?: string;
}

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
  };
}
