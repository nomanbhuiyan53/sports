$(document).on('click', '.side-menu-btn', function () {
    $('.left-menu').toggle();
});
var width = $(window).width();
if (width > 650) {
    $('.left-menu').show();
}
if (width < 650) {
    $('.left-menu').hide();
    $('.right-contain').click(function () {
        $('.left-menu').hide();
    });
}