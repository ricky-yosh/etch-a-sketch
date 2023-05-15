document.addEventListener('DOMContentLoaded', function()  {
    let canvas = document.querySelector("#etchCanvas");
    const thing = document.createElement('div');
    
    for(let row = 0; row < 16; row++) {
        const row_div = document.createElement('div');
        row_div.style.display = 'flex';
        row_div.style.width = 'auto';
        row_div.style.height = 'auto';
        for(let column = 0; column < 16; column++) {
            const box = document.createElement('div');
            box.style.width = '50px';
            box.style.height = '50px';
            box.style.border = '1px solid black';
            box.className = 'box';
            row_div.appendChild(box);
        }
        canvas.appendChild(row_div);
    }
    const boxes = this.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            if (isDrawing) {
                box.style.backgroundColor = 'black';
            }
        });
        box.addEventListener('mousedown', () => {
            isDrawing = true;
        });
        box.addEventListener('mouseup', () => {
            isDrawing = false;
        })
    });
});
