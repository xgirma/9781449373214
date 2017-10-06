// demonstrating the event-loop
function marco() {
    console.log('polo');
}

setTimeout(marco, 0);
console.log('last line');