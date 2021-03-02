$(document).ready(function () {






  // var owl = $('.owl-carousel-testi, .owl-carousel-news');
  // owl.owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: false,
  //   items: 1,
  // });

  // Custom Button
  // $('#News-Faq .customNextBtn').click(function () {
  //   owl.trigger('next.owl.carousel');
  // });
  // $('#News-Faq .customPreviousBtn').click(function () {
  //   owl.trigger('prev.owl.carousel');
  // });

  $("#owl-example").owlCarousel({
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    pagination: false,
    rewindSpeed: 500,
    afterMove: moved
  });

  $('.custom-control').on('click', 'button', function () {
    var $this = $(this);
    var slideNum = $(this).data('slide');
    $("#owl-example").trigger('owl.goTo', slideNum);
  });

  
  function moved() {
    var owl = $("#owl-example").data('owlCarousel');
    var $buttons = $('.custom-control button');
    var $top_banner = $('.custom-control .bottom-banner .full');
    $top_banner.removeClass('active').removeAttr('disabled');
    $buttons.removeClass('active').removeAttr('disabled');
    $('.custom-control').find('[data-slide="' + owl.currentItem + '"]').addClass('active').attr('disabled', 'disabled');
  }

});


// for Counter


var a = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

$(document).ready(function () {
  var owl = $('.owl-carousel-testi');
  var owl_news = $('.owl-carousel-news');
  owl.owlCarousel({
    items: 1,
    singleItem: true,
    itemsScaleUp : true,
    slideSpeed: 500,
    autoPlay: 5000,
    stopOnHover: true
  });
  owl_news.owlCarousel({
    items: 1,
    singleItem: true,
    itemsScaleUp : true,
    slideSpeed: 500,
    autoPlay: 5000,
    stopOnHover: true,
    pagination: false,
    navigation: true,
    navigationText: ['<span><i class="fa fa-caret-left"></i></span>', '<span> <i class="fa fa-caret-right"></i></span>'],
    items: 1
  });


  $(".collapse.show").each(function () {
    $(this).prev(".card-header").find(".fa").addClass("active");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").addClass("active");
  }).on('hide.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("active");
  });



});