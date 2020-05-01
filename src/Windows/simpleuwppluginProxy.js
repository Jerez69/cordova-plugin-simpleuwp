var handleAsyncError = function(handler,msg) {
    setTimeout(function(){
        handler(msg);
    },0);
};

module.exports = {
    
    callFunction:function(success,error){
        console.log("Now call really into uwp...");
        try {
            SimpleUwp.UwpClass.callFunction();
            setTimeout(function(){
                success();
            },0);
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        console.log("Now call really into uwp done");
    },
    callFunctionWithReturnValues:function(success,error){
        console.log("Now call really into uwp...");
        try {
            var res = SimpleUwp.UwpClass.callFunctionWithReturnValues();
            setTimeout(function(){
                success(res);
            },0);
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        console.log("Now call really into uwp done");
    },
    startCallback:function(success,error){
        console.log("Now call really into uwp...");
        try {
            SimpleUwp.UwpClass.startCallback(success);
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        console.log("Now call really into uwp done");
    },
    stopCallback:function(success,error){
        console.log("Now call really into uwp...");
        try {
            SimpleUwp.UwpClass.stopCallback();
            setTimeout(function(){
                success();
            },0);
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        console.log("Now call really into uwp done");
    }
};

require("cordova/exec/proxy").add("SimpleUwpPlugin", module.exports);