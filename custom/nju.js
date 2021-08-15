module.exports = async function (mirrorz) {
  const endpoints = await (await fetch("https://mirror.nju.edu.cn/.mirrorz/endpoints.json")).json();
  const mirrorzd = {
    ...mirrorz,
    endpoints,
    extension: "D",
  }
  return mirrorzd;
};
