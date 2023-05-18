const randomColor = () => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    const opacity = 0; // white initially

    const returnString = `rgba(${randomR}, ${randomG}, ${randomB}, ${opacity})`;
    return returnString;
}

const extractBGColor = (elementInput) => {
    const bgColor = elementInput.style.backgroundColor;
    return bgColor;
}

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
            box.className = 'box';
            box.style.backgroundColor = randomColor();
            let rainbowMode;

            const checkbox = document.querySelector('#toggleRNGColors');
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    rainbowMode = true;
                } else {
                    rainbowMode = false;
                }
            });

            const backgroundColor = extractBGColor(box);
            const startIndex = backgroundColor.indexOf('(') + 1;
            const endIndex = backgroundColor.indexOf(')') + 1;
            const colorValues = backgroundColor.substring(startIndex, endIndex);
            const colorValuesArray = colorValues.split(',');

            const redValue = parseInt(colorValuesArray[0].trim(), 10);
            const greenValue = parseInt(colorValuesArray[1].trim(), 10);
            const blueValue = parseInt(colorValuesArray[2].trim(), 10);
            let alphaValue = parseFloat(colorValuesArray[3].trim());

            // let isDrawing;
            let newBackgroundColor;

            box.addEventListener('mousedown', () => {
                isDrawing = true;
                if(rainbowMode) {
                    alphaValue += .1;
                    alphaValue.toString();
                    newBackgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
                } else {
                    newBackgroundColor = 'rgba(0, 0, 0, 1)';
                }
                box.style.backgroundColor = newBackgroundColor;
            });
            box.addEventListener('mouseup', () => {
                isDrawing = false;
            });
            box.addEventListener('mouseover', () => {
                if (isDrawing) {
                    if(rainbowMode) {
                        alphaValue += .1;
                        alphaValue.toString();
                        newBackgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
                    } else {
                        newBackgroundColor = 'rgba(0, 0, 0, 1)';
                    }
                    box.style.backgroundColor = newBackgroundColor;
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
