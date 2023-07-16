import { useState } from "react";
import { connect } from "react-redux";

import { addTodo, toggleTodo, deleteTodo } from "../redux/actions";

const TodoApp = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleInputChangeTodoName = (e) => {
    setTodoName(e.target.value);
  };
  const handleInputChangeTodoDescription = (e) => {
    setTodoDescription(e.target.value);
  };

  const addTodoButton = () => {
    if (todoName !== "" && todoDescription !== "") {
      addTodo(todoName, todoDescription);
    }
    setTodoName("");
    setTodoDescription("");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Todo App</h2>
      <div className="flex-none mb-4 sm:flex">
        <input
          type="text"
          value={todoName}
          onChange={handleInputChangeTodoName}
          placeholder="Enter a new todo name"
          className="p-2 mr-2 mt-2 rounded border text-gray-800"
        />
        <input
          type="text"
          value={todoDescription}
          onChange={handleInputChangeTodoDescription}
          placeholder="Enter a new todo description"
          className="p-2 mr-2 mt-2 rounded border text-gray-800"
        />
        <button
          onClick={addTodoButton}
          className="px-4 py-2 mt-2 bg-blue-500 text-white rounded border border-blue-500 hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos?.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 rounded p-2 mb-2"
          >
            <div>
              <h2 className={`font-bold ${todo?.completed && "line-through"}`}>
                {todo?.name}
              </h2>
              <div>{todo?.description}</div>
            </div>
            <div className="flex items-center justify-between bg-gray-100 rounded p-2 mb-2">
              {!todo?.completed && (
                <button
                  onClick={() => toggleTodo(todo?.id)}
                  className="px-2 py-1 me-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  complete
                </button>
              )}
              <button
                onClick={() => deleteTodo(todo?.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
