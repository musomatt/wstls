const ws = new WebSocket("ws://localhost:1234");

ws.onopen = (event) => {
  console.log("open", event);
};

ws.onerror = (event) => {
  console.log("error", event);
};

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  ws.send("hello world");
});
