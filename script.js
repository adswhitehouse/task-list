const input = document.querySelector(".jsTaskInput");
const addBtn = document.querySelector(".jsAddTaskBtn");

const taskListContainer = document.querySelector(".jsTaskListContainer");

function createTask() {
  let taskText = input.value;
  if (taskText) {
    let newTaskItem = document.createElement("div");
    newTaskItem.classList.add("task-list-item");
    newTaskItem.innerHTML = `
      <p class="task-text">${taskText}</p>
      <div class="buttons">
        <button class="task-check jsTaskCheck"><i class="fa-solid fa-check"></i></button>
        <button class="task-delete jsTaskDelete"><i class="fa-solid fa-trash"></i></button>
      </div>`;
    taskListContainer.appendChild(newTaskItem);
    input.value = ``;
  }

  let deleteBtn = document.querySelectorAll(".jsTaskDelete");
  deleteBtn.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.parentElement.remove();
    });
  });

  const checkBtn = document.querySelectorAll(".jsTaskCheck");
  checkBtn.forEach((button) => {
    let isLineThrough = false;
    button.addEventListener("click", () => {
      if (!isLineThrough) {
        isLineThrough = true;
        button.parentElement.parentElement.classList.add(
          "line-through"
        );
        button.classList.add("task-checked");
      } else {
        isLineThrough = false;
        button.parentElement.parentElement.classList.remove(
          "line-through"
        );
        button.classList.remove("task-checked");
      }
    });
  });
}

addBtn.addEventListener("click", () => {
  createTask();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});
