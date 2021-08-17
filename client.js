const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to server.");
    conn.write("Name: SBK");
  });

  /*
  conn.on("connect", () => {
    setInterval(() => {
      conn.write("Move: down");
    }, 200);
  });
  */

  return conn;
};

module.exports.connect = connect;