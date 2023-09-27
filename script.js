const container = document.getElementById('container');
const button = document.querySelector('button');

function gridGen(n = 16) {
    let gridList = document.querySelectorAll('.grid');
    gridList.forEach( (node) => {
        node.parentNode.removeChild(node);
    })
    for (let i = 0; i < n * n; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        container.appendChild(newDiv);

        newDiv.style.width = `calc(90vh / ${n})`;
        newDiv.style.height = `calc(90vh / ${n})`;
    
        newDiv.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "aqua";
        });
    }
}

gridGen();

button.addEventListener('click', () => {
    let size = prompt('What size grid would you like?')
    while (!(size > 0) || !(size <= 100)) {
        size = prompt('Please input a positive integer less than 100.');
    };
    gridGen(size);
})