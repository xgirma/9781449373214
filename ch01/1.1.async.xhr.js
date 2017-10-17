/*eslint no-undef: "warn"*/

const async = true;
let xhr = new XMLHttpRequest();

console.log('will the listener callback in the XHR object will execute?');
xhr.open('get', 'data.json', async);
xhr.send();

// creating a three second delay
const timestamp = Date.now() + 3000;

while(Date.now() < timestamp);

function listener() {
    console.log('yes, the listeners is always called.');
}

xhr.addEventListener('load', listener);
xhr.addEventListener('error', listener);