const container = document.querySelector(".container")
const buttonGrid = document.querySelector(".grid")
buttonGrid.addEventListener('click', function(){
    let choice = window.prompt("Choose a number (max 100)")
    if (choice > 100){
        alert("Under 100!");
        choice = window.prompt("Choose a number (max 100)")
    }
    else {
        grid(choice, choice);
    }
})

let row = choice;
let column = choice;
function grid(row,column){
    const gridSquareWidth = 100 / column ;
    const gridSquareHeight = 100 / row ;
   
    for (let i=0; i<row; i++){
       for(let j=0; j<column; j++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("grid-square");
        gridSquare.style.width = `${gridSquareWidth}%`;
        gridSquare.style.height = `${gridSquareHeight}%`;
        gridSquare.addEventListener('mouseenter',function(){
            gridSquare.classList.add('black-hover')
        })
        container.appendChild(gridSquare)

       }
    }
}
grid (32,32)