const colors = ["red", "green", "blue", "yellow", "purple"];

function makeCircle(event) 
{
    const circle = document.createElement("div");
    circle.classList.add("circle");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
    circle.style.left = event.clientX - 20 + "px";
    circle.style.top = event.clientY - 20 + "px";
    document.body.appendChild(circle);
    setTimeout(() => circle.remove(), 1000);
}

document.addEventListener("click", makeCircle);