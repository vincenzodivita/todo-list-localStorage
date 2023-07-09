// Query selectors
const newTask =document.querySelector('input');
const list = document.querySelector('ul');

// Function that print localStorage on HTML as <li>
function add() {
    localStorage.setItem(localStorage.length, newTask.value);
    newTask.value = '';

    list.innerHTML = ''
    for (let i = localStorage.length - 1; i >= 0; i--) {
        list.innerHTML += `<li>${localStorage.getItem(i)}</li>`;
    }
}

// Temporary localStorage clear on page load
localStorage.clear();