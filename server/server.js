const server = require("./app");
const config = require("./config/config");
const colors = require("colors/safe");

server.listen(config.port, () => {
  console.log(`Server has been started on ${config.port} port with ${config.environment} environment`);
  console.log(`Localhost link --> ${colors.blue(`http://localhost:${config.port}`)}`);
});
