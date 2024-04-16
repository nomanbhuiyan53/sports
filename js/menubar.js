$(document).on('click', function (event) {
    if (!$(event.target).is('.left-menu') && !$(event.target).is('.side-menu-btn') && !$(event.target).is($(event.target).closest('.side-menu-btn').find('*')) && $('body').width() <= 768) {
        $('.left-menu').hide();
    }
});