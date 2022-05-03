MouseEvent = "empty"

canvas = 
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = document.getElementById("color").value;
radius = document.getElementById("radius").value;
width = document.getElementById("width").value;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    width = document.getElementById("width").value;
    MouseEvent = mouseDown
}


function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(MouseEvent == "mouseDown") {
        console.log("current position of x and y coordinates = ")
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();s
    }
}
