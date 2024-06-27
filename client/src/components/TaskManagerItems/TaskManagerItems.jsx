
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
            type="date" // Changed to date input
            className="form-control"
            value={editedDeadline}
            onChange={(e) => setEditedDeadline(e.target.value)}
          />
        ) : data.deadline ? (
          new Date(data.deadline).toLocaleDateString() // Display date only
        ) : (
          ""
        )}
      </td>
      <td className="px-4 py-2">
        {editableId === data.id ? (
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-sm mr-2"
            onClick={() => saveEditedTask(data.id)}
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
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-sm"
          onClick={() => deleteTask(data.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskManagerItems;
