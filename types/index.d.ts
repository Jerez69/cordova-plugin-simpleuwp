// Type definitions for cordova-plugin-simpleuwp 1.1.5
// Project: https://github.com/apache/cordova-plugin-simpleuwp

/**
 * This plugin just demonstrates the use of an uwp in a corodva project.
 */

interface EventHandler{
    addListener: (callback:() => any) => void;
    removeListener: (callback:() => any) => void;
    hasListener: (callback:() => any) => boolean;
    hasListeners: () => boolean;
}

interface ReceiveEvent extends EventHandler {
    addListener: (callback: (ret: string) => any) => void;
}

interface SimpleUwpPlugin {
    /**
    * init default strings.
    * @param success            Success callback
    * @param error              Error callback
    */
   callFunction: (success: () => any, error: (err: string) => any) => void;

   /**
    * return a list of strings.
    * @param success            Success callback
    * @param error              Error callback
    */
   callFunctionWithReturnValues: (success: (res: string) => any, error: (err: string) => any) => void;

   /**
    * start timer.
    * @param success            Success callback
    * @param error              Error callback
    */
   startCallback: (success: () => any, error: (err: string) => any) => void;

   /**
    * stop timer.
    * @param success            Success callback
    * @param error              Error callback
    */
   stopCallback: (success: () => any, error: (err: string) => any) => void;

   /**
    * Event for received data.
    */
   onReceive: ReceiveEvent;

}

declare var simpleuwpplugin: SimpleUwpPlugin;