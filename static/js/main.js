/*********************************************
            MENU RESEAUX SOCIAUX
*********************************************/

var
    menuRight = document.getElementById('cbp-spmenu-s2'),
    body = document.body;


showRight.onclick = function() {
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
};



/*********************************************
                ---CAMERA---
*********************************************/
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
            video: true
        })
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function(err0r) {
            console.log("Something went wrong!");
        });
}

(function($) {

    "use strict";

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

})(jQuery);