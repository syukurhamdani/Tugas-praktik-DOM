let taskInput = document.getElementById("taskInput");

let taskList = document.getElementById("taskList");

// Muat data dari localStorage saat halaman dimuat

window.onload = function () {

  let saved = localStorage.getItem("tasks");

  if (saved) {

    let tasks = saved.split("\n");

    tasks.forEach(function (task) {

      if (task.trim() !== "") {

        createTaskElement(task);

      }

    });

  }

};

function addTask() {

  let taskText = taskInput.value.trim();

  if (taskText === "") {

    alert("Input tidak boleh kosong!");

    return;

  }

  createTaskElement(taskText);

  saveToLocalStorage();

  taskInput.value = "";

}

function createTaskElement(taskText) {

  let li = document.createElement("li");

  li.textContent = taskText;

  let deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Hapus";

  deleteBtn.onclick = function () {

    taskList.removeChild(li);

    saveToLocalStorage();

  };

  li.appendChild(deleteBtn);

  taskList.appendChild(li);

}

function saveToLocalStorage() {

  let tasks = [];

  let items = taskList.getElementsByTagName("li");

  for (let item of items) {

    let taskText = item.childNodes[0].nodeValue.trim();

    tasks.push(taskText);

  }

  localStorage.setItem("tasks", tasks.join("\n"));

}
