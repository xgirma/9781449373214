# Asynchronous JavaScript
Callbacks, the event loop, and threading.
# Callbacks

- Callbacks can be invoked synchronously or asynchronously. 
    
    `array.forEach()` in listing 01.js and 02.js invokes the call back it receives synchronously.
    `window.requestAnimationFrame()` is an example of a function that invokes its callback asynchronously.
    
- When you pass a callback to a function it's important to know weather the call back will be invoked synchronously or asynchronously.

- Function that are not consistently asynchronous or synchronises create a fork in the execution path.

- Rleasining Zalgo.

- The call to `http.get()` triggers a network request that a separate thread handles. The JavaScript code you write in listing `ch01/05` runs on a single thread, but the code that implements the async tasks it is not part of that JavaScript and is free to run in a separate thread.

- In JavaScript there is a `run-to-completion` rule.

- In `listing ch/06` The `marco` function is immediately placed in the queue. After the console displays "last line" the event loop turns and `marco` can be pulled off the queue.

- In `listing ch1/06` notice the second parameter for `setTimeout` specifies the minimum amount of time that will lapse before the callback is run as opposed to the exact amount of time. It is impossible to know exactly when the callback will run because other JavaScript could be executing at that time and the machine has to let that finish before returning to the queue to invoke your callback. 