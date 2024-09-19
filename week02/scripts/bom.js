const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        const myList = document.createElement("li");
        const deleteButton = document.createElement("button");

        myList.textContent = input.value;
        deleteButton.textContent = "❌";

        myList.append(deleteButton);
        list.append(myList);

        deleteButton.addEventListener("click", function() {
            list.removeChild(myList);
        });

        input.value = "";
        input.focus();
    } else {
        input.focus();
    }
});
