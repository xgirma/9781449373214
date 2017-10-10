// using callback

loadImage('../images/cat.jpg',
    function success(image) {
        document.body.appendChild(image)
    },

    function error(e) {
        console.log(`Error ${e}`);
    });

function loadImage(url, success, error) {
    const image = new Image();
    image.src = url;

    image.onload = function () {
        success(image);
    };

    image.onerror = function () {
        error(image);
    };
}
