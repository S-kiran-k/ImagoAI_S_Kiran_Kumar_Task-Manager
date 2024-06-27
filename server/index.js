const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await prisma.todo.findMany();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving tasks" });
  }
});

// Add new task
app.post("/tasks", async (req, res) => {
  try {
    const task = await prisma.todo.create({
      data: {
        task: req.body.task,
        status: req.body.status,
        deadline: new Date(req.body.deadline),
      },
    });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Error creating task" });
  }
});

// Update task
app.put("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const task = await prisma.todo.update({
      where: { id },
      data: {
        task: req.body.task,
        status: req.body.status,
        deadline: new Date(req.body.deadline),
      },
    });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: `Error updating task with id ${id}` });
  }
});

// Delete task
app.delete("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const task = await prisma.todo.delete({
      where: { id },
    });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: `Error deleting task with id ${id}` });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
