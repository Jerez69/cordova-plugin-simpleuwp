function SimpleUwpPlugin() {
}

SimpleUwpPlugin.prototype.callFunction = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "callFunction", []);
};

SimpleUwpPlugin.prototype.callFunctionWithRetValues = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "callFunctionWithRetValues", []);
};

SimpleUwpPlugin.prototype.startCallback = function (successCallback, errorCallback, jsCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "startCallback", [jsCallback]);
};

SimpleUwpPlugin.prototype.stopCallback = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SimpleUwpPlugin", "stopCallback", []);
};

SimpleUwpPlugin.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.simpleuwpplugin = new SimpleUwpPlugin();
  return window.plugins.simpleuwpplugin;
};

cordova.addConstructor(SimpleUwpPlugin.install);