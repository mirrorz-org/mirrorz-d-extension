module.exports = async function (file, mirrorz) {
  const endpoints = require("./static/" + file + ".json");
  const mirrorzd = {
    ...mirrorz,
    endpoints,
    extension: "D",
  }
  return mirrorzd;
};
