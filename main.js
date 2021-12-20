const taskInput$$ = document.querySelector(".taskText");
const taskDateInput$$ = document.querySelector(".taskDate");
const addTaskBtn$$ = document.querySelector(".btn-add");
const taskContainer$$ = document.querySelector(".task-container");
const empty = document.querySelector(".empty");
const taskList = [];

addTaskBtn$$.addEventListener("click", () => addTask());

const addTask = () => {
    console.log(taskInput$$.value,taskDateInput$$.value )
  const newTask = { taskName: taskInput$$.value, date: taskDateInput$$.value };
  taskList.push(newTask);
  console.log(taskList);
  drawTask();
};

const drawTask = () => {
  taskContainer$$.innerHTML = "";
  empty.style.display = "none";

  const sortTaskList = taskList.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  for (let i = 0; i < sortTaskList.length; i++) {
    const task = sortTaskList[i];
    const myDiv$$ = document.createElement("div");
    const deleteDiv$$ = document.createElement("button");
    myDiv$$.classList.add("task");
    myDiv$$.innerHTML = `<p class="taskName">${task.taskName}</p><p class="date">${task.date}</p>`;
    deleteDiv$$.classList.add("btn-delete");
    deleteDiv$$.textContent = 'X';
    deleteDiv$$.addEventListener("click", () => {
      myDiv$$.remove();
      taskList.splice(
        taskList.findIndex(
          (deleteTask) =>
            deleteTask.taskName === task.taskName &&
            deleteTask.taskName === task.date
        ),1
      );
      isTaskEmpty();
    });

    myDiv$$.appendChild(deleteDiv$$);
    taskContainer$$.appendChild(myDiv$$);
  }
};

const isTaskEmpty = () => {
    taskList.length === 0 ? empty.style.display = "block" :     empty.style.display = "none";
};
