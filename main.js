canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


var lastx,lasty;
var mouseevent="empty";
color="red";
width=5;
radius="20";








canvas.addEventListener("mousedown",my_mousedown);


function my_mousedown(e){
    color=document.getElementById("paracolor").value;
width=document.getElementById("parawidth").value;
radius=document.getElementById("pararadius").value;
    

    mouseevent="mouseDown";

    console.log("my_mousedown")
};

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;


    if(mouseevent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentx,currenty,radius,0,2*Math.PI);
        ctx.stroke();
    
    
    }

    
};