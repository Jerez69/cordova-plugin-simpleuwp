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
    callFunctionWithReturnValues:function(success,error){
        console.log("Now call really into uwp...");
        try {
            var res = SimpleRC.UwpRCClass.callFunctionWithReturnValues();
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
            SimpleRC.UwpRCClass.startCallback(function(str) {
                console.log('Received value: ' + str);     
                setTimeout(function(){
                    success(str);
                },0);
            });
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        console.log("Now call really into uwp done");
    },
    stopCallback:function(success,error){
        console.log("Now call really into uwp...");
        try {
            SimpleRC.UwpRCClass.stopCallback();
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