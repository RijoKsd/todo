let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemList = document.getElementById("kitchen-items-list");
// Empty array
let kitchenInputArray = [];
// enter key press   to add list item
kitchenInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Add list item
addBtn.addEventListener("click", () => {
  let kitchenInputData = kitchenInput.value;
  //create Dom elements
  let li = document.createElement("li");
  let spanEl = document.createElement("span");
  li.append(spanEl);
  spanEl.innerText = kitchenInputData;
  // li.innerText = kitchenInputData? kitchenInputData: alert("Please enter a valid input") ;
  if (kitchenInputData === "") {
    return;
  }
  //create css for li
  li.style.cssText = "animation-name: slideIn;";

  kitchenInputArray.push(kitchenInputData);
  kitchenItemList.append(li);
  // clear input
  kitchenInput.value = "";
  // focus on input
  kitchenInput.focus();

  // Create edit button
  let editBtn = document.createElement("img");
  editBtn.src = "./edit.svg";
  editBtn.classList.add("edit-btn");
  //create css for edit-btn
  editBtn.style.cssText = "margin-left :auto; margin-right:10px;";
  li.appendChild(editBtn);

  // Delete image button
  let trashBtn = document.createElement("img");
  trashBtn.src = "./delete.svg";
  trashBtn.classList.add("trash-btn");
  li.appendChild(trashBtn);
});

// Delete the list item
function deleteKitcenItem(event) {
  if (event.target.classList[0] === "trash-btn") {
    let item = event.target.parentElement;
    item.classList.add("slideOut");
    item.addEventListener("transitionend", () => {
      item.remove();
    });
  }
}
// Edit the list item
function editKitchenItem(event) {
  if (event.target.classList[0] === "edit-btn") {
    let editedValue = prompt("Enter new text");
    let item = event.target.parentElement;
    //  item.innerText = editedValue;
    let spanEl = item.querySelector("span");
    spanEl.innerText = editedValue;
  }
}
// Delete kitchen item function
kitchenItemList.addEventListener("click", deleteKitcenItem);

// Edit kitchen item function
kitchenItemList.addEventListener("click", editKitchenItem);


// Local Storage value adding
localStorage.setItem("Name" , "Rijo");

let item = localStorage.getItem("Name");
console.log(item);


