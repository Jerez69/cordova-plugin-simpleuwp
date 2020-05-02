var exec = require('cordova/exec');
var channel = require('cordova/channel');
var EventHandler = require('cordova-plugin-simpleuwp.EventHandler');

/**
 * Easy test plugin just for windows to call into uwp
 * @constructor
 */
function SimpleUwpPlugin() {
}

// Methods
SimpleUwpPlugin.prototype.callFunction = function (successCallback, errorCallback) {
  exec(successCallback, errorCallback, "SimpleUwpPlugin", "callFunction", []);
};

SimpleUwpPlugin.prototype.callFunctionWithReturnValues = function (successCallback, errorCallback) {
  exec(successCallback, errorCallback, "SimpleUwpPlugin", "callFunctionWithReturnValues", []);
};

SimpleUwpPlugin.prototype.startCallback = function (successCallback, errorCallback) {
  exec(successCallback, errorCallback, "SimpleUwpPlugin", "startCallback", []);
};

SimpleUwpPlugin.prototype.stopCallback = function (successCallback, errorCallback) {
  exec(successCallback, errorCallback, "SimpleUwpPlugin", "stopCallback", []);
};

// Event
exports.onReceive = Object.create(EventHandler);
exports.onReceive.init();

// Init functionality
channel.onCordovaReady.subscribe(function() {
	
	exec(function (ret) {
		exports.onReceive.fire(ret);
	}, null, 'SimpleUwpPlugin', 'registerReceive', []);

});

module.exports = new SimpleUwpPlugin();