
const canvasCreator = (size) => {
    // canvas creation
    let canvas = document.querySelector("#etchCanvas");
    const thing = document.createElement('div');
    const containerWidth = 960;
    let faceSize = containerWidth / size;
    
    for(let row = 0; row < size; row++) {
        const row_div = document.createElement('div');
        row_div.style.display = 'flex';
        row_div.style.width = 'auto';
        row_div.style.height = 'auto';
        for(let column = 0; column < size; column++) {
            const box = document.createElement('div');
            box.style.width = faceSize + 'px';
            box.style.height = faceSize + 'px';
            box.style.boxSizing = 'border-box';
            box.style.border = '1px dashed grey';
            box.className = 'box';
            
            box.addEventListener('mousedown', function() {
                isDrawing = true;
                box.style.backgroundColor = 'black';
            });
            box.addEventListener('mouseup', function() {
                isDrawing = false;
            });
            box.addEventListener('mouseover', () => {
                if (isDrawing) {
                    box.style.backgroundColor = 'black';
                }
            });
            row_div.appendChild(box);
        }
        canvas.appendChild(row_div);
    }
} 



document.addEventListener('DOMContentLoaded', function()  {
    // inital canvas size
    const initialSize = 16;
    canvasCreator(initialSize);

    // slider functionality
    const slider = document.querySelector('#slider');
    const sliderValue = document.querySelector('#sliderValue');

    // change when slider moved
    slider.addEventListener('input', () => {
        const value = slider.value;
        sliderValue.textContent = value;
        const container = document.querySelector("#etchCanvas");
        container.innerHTML = '';
        canvasCreator(value);
    });
});
