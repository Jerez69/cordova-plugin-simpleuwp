var exec = require('cordova/exec');
var channel = require('cordova/channel');
//var EventHandler = require('cordova-plugin-simpleuwp.EventHandler');

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

SimpleUwpPlugin.prototype.changeProperty1 = function (successCallback, errorCallback, num) {
  exec(successCallback, errorCallback, "SimpleUwpPlugin", "changeProperty1", [num]);
};

SimpleUwpPlugin.prototype.changeProperty2 = function (successCallback, errorCallback, num) {
  exec(successCallback, errorCallback, "SimpleUwpPlugin", "changeProperty2", [num]);
};

// Event
//exports.onReceive = Object.create(EventHandler);
//exports.onReceive.init();

// Init functionality
channel.onCordovaReady.subscribe(function() {
	
	exec(function (ret) {
		console.log('Received: ' + ret);
	}, null, 'SimpleUwpPlugin', 'registerReceive', []);

});

module.exports = new SimpleUwpPlugin();