const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("button");

addBtn.addEventListener("click", () => {
  const todoText = todoInput.value;

  const todoItem = document.createElement("li");
  todoItem.innerText = todoText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", (e) => {
    todoList.removeChild(e.path[1]);
  });
  todoItem.appendChild(deleteBtn);

  const todoList = document.createElement("ul");
  todoList.appendChild(todoItem);

  document.body.appendChild(todoList);
});
