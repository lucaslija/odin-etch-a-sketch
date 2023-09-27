let container = document.getElementById('container');

for (let i = 0; i < 256; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    container.appendChild(newDiv);

    newDiv.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "aqua";
    });
}