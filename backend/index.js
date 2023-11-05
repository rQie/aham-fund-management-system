const server = require("./src/server");

const HOST = process.env.HOST || "localhost",
  PORT = process.env.PORT || 3000;

server.listen(PORT, HOST, () => {
  console.info(`Server live on http://${HOST}:${PORT}`);
});

global.__basedir = __dirname;
global._ = require("lodash");
