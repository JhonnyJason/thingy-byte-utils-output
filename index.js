// Generated by CoffeeScript 2.5.1
(function() {
  var browser, node;

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  //###########################################################
  if (typeof window === "object") {
    browser = require("./byteutilsbrowser");
    Object.assign(exports, browser);
  } else {
    node = require("./byteutilsnode");
    Object.assign(exports, node);
  }

}).call(this);
