// Type definitions for cordova-plugin-simpleuwp 1.0.0
// Project: https://github.com/apache/cordova-plugin-simpleuwp

/**
 * This plugin just demonstrates the use of an uwp in a corodva project.
 */
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
   callFunctionWithRetValues: (success: (res: string[]) => any, error: (err: string) => any) => void;

   /**
    * start timer.
    * @param success            Success callback
    * @param error              Error callback
    * @param jsCallback         Timer callback
    */
   startCallback: (success: () => any, error: (err: string) => any, jsCallback: (id: string) => any) => void;

   /**
    * stop timer.
    * @param success            Success callback
    * @param error              Error callback
    */
   stopCallback: (success: () => any, error: (err: string) => any) => void;

}

declare var simpleuwp: SimpleUwpPlugin;