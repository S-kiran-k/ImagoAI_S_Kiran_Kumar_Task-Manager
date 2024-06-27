import React from "react";
import { toast ,Toaster } from "sonner"; // Import toast from sonner

const TaskManagerItems = ({
  data,
  editableId,
  editedTask,
  editedStatus,
  editedDeadline,
  toggleEditable,
  setEditedTask,
  setEditedStatus,
  setEditedDeadline,
  saveEditedTask,
  deleteTask,
}) => {
  const handleSaveClick = (taskId) => {
    saveEditedTask(taskId);
    toggleEditable(null); // Toggle back to view mode after saving
    toast.success("Task saved successfully"); // Display success toast
  };

  const handleDeleteClick = (taskId) => {
    deleteTask(taskId);
    toast.error("Task deleted successfully"); // Display deletion toast
  };

  return (
    <tr key={data.id}>
      <td className="px-4 py-2">
        {editableId === data.id ? (
          <input
            type="text"
            className="form-control"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        ) : (
          data.task
        )}
      </td>
      <td className="px-4 py-2">
        {editableId === data.id ? (
          <input
            type="text"
            className="form-control"
            value={editedStatus}
            onChange={(e) => setEditedStatus(e.target.value)}
          />
        ) : (
          data.status
        )}
      </td>
      <td className="px-4 py-2">
        {editableId === data.id ? (
          <input
            type="date"
            className="form-control"
            value={editedDeadline}
            onChange={(e) => setEditedDeadline(e.target.value)}
          />
        ) : data.deadline ? (
          new Date(data.deadline).toLocaleDateString()
        ) : (
          ""
        )}
      </td>
      <td className="px-4 py-2">
        {editableId === data.id ? (
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 mr-2 rounded-md"
            onClick={() => handleSaveClick(data.id)}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-sm mr-2"
            onClick={() => toggleEditable(data.id)}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
          onClick={() => handleDeleteClick(data.id)}
        >
          Delete
        </button>
      </td>
      <Toaster position="bottom-right" richColors />
    </tr>
  );
};

export default TaskManagerItems;
