# Projects

Types:

- <code><a href="./src/resources/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /projects">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> void</code>
- <code title="get /projects">client.projects.<a href="./src/resources/projects.ts">list</a>() -> ProjectListResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">Task</a></code>
- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="post /tasks">client.tasks.<a href="./src/resources/tasks.ts">create</a>({ ...params }) -> void</code>
- <code title="get /tasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>() -> TaskListResponse</code>

# TasksTaskID

Methods:

- <code title="put /tasks/{task_id}">client.tasksTaskID.<a href="./src/resources/tasks-task-id.ts">update</a>(taskID, { ...params }) -> Task</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> void</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>() -> UserListResponse</code>
