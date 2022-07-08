$(document).ready(function() {
    $('#car-mobile .owl-carousel').owlCarousel({
        autoPlay: 9000,
        margin: 10,
        autoplay: true,
        dots: true,
        responsiveClass: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                margin: 20
            }
        }
    })
})

$(document).ready(function() {
    $('#item3 .owl-carousel').owlCarousel({
        autoPlay: 9000,
        margin: 10,
        autoplay: true,
        dots: true,
        responsiveClass: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                margin: 20,
                loop: false,
                autoPlay: false
            }
        }
    })
})

$(document).ready(function() {
    $('#benef .owl-carousel').owlCarousel({
        autoPlay: 9000,
        margin: 10,
        autoplay: true,
        dots: true,
        responsiveClass: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                margin: 20
            }
        }
    })
})

$(document).ready(function() {
    $('#tips .owl-carousel').owlCarousel({
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 3,
                nav: true,
            },
            962: {
                items: 3,
                nav: true,
                nav: false
            },
            1000: {
                items: 3,
                loop: false,
                nav: true,
                margin: 20
            }
        }
    })
})
$(document).ready(function() {
    $('.links').on('click', function() {
        var isThis = $(this);
        var isLink = $(this).data('link');
        isThis.addClass('active');
        isThis.siblings().removeClass('active');
        if (isLink == '1') {
            $('.banbif-finish-tabs-block.one').show();
            $('.banbif-finish-tabs-block.two').hide();
            $('.banbif-finish-tabs-block.three').hide();
        } else if (isLink == '2') {
            $('.banbif-finish-tabs-block.two').show();
            $('.banbif-finish-tabs-block.one').hide();
            $('.banbif-finish-tabs-block.three').hide();
        } else if (isLink == '3') {
            $('.banbif-finish-tabs-block.three').show();
            $('.banbif-finish-tabs-block.two').hide();
            $('.banbif-finish-tabs-block.one').hide();
        }
    });
})
$(document).ready(function() {
    $('.banbif-tabs-item h4').on('click', function() {
        var isThis = $(this);
        var isTabSibling = $(this).siblings();
        var isTabParent = $(this).parent().siblings();
        if (isThis.hasClass('active') == true) {
            isThis.removeClass('active');
        } else {
            isThis.addClass('active');
        }
        isTabSibling.slideToggle('fast');
        isTabParent.children('p').slideUp('fast');
        isTabParent.children('h4').removeClass('active');
    });
})

$(document).ready(function() {
    var firstQuestions = $('.first-questions');
    var secondQuestions = $('.second-questions');
    var threeQuestions = $('.three-questions');
    $(".banbif-accounts-img").on("click", function() {
        var isQuestions = $(this).data('account-o');
        var isLink = $(this).data('account-link');
        var isUltima = $(this).data('account-ultima'); // 1 o 0
        if (isUltima == 1) {
            window.location.href = isLink;
        } else {
            if (isQuestions == 1) {
                firstQuestions.hide();
                secondQuestions.show();
            } else if (isQuestions == 2) {
                firstQuestions.hide();
                threeQuestions.show();
            } else if (isQuestions == 3) {
                window.location.href = "/pruebad4";
            } else if (isQuestions == 4) {
                window.location.href = "/pruebad4";
            }
        }
    });
});