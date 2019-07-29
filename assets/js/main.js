$(document).ready(() => {

    $('.menu-item').on('click', function() {
        $('.menu-item').removeClass('active');
        $(this).addClass('active');
    });
    $('.open-submenu').on('click', function() {
        $('.submenu-user-panel').toggleClass('active');
        $('.open-submenu').toggleClass('opened');
    });
    $(document).mouseup(function(e) {
        var div = $(".submenu-user-panel");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            div.removeClass('active');
            $('.open-submenu').removeClass('opened');
        }
    });
    $('.tab_content').on('click', '.tab', function() {
        $(this).parent('.tab_content').find('.active').removeClass('active');
        $(this).addClass('active');
    })
});