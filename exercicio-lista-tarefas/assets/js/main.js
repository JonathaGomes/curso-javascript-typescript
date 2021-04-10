const inputTask = document.querySelector(".input-new-task");
const buttonAddTask = document.querySelector(".add-task");
const tasks = document.querySelector(".tasks");

function createItemList() {
  const li = document.createElement("li");
  return li;
}

function createButtonDelete(li) {
  li.innerText += " ";
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "Excluir";
  buttonDelete.setAttribute("class", "delete-task");
  buttonDelete.setAttribute("title", "Excluir essa tarefa");
  li.appendChild(buttonDelete);
}

inputTask.addEventListener("keypress", (e) => {
  if(e.keyCode === 13) {
    if(!inputTask.value) return;
    createTask(inputTask.value);
  }
})

function clearInput() {
  inputTask.value = "";
  inputTask.focus();
}

function createTask(nameTask) {
  const li = createItemList();
  li.innerHTML = nameTask;
  tasks.appendChild(li);
  clearInput();
  createButtonDelete(li);
  saveTasks();
}

buttonAddTask.addEventListener("click", () => {
  if(!inputTask.value) return;
  createTask(inputTask.value);
})

document.addEventListener("click", (event) => {
  const element = event.target;
  if(element.classList.contains("delete-task")) {
    element.parentElement.remove();
    saveTasks();
  }
})

function saveTasks() {
  const liTasks = tasks.querySelectorAll("li");
  const listTasks = [];

  for(let task of liTasks) {
    let textTask = task.innerText;
    textTask = textTask.replace("Excluir", "").trim();
    listTasks.push(textTask);
  }
  const tasksJSON = JSON.stringify(listTasks)
  localStorage.setItem("tasks", tasksJSON);
}

function addTasksSaved() {
  const tasks = localStorage.getItem("tasks");
  const listTasks = JSON.parse(tasks);
  
  for (let task of listTasks) {
    createTask(task);
  }
}

addTasksSaved();