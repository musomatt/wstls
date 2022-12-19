import { WebSocketServer } from "ws";

const PORT = 1234;

const main = () => {
  const wss = new WebSocketServer({
    port: PORT,
  });

  console.log("starting server");

  wss.on("connection", (ws) => {
    console.log("established connection");

    ws.on("open", () => {
      console.log("connection opened");
    });

    ws.on("message", (data) => {
      console.log("received", data);
    });
  });

  wss.on("error", (error) => {
    console.log("server start error", error);
  });

  wss.on("listening", () => {
    console.log("server listening on port", PORT);
  });
};

main();
