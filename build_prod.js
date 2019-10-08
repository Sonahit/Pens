const { exec } = require("child_process");
const os = require("os");
//control OS
//then run command depengin on the OS

if (os.type() === "Linux") {
  const lin = exec("npm run prod-lin");
  lin.unref();
  lin.stdout.on("data", data => {
    console.log(data.toString());
  });
} else if (os.type() === "Windows_NT") {
  const win = exec("npm run prod-win");
  win.unref();
  win.stdout.on("data", data => {
    console.log(data.toString());
  });
} else throw new Error("Unsupported OS found: " + os.type());
