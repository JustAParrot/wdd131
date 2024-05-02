const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const errorMessage = document.createElement("div");
errorMessage.setAttribute("id", "error-message");
document.body.appendChild(errorMessage);

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
            input.value = "";
        });
    } 
    else {
        errorMessage.textContent = "Please enter a valid input";
    }
});
