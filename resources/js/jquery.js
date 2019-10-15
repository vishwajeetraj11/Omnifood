$(document).ready(function(){

    /* Sticky Navigation*/
    $('.js-section-features').waypoint(function(direction) {
        if (direction == 'down'){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });


    /*scroll on buttons */
    $('.js-scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top},1000);
    });

    $('.js-scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js-section-features').offset().top},1000);
    });


    /*Navigation Smooth */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });



    //   /* Animations on scroll */
    //   $('.js-wayp-1').waypoint(function(direction){
    //       $('.js-wayp-1').addClass('animated fadeIn');
    //   },{
    //       offset: '50%'
    //   })
    //   $('.js-wayp-2').waypoint(function(direction){
    //       $('.js-wayp-2').addClass('animated fadeInUp');
    //   },{
    //       offset: '50%'
    //   })
    //   $('.js-wayp-3').waypoint(function(direction){
    //       $('.js-wayp-3').addClass('animated fadeInUp');
    //   },{
    //       offset: '50%'
    //   })
    //   $('.js-wayp-4').waypoint(function(direction){
    //       $('.js-wayp-4').addClass('animated plse');
    //   },{
    //       offset: '50%'
    //   })


      $('.js-wayp-1').waypoint(function() {
        $('.js-wayp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js-wayp-2').waypoint(function() {
        $('.js-wayp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js-wayp-3').waypoint(function() {
        $('.js-wayp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js-wayp-4').waypoint(function() {
        $('.js-wayp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    /*Mobile navigation */
    $('.js-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        nav.slideToggle(200);

        var icon = $('.js-nav-icon i');
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round')
            icon.removeClass('ion-navicon-round')
        } else {
            icon.addClass('ion-navicon-round')
            icon.removeClass('ion-close-round')
        }
       
    });
});

