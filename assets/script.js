// Query selectors
const newTask =document.querySelector('input');
const list = document.querySelector('ul');

function load() {
    list.innerHTML = ''
    for (let i = localStorage.length - 1; i >= 0; i--) {
        list.innerHTML += `<li>${localStorage.getItem(i)}</li>`;
    }
};

// Function that print localStorage on HTML as <li>
function add() {
    localStorage.setItem(localStorage.length, newTask.value);
    newTask.value = '';
    load(); 
}

// Temporary localStorage clear on page load
// localStorage.clear();

// Run load fn when open page
load()