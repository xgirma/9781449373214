# Asynchronous JavaScript

Callbacks, the event-loop, threading ...

Create informal delay with while loop: 

```javascript
const timestamp = Date.now() + 3000;
while(Date.now() < timestamp);
```

Callback do not necessary declare inline always. 

```javascript
const cities = ['a', 'b'];
     
function callback(city){
   console.log(city);
}
    
cities.forEach(callback);
```

Callback can be invoked synchronously or asynchronously. 

Callbacks can be invoked before or after the function they are passed to return.

Examples: 

    synchronous (before) beforeEach()
    asynchronous (after): window.requestAnimationFrame()


    