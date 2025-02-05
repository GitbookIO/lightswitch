const express = require('express');
const router = express.Router();

const projects = [
  { id: 1, name: 'Website Redesign', description: 'Redesign the corporate website' },
  { id: 2, name: 'App Launch', description: 'Prepare and launch the mobile app' },
];

// Get all projects
router.get('/', (req, res) => {
  res.json(projects);
});

// Get a single project
router.get('/:id', (req, res) => {
  const project = projects.find((p) => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
});

// Add a new project
router.post('/', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newProject = {
    id: projects.length + 1,
    name,
    description,
  };

  projects.push(newProject);
  res.status(201).json(newProject);
});

module.exports = router;
