const fs = require("fs");

const config = require("./config/config.json");
const { init, load } = require("./parser/node");
init(config, "mirrorz-d-extension"); // global.fetch, global.DOMParser, global.Timeout, global.timeout
const parsers = require("./parser/parsers");
const custom = require("./custom");

const LIST = {
  ...config.d_mirrors,
  ...Object.fromEntries(
    config.d_parser.map((e) => [
      e,
      async () => custom[e](await load(parsers[e])),
    ])
  ),
};

async function main() {
  fs.mkdirSync("./dist/", { recursive: true });
  for (site in LIST) {
    const mirrorzd = await load(LIST[site]);
    if (mirrorzd !== null)
      fs.writeFileSync(
        "./dist/" + site + ".d.json",
        JSON.stringify(mirrorzd, null, 2)
      );
  }
  process.exit(0);
}

main();
