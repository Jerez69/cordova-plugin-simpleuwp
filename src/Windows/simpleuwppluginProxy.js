var handleAsyncError = function(handler,msg) {
    setTimeout(function(){
        handler(msg);
    },0);
};

var receiveCallback = function (ev) {
    console.log("receiveCallback: " + ev.target);
};

var nativeObject = undefined;

module.exports = {
    
    callFunction:function(success,error){
        console.log("Now call really into uwp...");
        try {
            if(nativeObject == undefined) {
                console.log("Create component class...");
                nativeObject = new SimpleUwpComp.UwpClass();
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
                nativeObject = new SimpleUwpComp.UwpClass();
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
        try {
            receiveCallback("Callback test");
            if(nativeObject == undefined) {
                console.log("Create component class...");
                nativeObject = new SimpleUwpComp.UwpClass();
                console.log("Create component class done");
            }
           
            nativeObject.CallbackEvent = receiveCallback;
            nativeObject.startCallback();
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
            if(nativeObject == undefined) {
                console.log("Create component class...");
                nativeObject = new SimpleUwpComp.UwpClass();
                console.log("Create component class done");
            }
            nativeObject.stopCallback();
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
    changeProperty1:function(success,error,num){
        console.log("Now call really into uwp...");
        try {
            if(nativeObject == undefined) {
                console.log("Create component class...");
                nativeObject = new SimpleUwpComp.UwpClass();
                console.log("Create component class done");
            }
            var propValue = nativeObject.propertyA;
            console.log("getAProperty: " + propValue);

            var singlecasthandler = function (ev) {
                console.log("getAProperty.singlecasthandler: " + ev);
            };

            nativeObject.onpropertychangedevent = singlecasthandler;

            nativeObject.propertyA = 2 * num;

            setTimeout(function(){
                success();
            },0);
        }
        catch(err) {
            handleAsyncError(error,"SimpleUwp failed to exec request : " + err.message);
        }
        console.log("Now call really into uwp done");
    },
    changeProperty2:function(success,error,num){
        console.log("Now call really into uwp...");
        try {
            if(nativeObject == undefined) {
                console.log("changeProperty2.Create component class...");
                nativeObject = new SimpleUwpComp.UwpClass();
                console.log("changeProperty2.Create component class done");
            }
            nativeObject.propertyA = num;
            console.log("changeProperty2.getAProperty: " + nativeObject.propertyA);

            nativeObject.addEventListener("someevent", receiveCallback);

            nativeObject.fireEvent("The answer is ");

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