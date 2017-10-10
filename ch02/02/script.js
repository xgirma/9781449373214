const promise = loadImage('../images/cat.jpg');

promise.then(function (image){
   document.body.appendChild(image);
});

promise.catch(function(e){
    console.log(`Error: ${e}`);
});

function loadImage(url){
    let promise = new Promise(
        function loader(resolve, reject){
            const image = new Image();
            image.src = url;

            image.onload = function (image){
                resolve(image);
            };

            image.onerror = function (e){
                reject(`Error: ${e}`);
            };
        }
    );
    return promise;
}
