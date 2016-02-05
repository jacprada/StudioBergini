$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

function openMenu() {
  $('.menu-arrow').removeClass('close-menu');
  $('.menu-arrow').addClass('open-menu');
  $('.home-link').removeClass('close-menu-link');
  $('.home-link').addClass('open-menu-link');
  $('.left-navigation').removeClass('close-menu-nav');
  $('.left-navigation').addClass('open-menu-nav');
  // $('.project-left p').removeClass('close-menu-text');
  // $('.project-left p').addClass('open-menu-text');
  // $('.toggle-text').removeClass('close-menu-toggle');
  // $('.toggle-text').addClass('open-menu-toggle');
  $('.sidebar').css('left', '0px');
}

function closeMenu() {
  $('.sidebar').show();
  $('.menu-arrow').removeClass('open-menu');
  $('.menu-arrow').addClass('close-menu');
  $('.home-link').removeClass('open-menu-link');
  $('.home-link').addClass('close-menu-link');+
  $('.left-navigation').removeClass('open-menu-nav');
  $('.left-navigation').addClass('close-menu-nav');
  // $('.project-left p').removeClass('close-menu-text');
  // $('.project-left p').addClass('close-menu-text');
  // $('.toggle-text').removeClass('open-menu-toggle');
  // $('.toggle-text').addClass('close-menu-toggle');
  $('.sidebar').css('left', '-33.3%');
}

$(function() {



    // $('a[href*="#"]:not([href="#"])').click(function() {
    //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //     var target = $(this.hash);
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //     if (target.length) {
    //       $('html, body').animate({
    //         scrollTop: target.offset().top
    //       }, 1000);
    //       return false;
    //     }
    //   }
    // });

  $('.menu-arrow').on('click', function(e) {
    e.preventDefault();
    if( $(this).hasClass('open-menu')) {
      closeMenu();
    } else {
      openMenu();
    }
  })

  
  // $('.arrow-item').mouseover(function() {
  //   $(this).velocity('stop', false).velocity({translateX: "4px", scaleX: "1.2,1"});
  // });

  // $('.arrow-item').mouseleave(function() {
  //   $(this).velocity('stop', false).velocity({translateX: "0px", scaleX: "1,1"});
  // });
 


  // setWaypoints();

  // function bananaWaypoints() {
  //   var continuousElements = document.getElementsByClassName('continuous-true')
  //   for (var i = 0; i < continuousElements.length; i++) {
  //     new Waypoint({
  //       element: continuousElements[i],
  //       handler: function(direction) {
  //         if(direction == 'down') {
  //           var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
  //           var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
  //           var imageMax = getImageMax(this.element.id);
  //           var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //           $('.slider-info').text(imageFullText);
  //           console.log('going down ' + this.element.id)
  //         }
  //       },
  //       // context: $('main'),
  //       offset: 75
  //     })
  //     new Waypoint({
  //       element: continuousElements[i],
  //       handler: function(direction) {
  //         if(direction == 'up') {
  //           var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
  //           var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
  //           var imageMax = getImageMax(this.element.id);
  //           var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //           $('.slider-info').text(imageFullText);
  //           console.log('going up ' + this.element.id)
  //           console.log(this.element)
  //           // alert('hello')
  //         }
  //       },
  //       offset: function() {
  //         console.log(this.element.clientHeight)
  //         return -(this.element.clientHeight - 115)
  //       }
  //       // offset: -450
  //     })
  //   }
  // }

  function setWaypoints() {
    var continuousElements = document.getElementsByClassName('continuous-true')
    for (var i = 0; i < continuousElements.length; i++) {
      new Waypoint({
        element: continuousElements[i],
        handler: function(direction) {
          if(direction == 'down') {
            if($('#' + this.element.id + ' .toggle-text').hasClass('read-more')) {
              if($('#' + this.element.id + ' ul .unslider-active img').attr('alt') == undefined) {
                var imageInfo = ($('#' + this.element.id + ' ul li img').first().attr('alt'));
                var imageNum = ($('#' + this.element.id + ' ul li img').first().attr('data-num'));
                var imageMax = getImageMax(this.element.id);
                var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
                $('.slider-info').text(imageFullText);
              } else {
                var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
                var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
                var imageMax = getImageMax(this.element.id);
                var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
                $('.slider-info').text(imageFullText);
              }
            } else {
              $('.slider-info').text('');
            }
          }
        },
        offset: 75
      })
      new Waypoint({
        element: continuousElements[i],
        handler: function(direction) {
          if(direction == 'up') {
            if($('#' + this.element.id + ' .toggle-text').hasClass('read-more')) {
              if($('#' + this.element.id + ' ul .unslider-active img').attr('alt') == undefined) {
                var imageInfo = ($('#' + this.element.id + ' ul li img').first().attr('alt'));
                var imageNum = ($('#' + this.element.id + ' ul li img').first().attr('data-num'));
                var imageMax = getImageMax(this.element.id);
                var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
                $('.slider-info').text(imageFullText);
              } else {
                var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
                var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
                var imageMax = getImageMax(this.element.id);
                var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
                $('.slider-info').text(imageFullText);
              }
            } else {
              $('.slider-info').text('');
            }
          }
        },
        offset: function() {
          console.log(this.element.clientHeight)
          return -(this.element.clientHeight - 75)
        }
      })
    }
  }

  // function bananaWaypoints() {
  //   var continuousElements = document.getElementsByClassName('continuous-true')
  //   for (var i = 0; i < continuousElements.length; i++) {
  //     new Waypoint({
  //       element: continuousElements[i],
  //       handler: function(direction) {
  //         if(direction == 'down') {
  //           var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
  //           var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
  //           var imageMax = getImageMax(this.element.id);
  //           var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //           $('.slider-info').text(imageFullText);
  //           console.log('going down ' + this.element.id)
  //         }
  //       },
  //       // context: $('main'),
  //       offset: 75
  //     })
  //     new Waypoint({
  //       element: continuousElements[i],
  //       handler: function(direction) {
  //         if(direction == 'up') {
  //           var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
  //           var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
  //           var imageMax = getImageMax(this.element.id);
  //           var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //           $('.slider-info').text(imageFullText);
  //           console.log('going up ' + this.element.id)
  //           console.log(this.element)
  //           // alert('hello')
  //         }
  //       },
  //       offset: function() {
  //         console.log(this.element.clientHeight)
  //         return -(this.element.clientHeight - 115)
  //       }
  //       // offset: -450
  //     })
  //   }
  // }

  // function setWaypoints() {
  //   var continuousElements = document.getElementsByClassName('continuous-true')
  //   for (var i = 0; i < continuousElements.length; i++) {
  //     new Waypoint({
  //       element: continuousElements[i],
  //       handler: function() {
  //       if($('#' + this.element.id + ' .toggle-text').hasClass('read-more')) {
  //         if($('#' + this.element.id + ' ul .unslider-active img').attr('alt') == undefined) {
  //           var imageInfo = ($('#' + this.element.id + ' ul li img').first().attr('alt'));
  //           var imageNum = ($('#' + this.element.id + ' ul li img').first().attr('data-num'));
  //           var imageMax = getImageMax(this.element.id);
  //           var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //           $('.slider-info').text(imageFullText);
  //         } else {
  //           var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
  //           var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
  //           var imageMax = getImageMax(this.element.id);
  //           var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //           $('.slider-info').text(imageFullText);
  //         }
  //       } else {
  //         $('.slider-info').text('');
  //       }
  //     },
  //     offset: 74
  //   })
  //   }
  // }


  // function setWaypoints() {
  //   var continuousElements = document.getElementsByClassName('continuous-true')
  //   for (var i = 0; i < continuousElements.length; i++) {
  //     new Waypoint({
  //       element: continuousElements[i],
  //       handler: function() {
  //       if($('#' + this.element.id + ' .toggle-text').hasClass('read-more')) {
  //         if($('#' + this.element.id + ' ul .unslider-active img').attr('alt') == undefined) {
  //           var imageInfo = ($('#' + this.element.id + ' ul li img').first().attr('alt'));
  //           var imageNum = ($('#' + this.element.id + ' ul li img').first().attr('data-num'));
  //           var imageMax = getImageMax(this.element.id);
  //           var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //           $('.slider-info').text(imageFullText);
  //         } else {
  //           var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
  //           var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
  //           var imageMax = getImageMax(this.element.id);
  //           var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //           $('.slider-info').text(imageFullText);
  //         }
  //       } else {
  //         $('.slider-info').text('');
  //       }
  //     },
  //     offset: 74
  //   })
  //   }
  // }

  // function resetWaypoints() {
  //   var continuousElements = document.getElementsByClassName('continuous-true')
  //   for (var i = 0; i < continuousElements.length; i++) {
  //     new Waypoint({
  //       element: continuousElements[i],
  //       handler: function() {
  //       // console.log(this.element.id)
  //       var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
  //       var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
  //       var imageMax = getImageMax(this.element.id);
  //       var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //       $('.slider-info').text(imageFullText);
  //     },
  //     offset: 74
  //   })
  //   }
  // }


  // context: '.scrollable-element'

  setWaypoints()


  //     if(direction == 'down') {
  //       new Waypoint({
  //         element: continuousElements[i],
  //         handler: function() {
  //       // console.log(this.element.id)
  //       var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
  //       var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
  //       var imageMax = getImageMax(this.element.id);
  //       var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //       $('.slider-info').text(imageFullText);
  //     },
  //     offset: 75
  //   })
  //     } else {
  //       new Waypoint({
  //         element: continuousElements[i],
  //         handler: function() {
  //         // console.log(this.element.id)
  //         var imageInfo = ($('#' + this.element.id + ' ul .unslider-active img').attr('alt'))
  //         var imageNum = ($('#' + this.element.id + ' ul .unslider-active img').attr('data-num'));
  //         var imageMax = getImageMax(this.element.id);
  //         var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax;
  //         $('.slider-info').text(imageFullText);
  //       },
  //       offset: 75
  //     })
  //     }
  //   }
  // }




  // .waypoint(function(event, direction) {
  //    if (direction === 'down') {
  //       // do this on the way down
  //    }
  //    else {
  //       // do this on the way back up through the waypoint
  //    offset: '50%'  // trigger at middle of page.

  //    }
  // });


  // $('#flux').bind('scroll', function() {
  //   if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight) {
  //     alert('end reached');
  //   }
  // })

  getImageInfo();

  function getImageInfo() {
    var sections = $('section.project');
    for (var i = 0; i < sections.length; i++) {
      var sectionId = sections[i].id
      var imageInfo = $('#' + sectionId + ' ul li img').first().attr('alt');
      var imageNum = $('#' + sectionId + ' ul li img').first().attr('data-num');
      var imageMax = getImageMax(sectionId);
      var imageFullText = imageInfo + ' ' + imageNum + '/' + imageMax
      $('#' + sectionId + ' h4.image-info').text(imageFullText);
    };
  }

  $('.my-slider').unslider({
    animation: 'fade'
  });

  $('.prev, .next').on('click', function() {
    var sections = $('section.project');
    for (var i = 0; i < sections.length; i++) {
      var sectionId = sections[i].id
      var imageInfo = $('#' + sectionId + ' ul .unslider-active img').attr('alt');
      var imageNum = $('#' + sectionId + ' ul .unslider-active img').attr('data-num');
      var imageMax = getImageMax(sectionId);
      $('#' + sectionId + ' h4.image-info').text(imageInfo + ' ' + imageNum + '/' + imageMax);
    };
    setWaypoints();
  });

  function getImageMax(sectionId) {
    var maximum = null;
    $('#' + sectionId + ' ul li img').each(function() {
      var value = parseFloat($(this).attr('data-num'));
      maximum = (value > maximum) ? value : maximum;
    });
    return maximum
  }


  

  // function introAnimation(){
  //   $(".intro").css("background-color", "#FFFFFF");
  //   $(".intro-studio").css("display", "none");
  //   $(".intro-bergini").css("display", "block");
  // }

  // function outroAnimation(){
  //   $(".intro").css("display", "none");
  //   $("header").css("display", "block");
  //   $("main").css("display", "block");
  // }

  // setTimeout(introAnimation, 1000);
  // setTimeout(outroAnimation, 2000);

  $('.home-link').on('click', function(e) {
    e.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 1000);
  })

  $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
        $('html, body').stop();
    });
  
  $('.toggle-text').on('click', function(e) {
    e.preventDefault();
    setWaypoints()
    var sectionId = $(this).parents('section')[0].id;
    console.log(sectionId)
    if($(this).hasClass('read-more')) {
    $(this).text('(less)');
    $('#' + sectionId + ' .unslider').css('display', 'none');
    $('#' + sectionId + ' .text-center, #' + sectionId + ' .text-right').css('display', 'inline-block');
    $(this).removeClass('read-more');
    $(this).addClass('read-less');
  } else {
    $(this).text('(more)');
    $('#' + sectionId + ' .text-center, #' + sectionId + ' .text-right').css('display', 'none');
    $('#' + sectionId + ' .unslider').css('display', 'block');
    $(this).removeClass('read-less');
    $(this).addClass('read-more');
  }
})


  $('.project-link').on('click', function() {
    if($('.toggle-text').hasClass('read-less')) {
      $('.toggle-text').text('(more)');
      $('.text-center, .text-right').css('display', 'none');
      $('.project-right img').css('display', 'block');
      $('.toggle-text').removeClass('read-less');
      $('.toggle-text').addClass('read-more');
    }
    console.log("hi")
    event.preventDefault();
    var id = $(this).attr('id')
    if($(this).hasClass('active')){
      return false
    }else{
      switch(id){
        case "project-front":
        $('.project-right img').remove().fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_1.jpg">').fadeIn(1000);
        add_enable_class($(this))
        break;

        case "project-back":
        $('.project-right img').remove().fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_2.jpg">').fadeIn(1000);
        add_enable_class($(this))
        break;

        case "project-open":
        $('.project-right img').remove().fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_8.jpg">').fadeIn(1000);
        add_enable_class($(this))
        break;

        case "details-one":
        $('.project-right img').remove().fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_3.jpg">').fadeIn(1000);
        add_enable_class($(this))
        break;

        case "details-two":
        $('.project-right img').remove().fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_4.jpg">').fadeIn(1000);
        add_enable_class($(this))
        break;

        case "details-three":
        $('.project-right img').remove().fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_5.jpg">').fadeIn(1000);
        add_enable_class($(this))
        break;

        case "details-four":
        $('.project-right img').remove().fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_6.jpg">').fadeIn(1000);
        add_enable_class($(this))
        break;

        case "details-five":
        $('.project-right img').remove().fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_7.jpg">').fadeIn(1000);
        add_enable_class($(this))
        break;
      }} 
    });
function add_enable_class(elm){
  elm.parent().siblings('li').children().removeClass('active');
  elm.addClass('active')
}

// getScrolling();

});