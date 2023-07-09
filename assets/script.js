// Query selectors
const newTask =document.querySelector('input');
const list = document.querySelector('ul');

// Fnn that print localStorage on HTML as <li>
function load() {
    list.innerHTML = ''
    for (let i = localStorage.length - 1; i >= 0; i--) {
        list.innerHTML += `<li>${localStorage.getItem(i)}</li>`;
    }
};

// Fn that add new tasks to localStorage
function add() {
    localStorage.setItem(localStorage.length, newTask.value);
    newTask.value = '';
    load(); 
}

// Fn that clear all tasks and empty list
function clearAll() {
    localStorage.clear();
    list.innerHTML = ''
}

// Run load fn when open page
load()