module.exports = async function (mirrorz) {
  const endpoints = await (await fetch("https://mirrors.xjtu.edu.cn/.well-known/mirrorz-org-endpoints.json")).json();
  const mirrorzd = {
    ...mirrorz,
    endpoints,
    extension: "D",
  }
  return mirrorzd;
};
