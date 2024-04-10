import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handeNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handeDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddBtnClick = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter todo here"
          value={todoName}
          onChange={handeNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" onChange={handeDateChange} value={todoDate} />
      </div>
      <div className="col-2">
        <button
          className="btn btn-success kg-button"
          onClick={handleAddBtnClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
