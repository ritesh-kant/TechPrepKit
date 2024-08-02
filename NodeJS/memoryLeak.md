In JavaScript, global variables can lead to memory leaks for several reasons. Here are some common scenarios:

1. **Accidental Global Variables**: If you forget to use the `var`, `let`, or `const` keyword when defining a variable, it becomes a global variable. This can lead to unintended side effects and memory leaks because these variables are not scoped to the function or block and stay in memory for the lifetime of the application.

    ```javascript
    function example() {
        someVar = "This is global";
    }
    example();
    ```

2. **Dangling References**: Global variables can hold references to objects that are no longer needed, preventing the garbage collector from reclaiming that memory.

    ```javascript
    var globalObject = {};

    function createLeak() {
        var localObject = {};
        globalObject.reference = localObject;
    }
    createLeak();
    // `localObject` cannot be garbage collected because `globalObject` has a reference to it.
    ```

3. **Closures**: If a closure references a global variable, it can prevent the garbage collector from cleaning up memory because the closure keeps the variable in scope.

    ```javascript
    var globalVar = "I am global";

    function createClosure() {
        return function() {
            console.log(globalVar);
        };
    }

    var closure = createClosure();
    // `globalVar` cannot be garbage collected because `closure` holds a reference to it.
    ```

4. **Event Listeners**: Adding event listeners that reference global variables can lead to memory leaks if the event listeners are not properly removed.

    ```javascript
    var globalData = {};

    function onClick() {
        console.log(globalData);
    }

    document.getElementById("myButton").addEventListener("click", onClick);
    // `globalData` cannot be garbage collected because `onClick` holds a reference to it.
    ```

    If the event listener is not removed properly, the reference to `globalData` will persist.

5. **Timers**: Timers that reference global variables can also lead to memory leaks if they are not cleared.

    ```javascript
    var globalArray = [];

    setInterval(function() {
        globalArray.push(new Date());
    }, 1000);
    // `globalArray` keeps growing and cannot be garbage collected.
    ```

To avoid memory leaks associated with global variables:

- Minimize the use of global variables.
- Use `let` or `const` to declare variables within the appropriate scope.
- Clean up references (e.g., remove event listeners, clear intervals/timeouts) when they are no longer needed.
- Use closures carefully to avoid retaining unnecessary references.