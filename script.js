let container = document.getElementById('container');

for (let i = 0; i < 255; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    container.appendChild(newDiv);
}