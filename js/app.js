$(document).ready(function () {
    let a = jQuery("body").height() - $(window).height() - $("footer").height();
    console.log($("body").height());
    console.log($("footer").height());
    console.log("taille testÃ© " + a );
    jQuery(window).scroll(function () {
        console.log(jQuery(window).scrollTop());
        if ($(window).scrollTop() > a){
            $(".ri-arrow-up-line").addClass("arrow-bottom");
            
        } else {
            $(".ri-arrow-up-line").removeClass("arrow-bottom");
        }
    })
    $(window).resize(function (){
        a = $("body").height() -$(window).height() - $("footer").height();
        if($(window).scrollTop() > a){
            $(".ri-arrow-up-line").addClass("arrow-bottom");
        }else{
            $(".ri-arrow-up-line").removeClass("arrow-bottom");
        }
    });
});