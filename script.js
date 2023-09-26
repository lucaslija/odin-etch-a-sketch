let container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    container.appendChild(newDiv);
}