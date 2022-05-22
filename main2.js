const yo = require("yo-yo");
// Grab dom elements
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("button");
const ul = document.getElementById("todos");

let todos = [];

const renderList = (list) => {
  return yo`<ul>
     ${list.map((todo) => {
       return yo`
       <li>
        ${todo.text}
        <button>x</button>
       </li>`;
     })}
     </ul>
     `;
};

const update = (todosToUpdate) => {
  const newList = renderList(todosToUpdate, update);
  yo.update(UlElement, newList);
};

const UlElement = renderList(todos, update);

const setState = (todoItemObj) => {
  todos.push(todoItemObj);
  update(todos);
};

addBtn.addEventListener("click", () => {
  const todoItemObj = { text: todoInput.value };
  setState(todoItemObj);
});

ul.appendChild(UlElement);
