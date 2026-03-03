const socket = io();

function sendMessage() {
    const input = document.getElementById("message");
    const msg = input.value;

    if (msg !== "") {
        socket.emit("chat-message", msg);
        input.value = "";
    }
}

socket.on("chat-message", (msg) => {
    const chat = document.getElementById("chat");
    const p = document.createElement("p");
    p.innerText = msg;
    chat.appendChild(p);
});