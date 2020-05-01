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

SimpleUwpPlugin.prototype.callFunctionWithRetValues = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "callFunctionWithReturnValues", []);
};

SimpleUwpPlugin.prototype.startCallback = function (successCallback, errorCallback, jsCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "startCallback", [jsCallback]);
};

SimpleUwpPlugin.prototype.stopCallback = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "stopCallback", []);
};

module.exports = new SimpleUwpPlugin();