const input = document.querySelector(".jsTaskInput");
const addBtn = document.querySelector(".jsAddTaskBtn");
const checkBtn = document.querySelector(".jsTaskCheck");

const taskListContainer = document.querySelector(".jsTaskListContainer");
const taskItem = document.querySelector(".jsTaskListItem");

function createTask() {
  let taskText = input.value
  let newTaskItem = document.createElement("div");
  newTaskItem.classList.add("task-list-item");
  newTaskItem.innerHTML = `
    <p class="task-text">${taskText}</p>
    <div class="buttons">
      <button class="task-check jsTaskCheck"><i class="fa-solid fa-check"></i></button>
      <button class="task-delete jsTaskDelete"><i class="fa-solid fa-trash"></i></button>
    </div>`;
    taskListContainer.appendChild(newTaskItem)
    input.value = ``

    let deleteBtn = document.querySelectorAll(".jsTaskDelete");
    deleteBtn.forEach((button) => {
      button.addEventListener("click", () => {
        button.parentElement.parentElement.remove()
      })
    })
}

addBtn.addEventListener("click", () => {
  createTask()
})

input.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    createTask()
  }
})
