const nodeMajorVersion = process.version.slice(1, 3);

if (nodeMajorVersion < 14) {
  throw new Error("`fs.rm` method requires node version 14.14.0 or higher.");
} else {
  console.log("Node version alright");
}
