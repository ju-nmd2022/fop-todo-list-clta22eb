// functioning localStorage & JSON was written with help of Tyler Potts on YouTube. Link: https://www.youtube.com/watch?v=6eFwtaZf6zc

window.addEventListener("load", () => {
    tasksArray = JSON.parse(localStorage.getItem("tasksArray"));

    const newTaskInput = document.getElementById("input");
    const buttonElement = document.getElementById("button");


    buttonElement.addEventListener("click", () => {
        if ( newTaskInput.value >= 0 ) {
            alert("Please enter a task!");
        } else {
            const task = {
            text: newTaskInput.value,
            done: false
            }
            
            tasksArray.push (task);
            localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
            newTaskInput.value = "";
            displayTasks();
        }
    });
    displayTasks();
})

function displayTasks() {
    const taskList = document.getElementById("task-list");

    taskList.innerHTML = "";

    for (let task of tasksArray) {
        const taskItem = document.createElement("div");

        //wrap everything in a label to make it able to click on text to mark as done
        const label = document.createElement("label");
        taskItem.appendChild(label);

        //check box (is not displayed)
        const checkInput = document.createElement("input");
        checkInput.type = "checkbox";
        checkInput.checked = task.done;
        label.appendChild(checkInput);

        //the task text
        const taskText = document.createElement("span");
        taskText.innerText = task.text;
        label.appendChild(taskText);

        //the remove button
        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.innerText = "🚫";
        label.appendChild(removeButton);

        //connect the all to mother list
        taskList.appendChild(taskItem);

        //the following 16 lines were taken from the youtube video mentionet at the top of this doc

        //if it was previously marked as done it will still be
        if (task.done) {
            taskItem.classList.add("done");
        }
        
        //if not proviously marked as done this will mark & save it
        checkInput.addEventListener("click", e => {
            task.done = e.target.checked;
            localStorage.setItem("tasksArray", JSON.stringify(tasksArray));

            if (task.done) {
                taskItem.classList.add("done");
            } else {
                taskItem.classList.remove("done");
            }

            displayTasks();
        })

        removeButton.addEventListener("click", () => {
            const taskIndex = tasksArray.indexOf(task);
            tasksArray.splice(taskIndex, 1);

            localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
            displayTasks();
        })

    };
}