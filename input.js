let connection;

const handleUserInput = function(stdin, conn) {
  connection = stdin;
  stdin.on("data", (key) => {
    switch (key) {
      case "\u0003":
        process.exit();
        break;
      case "w":
        conn.write("Move: up");
        break;
      case "a":
        conn.write("Move: left");
        break;
      case "s":
        conn.write("Move: down");
        break;
      case "d":
        conn.write("Move: right");
        break;
      case "g":
        conn.write("Say: I'm a G.");
        break;
      case "h":
        conn.write("Say: Wawawiwa!");
        break;
      case "j":
        conn.write("Say: Schwing!")
    };
  });
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput(stdin, conn);
  return stdin;
};

module.exports.setupInput = setupInput;