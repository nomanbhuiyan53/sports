$(document).on('click', '.side-menu-btn', function () {
    $('.left-menu').toggle();
});

$(document).on('click', function (event) {
    if (!$(event.target).is('.left-menu') && !$(event.target).is('.side-menu-btn') && !$(event.target).is($(event.target).closest('.side-menu-btn').find('*')) && $('body').width() <= 768) {
        $('.left-menu').hide();
    }
});

$(window).resize(function () {
    var width = $(window).width();
    if (width > 769) {
        $('.left-menu').show();
    }
    if (width < 769) {
        $('.left-menu').hide();
    }
});