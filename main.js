const taskContainerElement = document.getElementById("tasks");
const addTaskElement = document.getElementById("add-task");
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");


buttonElement.addEventListener("click", () => {
    if (inputElement.value.length > 0) {
        const taskElement = document.createElement("div");

        const task = document.createElement("span");
        task.innerText = inputElement.value;
        taskElement.appendChild(task);
        inputElement.value = "";
        taskElement.addEventListener("click", () => {
            if (taskElement.style.textDecoration) {
                taskElement.style = "none";
           } else {
                taskElement.style.textDecoration = "line-through";
            }
        });
            
        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.innerText = "🚫";
        removeButton.addEventListener("click", removeTask);
        taskElement.appendChild(removeButton);
        
        taskContainerElement.appendChild(taskElement);
    } else {
        alert("Please enter a task!");
    }

});

// next 3 lines where written with help from the fruit shop tutorial video
function removeTask() {
    const element = this.parentNode;
    element.parentNode.removeChild(element);
}




//explanation
// taskElement = the whole task (task & removeButton)
//        task = only the text in the task
//        removeButton = the remove button in the task