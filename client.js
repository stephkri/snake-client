const net = require("net");
const { IP, PORT } = require("./constants");

// this object connects the client to the server
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

  return conn;
};

module.exports.connect = connect;