var exec = require('cordova/exec');

/**
 * Easy test plugin just for windows to call into uwp
 * @constructor
 */
function SimpleUwpPlugin() {
  console.log("SimpleUwpPlugin constructor");
}

SimpleUwpPlugin.prototype.callFunction = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "callFunction", []);
};

SimpleUwpPlugin.prototype.callFunctionWithReturnValues = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "callFunctionWithReturnValues", []);
};

SimpleUwpPlugin.prototype.startCallback = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "startCallback", []);
};

SimpleUwpPlugin.prototype.stopCallback = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "stopCallback", []);
};

module.exports = new SimpleUwpPlugin();