const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const openApiSpec = require("../swagger/openapi.json");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
const projectRoutes = require("./routes/projects");
const taskRoutes = require("./routes/tasks");
const userRoutes = require("./routes/users");

app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));

// Serve the OpenAPI JSON
app.get("/openapi.json", (req, res) => {
  res.sendFile(path.join(__dirname, "../swagger/openapi.json"));
});

// Export the app for Vercel or start the server locally
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running locally at http://localhost:${PORT}`);
  });
}

module.exports = app;
