const canvas= document.getElementById("jsCanvas");

let painting= false;

function onMouseMove(event){
    const x= event.offsetX;
    const y= event.offsetY;
}

function onmousedown(event){
    painting= true;
}

function onMouseUp(event){
    stopPainting();
}
function stopPainting(event){
    painting= false;
}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove); 
    canvas.addEventListener("mousedown", onmousedown); 
    canvas.addEventListener("mouseup", onMouseUp); 
}