var offset = $('meuMenu').offset().top;
var $meuMenu = $('meuMenu');
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $meuMenu.addClass('fixar');
    } else {
        $meuMenu.removeClass('fixar');
    }
});