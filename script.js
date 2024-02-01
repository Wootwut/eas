const container = document.querySelector(".container")
const btnGridSize = document.querySelector(".grid-size")
const btnGridReset = document.querySelector(".grid-reset")

btnGridReset.addEventListener('click',function(){
const gridSquare = document.querySelectorAll("div")
gridSquare.forEach(gridSquare =>{
    gridSquare.classList.remove("black-hover")
})
})
btnGridSize.addEventListener('click', function(){
    let choice = window.prompt("Choose a number (max 100)")
    if (choice > 100 ){
        alert("Under 100!");
        choice = window.prompt("Choose a number (max 100)")
    }
    else {
        grid(choice, choice);
    }
})
function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    
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
            gridSquare.classList.add('black-hover')
        })
        container.appendChild(gridSquare)

       }
    }
}
grid (12,12)