$(document).ready(function() {

    ////////////////	
    //VARIABLES
    ////////////////
    var view = $(window),
        html = $('html'),
        body = $('body');

    ////////////////
    //SKILLS ANIMATION
    ////////////////
    $('ul#skills').addClass("ready");
    $('ul#skills li').each(function() {
        var i = $(this).index();
        $(this).delay(100 * i).animate({ right: "0%" }, 1000, function() {
            $(this).children('span').fadeIn(600);
        });
    });
});