
const express = require('express');
const router = express.Router();

const tasks = [
    { id: 1, projectId: 1, title: "Wireframe Design", status: "In Progress" },
    { id: 2, projectId: 2, title: "Marketing Campaign", status: "Not Started" }
];

// Get all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

// Get tasks for a project
router.get('/project/:projectId', (req, res) => {
    const projectTasks = tasks.filter(t => t.projectId === parseInt(req.params.projectId));
    res.json(projectTasks);
});

// Add a new task
router.post('/', (req, res) => {
    const { projectId, title, status } = req.body;

    if (!projectId || !title || !status) {
        return res.status(400).json({ error: "Project ID, title, and status are required" });
    }

    const newTask = {
        id: tasks.length + 1,
        projectId,
        title,
        status
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update a task
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, status } = req.body;

    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return res.status(404).json({ error: "Task not found" });

    if (title) task.title = title;
    if (status) task.status = status;

    res.json(task);
});

module.exports = router;
