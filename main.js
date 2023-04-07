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
            task.innerText = inputElement.value;
            taskElement.appendChild(task);
            taskElement.addEventListener("click", () => {
                if (taskElement.classList.contains("completed")) {
                    taskElement.classList.remove("completed");
                } else {
                    taskElement.classList.add("completed"); 
                }
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

function removeTask() {
    const element = this.parentNode;
    element.parentNode.removeChild(element);
}

createList();


//explanation
// taskElement = the whole task (task & removeButton)
//        task = only the text in the task
//        removeButton = the remove button in the task