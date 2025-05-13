let mainDiv = document.getElementById("main");
let resetBtn = document.getElementById("resetBtn");

function getHeightUnder(element){
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return windowHeight - rect.bottom;
}

function drawGrid(size){
    let under = getHeightUnder(mainDiv);
    let boxSize = Math.floor(under / size);
    for (i = 0; i < size; i ++){
    let rowDiv = document.createElement("div");
    for (j = 0; j < size; j ++){
        let colDiv = document.createElement("div");
        colDiv.style.width = boxSize.toString() +  "px";
        colDiv.style.height = boxSize.toString() +  "px";
        rowDiv.appendChild(colDiv);
        colDiv.addEventListener("mouseover", (e) => {
            colDiv.setAttribute("class", "black");
        });
    }
    mainDiv.appendChild(rowDiv);
    }   
}

resetBtn.addEventListener("click", () => {
    let sizeStr = prompt("How many squares in the grid? (under 100)");
    let size = parseInt(sizeStr)
    if (size <= 100){
        mainDiv.innerHTML = "";
        drawGrid(size);
    }else{
        alert("Try again")
    }
})

drawGrid(16)