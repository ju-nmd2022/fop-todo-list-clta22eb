const tasksElement = document.getElementById("tasks");
const addTaskElement = document.getElementById("add-task");
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");


function createList() {
    buttonElement.addEventListener("click", addTask);
}


function addTask() {
    if (inputElement.value.length > 0) {
        
        const taskElement = document.createElement("div");
            const task = document.createElement("span");
            thingToDo = inputElement.value;
            taskElement.innerText = thingToDo;
            taskElement.appendChild(task);
            taskElement.addEventListener("click", () => {
                taskElement.classList.add("completed");
            });
        
            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-button");
            removeButton.innerText = "🚫";
            removeButton.addEventListener("click", removeTask);
            taskElement.appendChild(removeButton);
        
        tasksElement.appendChild(taskElement);
    } else {
        alert("Please enter a task!");
    }
}



createList();


