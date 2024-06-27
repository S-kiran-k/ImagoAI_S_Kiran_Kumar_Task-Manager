import  { useState } from "react";
import axios from "axios";

const TaskManagerAddItems = () => {
  const [newTask, setNewTask] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newDeadline, setNewDeadline] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask || !newStatus || !newDeadline) {
      console.error("All fields must be filled out.");
      return;
    }

    const taskData = {
      task: newTask,
      status: newStatus,
      deadline: newDeadline,
    };

    axios
      .post(
        "https://imagoai-s-kiran-kumar-task-manager.onrender.com/tasks",
        taskData
      )
      .then((response) => {
        console.log("Task added:", response.data);
        setNewTask("");
        setNewStatus("");
        setNewDeadline("");
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">Add Task</h2>
      <form className="bg-gray-200 p-4 rounded-lg">
        <div className="mb-3">
          <label className="block text-sm font-bold mb-1">Task</label>
          <input
            className="form-control block w-full border-gray-300 rounded-sm px-3 py-2 leading-4 focus:outline-none focus:border-blue-400 focus:ring-blue-400"
            type="text"
            placeholder="Enter Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-bold mb-1">Status</label>
          <input
            className="form-control block w-full border-gray-300 rounded-sm px-3 py-2 leading-4 focus:outline-none focus:border-blue-400 focus:ring-blue-400"
            type="text"
            placeholder="Enter Status"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-bold mb-1">Deadline</label>
          <input
            className="form-control block w-full border-gray-300 rounded-sm px-3 py-2 leading-4 focus:outline-none focus:border-blue-400 focus:ring-blue-400"
            type="date"
            value={newDeadline}
            onChange={(e) => setNewDeadline(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-sm"
          onClick={addTask}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskManagerAddItems;
