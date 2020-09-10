//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event) {
	event.preventDefault();

	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	const completeButton = document.createElement("button");
	completeButton.innerHTML = `<i class="fas fa-check"></i>`;
	completeButton.classList.add("complete-button");
	todoDiv.appendChild(completeButton);

	const trashButton = document.createElement("button");
	trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
	trashButton.classList.add("trash-button");
	todoDiv.appendChild(trashButton);

	todoList.appendChild(todoDiv);

	todoInput.value = "";
}

function deleteCheck(e) {
	const item = e.target;
	const todo = item.parentElement;
	if (item.classList[0] === "trash-button") {
		todo.remove();
	} else if (item.classList[0] === "check-button") {
		todo.classList.toggle("completed");
	}
}
