const inputBox = document.getElementById("item-input");
const addBtn = document.getElementById("add-item-btn");
const itemList = document.getElementById("grocery-list");
const resetBtn = document.getElementById("reset-btn");

addBtn.addEventListener("click", function() {
    const itemText = inputBox.value.trim();
    if (itemText !== "") {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = itemText;

        checkbox.addEventListener("change", function() {
            span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        itemList.appendChild(li);
        inputBox.value = "";
    }
});

resetBtn.addEventListener("click", function() {
    let confirmation = confirm("Delete all items from the list?");
    if (confirmation) {
    itemList.innerHTML = "";

    } else {
        return;
    }
});

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});

function saveList() {
    localStorage.setItem("groceryList", itemList.innerHTML);
}

function loadList() {
    itemList.innerHTML = localStorage.getItem("groceryList") || "";
}

addBtn.addEventListener("click", saveList);
resetBtn.addEventListener("click", saveList);
window.onload = loadList;

