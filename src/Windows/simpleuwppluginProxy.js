var handleAsyncError = function(handler,msg) {
    setTimeout(function(){
        handler(msg);
    },0);
};

var receiveCallback = function(ret){
    console.log("Returned: " + ret);
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
            SimpleUwp.UwpClass.startCallback(receiveCallback);
            setTimeout(function(){
                success();
            },0);
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
    },
    registerReceive:function(success,error){
        console.log("registerReceive...");
        receiveCallback = sucess;
        console.log("registerReceive done");
    }
};

require("cordova/exec/proxy").add("SimpleUwpPlugin", module.exports);