const contextMenu = document.querySelector('.context-menu');
const createMenu = document.querySelector('.menu-create');
const wrapper = document.querySelector('.wrapper');
let menuState = 0;
let active = 'context-menu--active';
let createFileBtn = document.querySelector('.create');
let renameFileBtn = document.querySelector('.rename');
let deleteFileBtn = document.querySelector('.delete');

let activeDiv;

let fileItems = document.querySelectorAll('.file');
document.addEventListener('contextmenu', function(e) {
    activeDiv = e.target;
    if (e.target.classList.value === 'file') {
        e.preventDefault();
        contextMenu.style.top = `${e.clientY}px`;
        contextMenu.style.left = `${e.clientX}px`;
        contextMenu.classList.add(active);
    } else {
        e.preventDefault();
        createMenu.style.top = `${e.clientY}px`;
        createMenu.style.left = `${e.clientX}px`;
        createMenu.classList.add(active);
    }
}); 

renameFileBtn.addEventListener('click', function () {
    let newName = prompt('Enter a new file name:');
    if (newName !== null) {
        activeDiv.textContent = newName;
    }
    contextMenu.classList.remove(active);
});

deleteFileBtn.addEventListener('click', function(){
    activeDiv.remove();
    contextMenu.classList.remove(active);
});

createFileBtn.addEventListener('click', function(){
    let fileName = prompt('Enter a file name:');
    if(fileName !== null) {
        let newFile = document.createElement('div');
        newFile.classList.add('file');
        newFile.textContent = fileName;
        wrapper.appendChild(newFile);
    }
});

document.addEventListener('click', function(event) {
    if (event.button !== 2) {
        contextMenu.classList.remove(active);
        createMenu.classList.remove(active);
    }
});

contextMenu.addEventListener('click', function(event) {
    event.stopPropagation();
});