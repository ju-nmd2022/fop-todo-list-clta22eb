
const addTaskElement = document.getElementById("add-task");
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");


buttonElement.addEventListener("click", () => {
    addToDo();
});

let taskArray = [];

// next lines where written with help from the fruit shop tutorial video
function removeTask() {
    const element = this.parentNode;

    // const j = element.querySelector("div");
    // const emoji = j.innerHTML;
    // const emojiIndex = taskArray.indexOf(emoji);
    // taskArray.splice(emojiIndex, 1);

    element.parentNode.removeChild(element);
}


function addToDo() {
    let addTask = {name: inputElement.value};

    if (localStorage.addTask === undefined) {
        localStorage.addTask = JSON.stringify([]);
    }
    let taskArray = JSON.parse(localStorage.addTask);
    taskArray.push(addTask);
    localStorage.addTask = JSON.stringify(taskArray);

    displayTasks();
}


function displayTasks() {
    if (localStorage.addTask !== undefined) {
        let taskArray = JSON.parse(localStorage.addTask);
        const taskContainerElement = document.getElementById("tasks");
        taskContainerElement.innerHTML = " ";
        
        for (let score of taskArray) {
            const div = document.createElement("div");
            taskContainerElement.appendChild(div);

            const task = document.createElement("span");
            task.innerText = score.name;
            div.appendChild(task);
            inputElement.value = "";
            task.addEventListener("click", () => {
                if (task.style.textDecoration) {
                    task.style = "none";
               } else {
                    task.style.textDecoration = "line-through";
                }
            });
                
            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-button");
            removeButton.innerText = "🚫";
            removeButton.addEventListener("click", removeTask);
            div.appendChild(removeButton);
        }
    }
    
}

displayTasks();

//explanation
// taskElement = the whole task (task & removeButton)
//        task = only the text in the task
//        removeButton = the remove button in the task