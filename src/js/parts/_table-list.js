(function($) {
    $('.view_tile').on('click', function () {
        $('.catalog_items__tile').addClass('table_style');
        $('.view_tile').addClass('active_blue');
        $('.view_list').removeClass('active_blue');
    });
    $('.view_list').on('click', function () {
        $('.catalog_items__tile').removeClass('table_style');
        $('.view_list').addClass('active_blue');
        $('.view_tile').removeClass('active_blue');
    });
})(jQuery);