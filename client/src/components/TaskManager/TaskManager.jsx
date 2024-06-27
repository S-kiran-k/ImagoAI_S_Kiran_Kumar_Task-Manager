
const TaskManager = () => {
  return (
    <>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7">
            <TodoList />
          </div>
          <div className="col-md-5">
            <AddTask />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskManager