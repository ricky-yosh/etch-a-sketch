
const canvasCreator = (size) => {
    const container = document.querySelector('#etchCanvas')
    // canvas creation
    let canvas = document.querySelector("#etchCanvas");
    const thing = document.createElement('div');
    containerWidth = container.width;
    faceSize = containerWidth / size;
    
    for(let row = 0; row < size; row++) {
        const row_div = document.createElement('div');
        row_div.style.display = 'flex';
        row_div.style.width = 'auto';
        row_div.style.height = 'auto';
        for(let column = 0; column < 16; column++) {
            const box = document.createElement('div');
            box.style.width = faceSize + 'px';
            box.style.height = faceSize + 'px';
            box.style.border = '1px dashed grey';
            box.className = 'box';
            row_div.appendChild(box);
        }
        canvas.appendChild(row_div);
    }
} 



document.addEventListener('DOMContentLoaded', function()  {
    // inital canvas size
    const initialSize = 16;
    canvasCreator(initialSize);

    // box event listeners to draw
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

    // slider functionality
    const slider = document.querySelector('#slider');
    const sliderValue = document.querySelector('#sliderValue');

    slider.addEventListener('input', () => {
        const value = slider.value;
        sliderValue.textContent = value;
    });
});
