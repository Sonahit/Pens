const server = require("./app");
const config = require("./config/config");

server.listen(config.port, () => {
  console.log(`Server has been started on ${config.port} port with ${config.environment} environment`);
});
