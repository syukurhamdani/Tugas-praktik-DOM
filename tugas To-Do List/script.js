const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Muat data dari localStorage saat halaman dimuat
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => {
    createTaskElement(task);
  });
};

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Input tidak boleh kosong!");
    return;
  }

  createTaskElement(taskText);
  saveToLocalStorage();
  taskInput.value = "";
}

function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
    saveToLocalStorage();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function saveToLocalStorage() {
  const tasks = [];
  const items = taskList.getElementsByTagName("li");
  for (let item of items) {
    // Ambil hanya teks tugas, bukan teks tombol
    const taskText = item.childNodes[0].nodeValue.trim();
    tasks.push(taskText);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}