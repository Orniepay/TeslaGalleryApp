//JS file

window.onload = function() {
    // Flickity galleries initialization
    var galleries = document.querySelectorAll('.js-flickity');
    galleries.forEach(function(gallery) {
        new Flickity(gallery, {
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            autoPlay: 0,
            pauseAutoPlayOnHover: true
        });
    });

    // Video iframe display
    var iframe = document.querySelector('.video-background iframe');
    iframe.style.display = 'block';
};

//wait for entire HTML to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', function(){
    var galleries = document.querySelectorAll('.js-flickity'); //selects all photos/elements that have class '.js-flickity'
    galleries.forEach(function (gallery) { //loops through each of these galleries/elements
        new Flickity(gallery, { //create a new Flickity interactive slideshow for each gallery element

            //Interactive slideshow options :
            cellAlign: 'left', //aligns images to left
            contain: true, //make sure slideshow not blank at start or end
            wrapAround: true, //allows slideshow to loop  back to beginning when it reaches end
            autoPlay: 0, //automatically changes slides every millisecond (3 seconds = 3000)
            pauseAutoPlayOnHover: true //stop changing slides when mouse hovers over the slideshow
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.querySelector('.video-background iframe');
    iframe.onload = function () {
        iframe.style.display = 'block'
    };
});

