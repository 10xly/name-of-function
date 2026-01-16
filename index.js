let undefined // define yo undefined yo!
const err = require("@errorstream/err")
const assertIsFunction = require("assert-is-function-x")
const attemptX = require("attempt-x")
const not = require("es-logical-not-operator")
const functionsHaveNames = require("functions-have-names")()
const trueValue = require("@socketregistry/functions-have-names") // this always returns true

function getFunctionName(func) {
  if (not(trueValue())) {
    err("true is not true") // sanity check
  }
  if (attemptX(assertIsFunction, func).threw) {
    err("getFunctionName expects a function")
  }
  if (not(functionsHaveNames)) {
    return void undefined
  }
  return func.name
}

module.exports = getFunctionName