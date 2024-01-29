const container = document.querySelector(".container")

function grid(row,column){
    for (let i=0; i<row; i++){
       for(let j=0; j<column; j++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("grid-square");
        container.appendChild(gridSquare)

       }
    }
}
grid (16,16)