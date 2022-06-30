// carrousel nuevos beneficios del app
$(document).ready(function() {
    $('#nuevos-beneficios .owl-carousel').owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
          loop: false,
        }
      }
    })
})

// carrousel promociones 
$(document).ready(function() {
    $('#promo .owl-carousel').owlCarousel({
      responsiveClass: true,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
          autoplay: true,
         loop: true,
        },
        600: {
          items: 2,
        }
      }
    })
})

// videos
$(document).ready(function() {
    $('#myModal').on('hidden.bs.modal', function() {
        var $this = $(this).find('iframe'),
        tempSrc = $this.attr('src');
        $this.attr('src', "");
        $this.attr('src', tempSrc);
    });
});


