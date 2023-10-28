var mouseEvent="";
var lp_x,lp_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width=2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;

    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    cpm_x=e.clientX - canvas.offsetLeft;
    cpm_y=e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last position of x and y coordinates =");
        console.log("x =" + lp_x + "y =" + lp_y);
        ctx.moveTo(lp_x, lp_y);

        console.log("Current position of x and y coordinates =");
        console.log("x =" + cpm_x + "y =" + cpm_y);
        ctx.lineTo(cpm_x, cpm_y);
        ctx.stroke();
    }

    lp_x = cpm_x;
    lp_y =cpm_y;
}