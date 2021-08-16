const connect = require("./client.js");

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const handleUserInput = function(stdin) {
  stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    }
  });
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
};

setupInput();

// Establish connection w game server

console.log("Connecting...");
connect();


