$(document).on('click', function (e) {
    if (!$(e.target).closest('.search_window').length && !$(e.target).hasClass("icon-loop")) {
        $('.search_window').removeClass('sw_opened');
    }
});