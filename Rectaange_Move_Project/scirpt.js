
window.addEventListener("DOMContentLoaded", (event) => {
   
var rect = document.querySelector('#center');

rect.addEventListener("mousemove", function(details) {
    
    var rectangeLocation = rect.getBoundingClientRect();

    var insodeReactVal = details.clientX - rectangeLocation.left;

    if (insodeReactVal < rectangeLocation.width / 2)
    {
        var redcolor = gsap.utils.mapRange(0, rectangeLocation.width / 2, 255, 0, insodeReactVal);
        gsap.to(rect, { backgroundColor: `rgb(${redcolor},0,0)`, ease: Power4, });
    }
    else {    
        var bluecolor = gsap.utils.mapRange(rectangeLocation.width / 2, rectangeLocation.width, 0, 255, insodeReactVal);
        gsap.to(rect, { backgroundColor: `rgb(0,0,${bluecolor})`, ease: Power4, });
    }
})


rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
    });
});

});
