let container = document.getElementById('container');

function gridGen(n = 256) {
    for (let i = 0; i < n; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        container.appendChild(newDiv);
    
        newDiv.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "aqua";
        });
    }
}

gridGen();