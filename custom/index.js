const nju = require("./nju");
const file = require("./file");
const xjtu = require("./xjtu");

module.exports = {
  "nju"  : nju,
  "bfsu" : async (e) => file("bfsu", e),
  "nano" : async (e) => file("tuna", e),
  "neo"  : async (e) => file("tuna", e),
  "hit"  : async (e) => file("hit",  e),
  "bjtu" : async (e) => file("bjtu",  e),
  "cqu"  : async (e) => file("cqu", e),
  "qlut" : async (e) => file("qlut",  e),
  "nyist" : async (e) => file("nyist",  e),
  "xjtu" : xjtu,
};
