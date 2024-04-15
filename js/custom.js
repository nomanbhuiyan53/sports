$(document).on('click', '.side-menu-btn', function () {
    $('.left-menu').toggle();

});
$(window).resize(function() {
    var width = $(window).width();
    if (width > 769){
        $('.left-menu').show();
    }
    if (width < 769){
        $('.left-menu').hide();
    }
});