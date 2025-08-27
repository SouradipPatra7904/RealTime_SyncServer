const io = require("socket.io-client");
const productActions = require("./productActions.json");

console.log("Starting connection...");
const socket = io("http://localhost:8585/sendActions");

socket.on("connected", async function (data) {
  console.log(data);
  setTimeout(() => socket.emit("disconnect"), 30000); //Disconnect from socket in X millis

  // socket.emit("sendProductActions", productActionsC);
  socket.emit("sendProductActions", productActions);

  socket.on("productActionResult", (result) => {
    console.log(result);
    if (result.status == "ACK") {
      setTimeout(sendFin, 3000); // Wait 3 secs and send FIN
    } else if (result.status == "NACK") {
      console.log("ROLLBACK"); // Rollback client transaction
    }
  });

  socket.on("infoActionResult", (result) => {
    console.log(result);
  });

  function sendFin() {
    socket.emit("clientFin");
    console.log(`FIN sent`);
  }
});