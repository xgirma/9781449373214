loadImage('../images/cat.jpg').then(function (image){
    document.body.appendChild(image)
}).catch(function(e){
    console.log(`Error: ${e}`);
});

function loadImage(url){
    return new Promise(
        function (resolve, reject){
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
}
