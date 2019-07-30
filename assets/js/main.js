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
    });
    $('.points').on('click', function() {
        let points = Array.from($(this).attr('data-points').split(', '));
        let values = Array.from($(this).attr('data-val').split(', '));
        $(this).parents('.block').find('.indicator').each(function(e, ind) {
            $(this).children('.progress-bar').children('span').css({ 'width': values[e] });
            $(this).children('p').text(values[e])
        })
        new Chartist.Line('.ct-chart', {
            labels: [1, 2, 3, 4, 5],
            series: [points]
        }, {
            low: 0,
            showArea: true
        });
    })
    new Chartist.Line('.ct-chart', {
        labels: [1, 2, 3, 4, 5],
        series: [
            [10, 15, 7, 20, 25]
        ]
    }, {
        low: 0,
        showArea: true
    });

    var $tooltip = $('<div class="tooltip tooltip-hidden"></div>').appendTo($('.ct-chart'));

    $(document).on('mouseenter', '.ct-point', function() {
        var seriesName = $(this).closest('.ct-series').attr('ct:series-name'),
            value = $(this).attr('ct:value');
        var cur = $('.points.active').attr('data-cur');
        $tooltip.text(value + " " + cur);
        $tooltip.removeClass('tooltip-hidden');
    });

    $(document).on('mouseleave', '.ct-point', function() {
        $tooltip.addClass('tooltip-hidden');
        $tooltip.css({
            visibility: 'hidden'
        });
    });
    $(document).on('mousemove', '.ct-point', function(event) {
        $tooltip.css({
            left: event.offsetX - $tooltip.width() / 2,
            top: event.offsetY - $tooltip.height() - 40,
            visibility: 'visible'
        });
    });

    $('.variable-width').slick({
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 3,
        centerMode: true,
        variableWidth: true,
        asNavFor: '.slider-for'
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 3,
        arrows: false,
        centerMode: true,
        asNavFor: '.variable-width'
    });

    var $r = $('input[type=range]');
    var output = $('output');

    output.each(function(e, i) {
        $(this).text($(this).parents('.range-values').find('input[type=range]').eq(e).val())
    })

    $r.rangeslider({
        polyfill: false
    });
    $r.on('input', function(e) {
        // console.log(e.currentTarget.value)
        $(this).siblings('output').text(e.currentTarget.value);
    });
});