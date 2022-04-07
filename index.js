// Generated by CoffeeScript 2.6.1
//###########################################################
var bigIntMap, decoder, slots;

import {
  StringDecoder
} from "string_decoder";

decoder = new StringDecoder("utf-8");

slots = (new Array(256)).fill(0);

bigIntMap = slots.map(function(el, idx) {
  return BigInt(idx);
});

//###########################################################
export var bytesToBigInt = function(byteBuffer) {
  var byteArray, hex;
  byteArray = new Uint8Array(byteBuffer);
  hex = bytesToHex(byteArray.reverse());
  return BigInt("0x" + hex);
};

//###########################################################
export var bytesToUtf8 = function(byteBuffer) {
  var byteArray;
  byteArray = new Uint8Array(byteBuffer);
  return decoder.end(byteArray);
};

export var utf8ToBytes = function(utf8) {
  return Buffer.from(utf8, "utf8");
};

//###########################################################
export var bytesToHex = function(byteBuffer) {
  return Buffer.from(byteBuffer).toString("hex");
};

export var hexToBytes = function(hex) {
  return Buffer.from(hex, 'hex');
};
