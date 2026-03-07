const isFunction = require("@is-(unknown)/is-function")
const assert = require("assert-fn")

module.exports = function assertIsFunctionX(value) {
  assert(isFunction(value))
}