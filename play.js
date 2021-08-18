const { connect } = require("./client.js");
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const { setupInput } = require("./input.js");
// setupInput();
// Establish connection w game server

console.log("Connecting...");

//connect(); // returns the connection object from client.js
setupInput(connect());