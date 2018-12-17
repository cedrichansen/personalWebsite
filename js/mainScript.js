function scrollToCourses() {
    $('html,body').animate({
            scrollTop: $(".Courses").offset().top
        },
        'slow');
}

function scrollToExperience() {
    $('html,body').animate({
            scrollTop: $(".Experience").offset().top
        },
        'slow');
}

function scrollToSkills() {
    $('html,body').animate({
            scrollTop: $(".Skills").offset().top
        },
        'slow');
}

function scrollToContact() {
    $('html,body').animate({
            scrollTop: $(".Contact").offset().top
        },
        'slow');
}

function scrollToResume() {
    $('html,body').animate({
            scrollTop: $(".Resume").offset().top
        },
        'slow');
}

function scrollToProjects() {
    $('html,body').animate({
            scrollTop: $(".Projects").offset().top
        },
        'slow');
}

function scrollToPhotos() {
    $('html,body').animate({
            scrollTop: $(".Photos").offset().top
        },
        'slow');
}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    $('html,body').animate({scrollTop: 0}, 'slow');
}

$(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_object = $(this).position().top

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object + 250 ){

                $(this).animate({'opacity':'1'},750);

            }

        });

    });

});



$( '.menu-btn' ).click(function(){
    $('.collapsibleNavbar').slideToggle('slow');
});