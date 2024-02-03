const container = document.querySelector(".container")
const btnGridSize = document.querySelector(".grid-size")
const btnGridReset = document.querySelector(".grid-reset")
const btnColorChange = document.querySelector(".color-change")

let currentColor = 'black'

//Reset button
btnGridReset.addEventListener('click',function(){
const gridSquare = document.querySelectorAll(".grid-square")
gridSquare.forEach(gridSquare =>{
    gridSquare.style.backgroundColor = '';
});
});

btnColorChange.addEventListener('click', function () {
    currentColor = currentColor === 'black' ? colorBtn() : 'black';
});

//Changing grid size button
btnGridSize.addEventListener('click', function(){
    let choice = window.prompt("Choose a number (max 100)")
    if (choice <= 100){
        grid(choice, choice);
    }
    else {
        alert("Please, a number under 100!");
        choice = window.prompt("Choose a number (max 100)")
    }
})
function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    
}

function colorBtn(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function grid(row,column){
    
   
   clearGrid()
    for (let i=0; i<row; i++){
       for(let j=0; j<column; j++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("grid-square");
        gridSquare.style.width = `${640 / column }px`;
        gridSquare.style.height = `${640 / row }px`;
        gridSquare.addEventListener('mouseenter',function(){
            gridSquare.style.backgroundColor = currentColor === 'black' ? 'black' : colorBtn();
        });
        
        container.appendChild(gridSquare)

       }
    }
}
grid (12,12)