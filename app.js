const canvas= document.getElementById("jsCanvas");
const ctx= canvas.getContext("2d");

ctx.strokeStyle= "#2c2c2c";
ctx.lineWidth= 2.5;

let painting= false;

function onMouseUp(event){
    stopPainting();
}

function onMouseDown(event){
    painting= true;
}

function onMouseMove(event){
    const x= event.offsetX;
    const y= event.offsetY;

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function startPainting(event){
    painting= true;
}

function stopPainting(event){
    painting= false;
}



if (canvas){
    canvas.addEventListener("mousemove", onMouseMove0)
    canvas.addEventListener("mousedown", startPainting); 
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("mouseup", stopPainting); 
}