// Query selectors
const newTask =document.querySelector('input');
const list = document.querySelector('ul');

// Function that print localStorage on console
function add() {
    localStorage.setItem(localStorage.length, newTask.value)
    newTask.value =''
    console.log(localStorage)
}

// Temporary localStorage clear on page load
localStorage.clear()