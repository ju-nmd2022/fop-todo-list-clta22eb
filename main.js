// functioning localStorage & JSON was written with help of Tyler Potts on YouTube, changes of his code was made. Link: https://www.youtube.com/watch?v=6eFwtaZf6zc

//define array where the tasks are stored
let tasksArray = [];

window.addEventListener("load", () => {
    //check and get the stored tasks (if there are any)
    const storedTasks = localStorage.getItem("tasksArray");
    
    if (storedTasks) {
      tasksArray = JSON.parse(storedTasks);
    }

    //get the text input and "add"-button element from html
    const newTaskInput = document.getElementById("input");
    const buttonElement = document.getElementById("button");
    
    //what happens when you click on the "add"-button
    buttonElement.addEventListener("click", () => {
        //if nothing is written and alert happens
        if ( newTaskInput.value === "" ) {
            alert("Please enter a task!");
        } else {
            //puts the task into the array and saves it
            const task = {
            text: newTaskInput.value,
            done: false
            }
            
            tasksArray.push(task);
            localStorage.setItem("tasksArray", JSON.stringify(tasksArray));

            //removes what was previously written
            newTaskInput.value = "";
            //displays the tasks
            displayTasks();
        }
    });
    displayTasks();
})

function displayTasks() {
    //get the element where the tasks will be displayed from the html
    const taskList = document.getElementById("task-list");

    //prevents tasks from duplicating everytime "add"-button is clicked
    taskList.innerHTML = "";

    //puts the task elements together
    for (let task of tasksArray) {
        //each tasks is in its own div
        const taskItem = document.createElement("div");

        //wrap everything in a label to make it able to click anywhere in the label to mark as done
        const label = document.createElement("label");
        taskItem.appendChild(label);

        //the check box (is not displayed) but is used to make function as done (and connected to the label)
        const checkInput = document.createElement("input");
        checkInput.type = "checkbox";
        checkInput.checked = task.done;
        label.appendChild(checkInput);

        //the task text (and connected to the label)
        const taskText = document.createElement("span");
        taskText.innerText = task.text;
        label.appendChild(taskText);

        //the remove button (and connected to the label)
        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.innerText = "🚫";
        label.appendChild(removeButton);

        //connect the label to the div
        taskList.appendChild(taskItem);
        
        //if input is checked, done = true, if not checked done = false
        checkInput.addEventListener("click", () => {
            task.done = checkInput.checked;

            //saves that info to the array and redisplay tasks to show the change
            localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
            displayTasks();
        })

        //if done = true, class will be added and task will be marked as done. if not done, no class. 
        if (task.done) {     
            taskItem.classList.add("done");              
        }

        //removes the task if the remove button is clicked
        removeButton.addEventListener("click", () => {
            const taskIndex = tasksArray.indexOf(task);
            tasksArray.splice(taskIndex, 1);

            //once again, saves and redisplays tasks to show the change
            localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
            displayTasks();
        })

    };
}