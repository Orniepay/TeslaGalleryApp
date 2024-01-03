//JS file

//wait for entire HTML to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', function(){
    var galleries = document.querySelectorAll('.js-flickity'); //selects all photos/elements that have class '.js-flickity'
    galleries.forEach(function (gallery) { //loops through each of these galleries/elements
        new Flickity(gallery, { //create a new Flickity interactive slideshow for each gallery element

            //Interactive slideshow options :
            cellAlign: 'left', //aligns images to left
            contain: true, //make sure slideshow not blank at start or end
            wrapAround: true, //allows slideshow to loop  back to beginning when it reaches end
            autoPlay: 1000, //automatically changes slides every millisecond (3 seconds)
            pauseAutoPlayOnHover: true //stop changing slides when mouse hovers over the slideshow
        });
    });
});