const input = document.querySelector(".jsTaskInput");
const addBtn = document.querySelector(".jsAddTaskBtn");
const checkBtn = document.querySelector(".jsTaskCheck");
const deleteBtn = document.querySelector(".jsTaskDelete");
const taskListContainer = document.querySelector(".jsTaskListContainer");
const taskItem = document.querySelector(".jsTaskListItem");


let taskText = ``
function createTask() {
  taskText = input.value
  let newTaskItem = document.createElement("div");
  newTaskItem.classList.add("task-list-item");
  newTaskItem.innerHTML = `
    <p class="task-text">${taskText}</p>
    <div class="buttons">
      <button class="task-check jsTaskCheck"><i class="fa-solid fa-check"></i></button>
      <button class="task-delete jsTaskDelete"><i class="fa-solid fa-trash"></i></button>
    </div>`;
    taskListContainer.appendChild(newTaskItem)
}

addBtn.addEventListener("click", () => {
  createTask()
})