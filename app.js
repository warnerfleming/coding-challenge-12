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