const tasks = document.getElementsByClassName("tasks");
const articleElement = document.createElement("article");
articleElement.classList.add("tasks");

const taskElement = document.createElement("p");
taskElement.innerHTML = "task";
articleElement.appendChild(taskElement);

// return articleElement;


let newTask = "walk my fish";

const addElement = document.getElementById("new-task");

const inputElement = document.createElement("input");
inputElement.placeholder = "Username";
newTaskElement.appendChild(inputElement);



addButton.addEventListener("click", () => {
    if (inputElement.value.length > 0) {
        currentUser = inputElement.value;
        checkLogin();
        displayPosts();
    }
});
