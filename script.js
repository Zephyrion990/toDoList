const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">&#x2716;</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
});

function removeTask(button) {
  const listItem = button.parentElement;
  taskList.removeChild(listItem);
}
