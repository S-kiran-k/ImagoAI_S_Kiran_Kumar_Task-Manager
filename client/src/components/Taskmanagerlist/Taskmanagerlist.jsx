import { useState, useEffect } from "react";
import axios from "axios";
import TaskManagerItems from "../TaskManagerItems/TaskManagerItems";

const TaskManagerList = () => {
  const [taskList, setTaskList] = useState([]);
  const [editableId, setEditableId] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [editedStatus, setEditedStatus] = useState("");
  const [editedDeadline, setEditedDeadline] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get("https://imagoai-s-kiran-kumar-task-manager.onrender.com/tasks")
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  const toggleEditable = (id) => {
    const rowData = taskList.find((data) => data.id === id);
    if (rowData) {
      setEditableId(id);
      setEditedTask(rowData.task);
      setEditedStatus(rowData.status);
      setEditedDeadline(rowData.deadline || "");
    } else {
      setEditableId(null);
      setEditedTask("");
      setEditedStatus("");
      setEditedDeadline("");
    }
  };

  const saveEditedTask = (id) => {
    const editedData = {
      task: editedTask,
      status: editedStatus,
      deadline: editedDeadline,
    };

    axios
      .put(
        `https://imagoai-s-kiran-kumar-task-manager.onrender.com/tasks/${id}`,
        editedData
      )
      .then((response) => {
        console.log("Task updated:", response.data);
        fetchTasks();
      })
      .catch((error) => {
        console.error(`Error updating task with id ${id}:`, error);
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(
        `https://imagoai-s-kiran-kumar-task-manager.onrender.com/tasks/${id}`
      )
      .then((response) => {
        console.log("Task deleted:", response.data);
        fetchTasks();
      })
      .catch((error) => {
        console.error(`Error deleting task with id ${id}:`, error);
      });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">task List</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Task</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Deadline</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((data) => (
              <TaskManagerItems
                key={data.id}
                data={data}
                editableId={editableId}
                editedTask={editedTask}
                editedStatus={editedStatus}
                editedDeadline={editedDeadline}
                toggleEditable={toggleEditable}
                setEditedTask={setEditedTask}
                setEditedStatus={setEditedStatus}
                setEditedDeadline={setEditedDeadline}
                saveEditedTask={saveEditedTask}
                deleteTask={deleteTask}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskManagerList;
