const app = require("../app");
const request = require("./requests");

const localhost = "http://localhost";
const port = 3000;
let server;

beforeAll(async () => {
  server = app.listen(port, () => {
    console.log("Starting Jest");
  });
});

afterAll(() => {
  if (server) {
    server.close();
  }
  console.log("Server closed");
});

test("default route is opened", async () => {
  expect(request.get(`${localhost}:${port}`)).resolves.toBeDefined();
});
