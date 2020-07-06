$(document).ready(function () {
    $('.loading-box').fadeOut();
    $('input[name=telefone]').mask('(00) 0000-00009');

    //background video
    var timeoutId;
    var $videoBgAspect = $(".videobg-aspect");
    var $videoBgWidth = $(".videobg-width");
    var videoAspect = $videoBgAspect.outerHeight() / $videoBgAspect.outerWidth();

    function videobgEnlarge() {
        console.log('resize');
        windowAspect = ($(window).height() / $(window).width());
        if (windowAspect > videoAspect) {
            $videoBgWidth.width((windowAspect / videoAspect) * 100 + '%');
        } else {
            $videoBgWidth.width(100 + "%")
        }
    }

    $(window).resize(function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(videobgEnlarge, 100);
    });

    $(function () {
        videobgEnlarge();
    });
    var options1 = {
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
        muted: 1,
        autoplay: 1,
        controls: 0,
        loop: 1,
        background: 1,
    };
    var selector = 'video1';
    jQuery('#' + selector).addClass('show');
    var video1Player = new Vimeo.Player(selector, options1);
    video1Player.setVolume(0);
    video1Player.play();
    $('.audio').click(function () {
        if (!$('.audio').hasClass('muted')) {
            video1Player.setVolume(0);
        }
        else {
            video1Player.setVolume(0.5);
        }
        $('.audio').toggleClass('muted');
        return false;
    })
})
