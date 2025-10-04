// Select elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to add task
function addTask() {
    const taskText = taskInput.value.trim(); // remove extra spaces

    if (taskText !== "") {
        // Create li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Event for removing task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li
        li.appendChild(removeBtn);
        // Append li to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }
}

// Event listeners
addButton.addEventListener('click', addTask);

// Allow pressing Enter to add task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
