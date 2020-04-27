var handleAsyncError = function(handler,msg) {
    setTimeout(function(){
        handler(msg);
    },0);
};

module.exports = {
    
    callFunction:function(success,error){
        console.log("Now call really into uwp...");
        try {
            SimpleRC.UwpRCClass.callFunction();
            setTimeout(function(){
                success();
            },0);
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        console.log("Now call really into uwp done");
    },
    callFunctionWithRetValues:function(success,error){
        try {
            var res = SimpleRC.UwpRCClass.callFunctionWithRetValues();
            setTimeout(function(){
                success(res);
            },0);
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        
    },
    startCallback:function(success,error,jsCallback){
        try {
            SimpleRC.UwpRCClass.startCallback(jsCallback);
            setTimeout(function(){
                success();
            },0);
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        
    },
    stopCallback:function(success,error){
        try {
            SimpleRC.UwpRCClass.stopCallback();
            setTimeout(function(){
                success();
            },0);
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        
    }
};

require("cordova/exec/proxy").add("SimpleUwpPlugin", module.exports);