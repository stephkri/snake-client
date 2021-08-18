let connection;

// helper function for setupInput, which translates the keys to game operations
const handleUserInput = function(stdin) {
  stdin.on("data", (key) => {
    switch (key) {
    case "\u0003":
      process.exit();
      break;
    case "w":
      connection.write("Move: up");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "d":
      connection.write("Move: right");
      break;
    case "g":
      connection.write("Say: Oh yeah.");
      break;
    case "h":
      connection.write("Say: Oh noes.");
      break;
    case "j":
      connection.write("Say: Where are you?");
    }
  });
};

// this function brings together the connection object and the standard input
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
  handleUserInput(stdin);
  return stdin;
};

module.exports.setupInput = setupInput;