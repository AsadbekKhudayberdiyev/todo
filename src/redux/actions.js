export const addTodo = (name, description) => ({
  type: "ADD_TODO",
  name,
  description,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});
