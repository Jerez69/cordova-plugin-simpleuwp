var handleAsyncError = function(handler,msg) {
    setTimeout(function(){
        handler(msg);
    },0);
};

var receiveCallback = function (ret) {
    console.log("receiveCallback: " + ret);
};

var nativeObject = undefined;
var stopped = undefined;

module.exports = {
    
    callFunction:function(success,error){
        console.log("Now call really into uwp...");
        try {
            if(nativeObject == undefined) {
                console.log("Create component class...");
                nativeObject = new UwpCompCB.UwpCBClass();
                console.log("Create component class done");
            }
            nativeObject.callFunction();
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
            if(nativeObject == undefined) {
                console.log("Create component class...");
                nativeObject = new UwpCompCB.UwpCBClass();
                console.log("Create component class done");
            }
            var res = nativeObject.callFunctionWithReturnValues();
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

        // endless loop for raecting to change events
        function getNumberChangeEvent (cbObject) {
            return cbObject.getNumberChangeEvent().done(
                function (result) {
                    if (stopped == true) {
                        return;
                    }

                    receiveCallback(result);

                    setTimeout(function () {
                        getNumberChangeEvent(cbObject);
                    }, 0);
                }
            );
        }

        try {
            receiveCallback("Callback test");
            if(nativeObject == undefined) {
                console.log("Create uwp cb class...");
                nativeObject = new UwpCompCB.UwpCBClass();
                console.log("Create uwp cb class done");
            }
           
            var ret = nativeObject.startCallback();
            stopped = false;

            if(ret != 0) {
                handleAsyncError(error,"SimpleUwp failed to exec request : No synchronization context available");
            } else {
                setTimeout(function(){
                    success();
                },0);
            }

            getNumberChangeEvent();
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        console.log("Now call really into uwp done");
    },
    stopCallback:function(success,error){
        console.log("Now call really into uwp...");
        try {
            if(nativeObject == undefined) {
                console.log("Create component class...");
                nativeObject = new UwpCompCB.UwpCBClass();
                console.log("Create component class done");
            }
            nativeObject.stopCallback();
            stopped = true;
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
    },
    changeProperty:function(success,error,num){
        console.log("Now call really into uwp...");
        try {
            if(nativeObject == undefined) {
                console.log("Create component class...");
                nativeObject = new UwpCompCB.UwpCBClass();
                console.log("Create component class done");
            }
            var propValue = nativeObject.propertyA;
            console.log("getProperty: " + propValue);

            var propertyChangedHandler = function (ev) {
                console.log("getProperty.propertyChangedHandler: " + ev);
            };

            nativeObject.onpropertychangedevent = propertyChangedHandler;

            nativeObject.propertyA = 2 * num;

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