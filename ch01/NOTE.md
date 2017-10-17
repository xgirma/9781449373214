# Asynchronous JavaScript

Callbacks, the event-loop, threading ...

Create informal delay with while loop: 

    const timestamp = Date.now() + 3000;
    while(Date.now() < timestamp)
    
...