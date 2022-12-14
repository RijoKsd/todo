let todoInput = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let todoItemList = document.getElementById("todo-items-list");
let todoInputData;

// Empty array
let todoInputDataArray = [];

// enter key press   to add list item
todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Add list item
addBtn.addEventListener("click", () => {
  todoInputData = todoInput.value;
  todoInputDataArray.push(todoInputData);
  // check input bar is empty or not
  if (todoInputData === "") {
    return alert("Please enter a valid input");
  }

  // Setting value to local Storage
  setLocalStorage();

  // Get from local storage
  getLocalStorage();
});

// Delete the list item
function deleteKitcenItem(event) {
  if (event.target.classList[0] === "trash-btn") {
    let item = event.target.parentElement;
    item.classList.add("slideOut");
    item.addEventListener("transitionend", () => {
      item.remove();
    });
    // Delete item from local storage when prssing trash button
    let index = todoInputDataArray.indexOf(item.innerText);
    todoInputDataArray.splice(index, 1);
    setLocalStorage();
  }
}

// Edit the list item
function edittodoItem(event) {
  if (event.target.classList[0] === "edit-btn") {
    let editedValue = prompt("Enter new text");
    let item = event.target.parentElement;
    //  item.innerText = editedValue;
    let spanEl = item.querySelector("span");

    spanEl.innerText = editedValue;
    // Delete item from local storage when prssing trash button
    // edit the value from local storage when pressing edit button and update the UI also with new value in local storage 
    let index = todoInputDataArray.indexOf(item.innerText);
    todoInputDataArray.splice(index, 1, editedValue);
    setLocalStorage();
    // buildUI(); 
 




    
  }
}

function buildUI() {
  todoItemList.textContent = "";
  todoInputDataArray.forEach((item) => {
    //create Dom elements
    let li = document.createElement("li");
    let spanEl = document.createElement("span");
    li.append(spanEl);
    spanEl.innerText = item;
    // li.innerText = todoInputData? todoInputData: alert("Please enter a valid input") ;
    if (todoInputData === "") {
      return;
    }
    //create css for li
    li.style.cssText = "animation-name: slideIn;";
 
 
    todoItemList.append(li);
    // clear input
    todoInput.value = "";
    // focus on input
    todoInput.focus();

    // Create edit button
    let editBtn = document.createElement("img");
    editBtn.src = "./assests/edit.svg";
    editBtn.classList.add("edit-btn");
    //create css for edit-btn
    editBtn.style.cssText = "margin-left :auto; margin-right:10px;";
    li.appendChild(editBtn);

    // Delete image button
    let trashBtn = document.createElement("img");
    trashBtn.src = "./assests/delete.svg";
    trashBtn.classList.add("trash-btn");
    li.appendChild(trashBtn);
  });
}

function setLocalStorage() {
  localStorage.setItem("key", JSON.stringify(todoInputDataArray));
}

function getLocalStorage() {
  if (localStorage.getItem("key")) {
    todoInputDataArray = JSON.parse(localStorage.getItem("key"));
    buildUI();
  }
}

// Delete todo item function
todoItemList.addEventListener("click", deleteKitcenItem);

// Edit todo item function
todoItemList.addEventListener("click", edittodoItem);

getLocalStorage();
