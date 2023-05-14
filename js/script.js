document.addEventListener('DOMContentLoaded', function()  {
    let canvas = document.querySelector("#etchCanvas");
    const thing = document.createElement('div');
    
    for(let row = 0; row < 16; row++) {
        const row_div = document.createElement('div');
        row_div.style.display = 'flex';
        for(let column = 0; column < 16; column++) {
            const box = document.createElement('div');
            box.style.width = '50px';
            box.style.height = '50px';
            box.style.border = '1px solid black';
            row_div.appendChild(box);
        }
        canvas.appendChild(row_div);
    }    
});
