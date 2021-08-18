/*
Just for modularity's sake, separating the IP and port addresses into a separate file.

These coordinates are for playing on my Vagrant machine's server;
to play it on your own server, you'll have to change the const values here to
what you see in the top bar after typing "npm run play".
*/
const IP = "localhost";
const PORT = 50541;

module.exports = {
  IP,
  PORT
};