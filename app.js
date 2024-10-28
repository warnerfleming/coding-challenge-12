//Task 2

const canvas =document.getElementById(`canvas`)
const drawingContext = canvas.getContext(`2d`)
let color = document.getElementById("colorselect").value
let toolSelect = `line`

document.getElementById("tool").forEach(radio =>{
    radio.addEventListener("change", (event)=> {
        toolSelect = event.target.value 
    })
}    
)

//Task 3

function shapesDrawings (tool, sX,sY,mouseX,mouseY){
    drawingContext.clearRect(0,0,canvas.clientWidth,canvas.height)
    if (tool === "line"){

        drawingContext.beginPath()
        drawingContext.lineTo(sX,sY)
        drawingContext.moveTo(mouseX,mouseY)
        drawingContext.stroke()
    }
    else if (tool === "circle" ){
    const radius = Math.sqrt((mouseX- sX) * (mouseX - sX) + (mouseY - sY) * (mouseY - sY))
    

    
    drawingContext.beginPath()
    drawingContext.arc(sX,sY,radius,0,2 * Math.PI)
    drawingContext.stroke()
}
   else if (tool === "rectangle"){
    drawingContext.beginPath()
    drawingContext.rect(sX,sY,mouseX - sX, mouseY - sY)
    drawingContext.stroke()
   }
  
    }

//Task 4
const clearButton = document.getElementById("clear")
clearButton.addEventListener("click", () =>{
    drawingContext.clearRect(0,0,canvas.clientWidth,canvas.height);
})
