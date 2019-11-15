import server from "./app";
import config from "./config/config";
import { blue } from "colors/safe";

server.listen(config.port, () => {
	console.log(`Server has been started on ${config.port} port with ${config.environment} environment`);
	console.log(`Localhost link --> ${blue(`http://localhost:${config.port}`)}`);
});
