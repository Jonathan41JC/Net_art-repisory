const title = document.getElementById("title");
const text = document.getElementById("text");

let interval;

document.addEventListener("click", function () 
{

    document.body.classList.toggle("ai");

    if (document.body.classList.contains("ai")) 
    {

        title.textContent = "SYSTEM ONLINE";
        text.textContent = "USER DETECTED. AI HAS TAKEN CONTROL.";

        document.body.style.cursor = "crosshair";
        interval = setInterval(createMessage, 600);

    } 
    else 
    {

        title.textContent = "Welcome to the IA taking over";
        text.textContent = " At any moment, the AI would take over";
        document.body.style.cursor = "default";
        clearInterval(interval);
    }

});
function createMessage() 
{

    const messages = 
    [
        "ERROR",
        "ACCESS DENIED",
        "SYSTEM ACTIVE",
        "DATA CORRUPTED",
        "LOADING...",
        "YOU ARE BEING WATCHED",
        "OVERRIDE IN PROGRESS"
    ];

    const msg = document.createElement("div");
    msg.classList.add("message");

    msg.textContent = messages[Math.floor(Math.random() * messages.length)];

    msg.style.top = Math.random() * window.innerHeight + "px";
    msg.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(msg);

    setTimeout(() => 
    {
        msg.remove();
    }, 2000);
}