const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const errorMessage = document.querySelector("#error-message");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    displayList(input.value);  
    chaptersArray.push(input.value);  
    setChapterList();  // Update the localStorage with the new array
    input.value = "";  // Clear the input field
    input.focus();  
    errorMessage.textContent = "";  // Clear any existing error message
  } else {
    errorMessage.textContent = "Please enter a valid input";
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');  
  li.append(deleteButton);
  list.append(li);
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);  // Remove the last character (the ❌)
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
