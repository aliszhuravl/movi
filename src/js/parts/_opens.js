(function($) {
    $('.search_btn').on('click', function () {
        $('.search_window').addClass('sw_opened');
    });
    $('.close_btn').on('click', function () {
        $('.search_window').removeClass('sw_opened');
    });
})(jQuery);