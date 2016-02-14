$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

function introAnimation(){
  $(".intro").css("background-color", "#FFFFFF");
  $(".intro-studio").css("display", "none");
  $(".intro-bergini").css("display", "block");
}

function outroAnimation(){
  $(".intro").css("display", "none");
  $("header").css("display", "block");
  $("main").css("display", "block");
}

function openMenu() {
  $('.menu-arrow').removeClass('close-menu');
  $('.menu-arrow').addClass('open-menu');
  $('.home-link').removeClass('close-menu');
  $('.home-link').addClass('open-menu');
  $('.left-navigation').removeClass('close-menu-nav');
  $('.left-navigation').addClass('open-menu-nav');
  $('.sidebar').css('left', '0px');
}

function closeMenu() {
  $('.sidebar').show();
  $('.menu-arrow').removeClass('open-menu');
  $('.menu-arrow').addClass('close-menu');
  $('.home-link').removeClass('open-menu');
  $('.home-link').addClass('close-menu');
  $('.left-navigation').removeClass('open-menu-nav');
  $('.left-navigation').addClass('close-menu-nav');
  $('.sidebar').css('left', '-33.3%');
}

function openMenuMobile() {
  $('.menu-arrow').removeClass('close-menu');
  $('.menu-arrow').addClass('open-menu');
  $('body').removeClass('close-menu-main');
  $('body').addClass('open-menu-main');
  $('.home-link').removeClass('close-menu');
  $('.home-link').addClass('open-menu');
  $('.left-navigation').removeClass('close-menu-nav');
  $('.left-navigation').addClass('open-menu-nav');
  $('.sidebar').css('left', '0px');
}

function closeMenuMobile() {
  $('.sidebar').show();
  $('.menu-arrow').removeClass('open-menu');
  $('.menu-arrow').addClass('close-menu');
  $('body').removeClass('open-menu-main');
  $('body').addClass('close-menu-main');
  $('.home-link').removeClass('open-menu');
  $('.home-link').addClass('close-menu');+
  $('.left-navigation').removeClass('open-menu-nav');
  $('.left-navigation').addClass('close-menu-nav');
  $('.sidebar').css('left', '-100%');
}

$(function() {

  // setWaypoints()
  checkForHash();
  checkForMobile();


  function checkForHash() {
    var url = window.location.href;
    var hash = "#"
    var windowWidth = $(window).width()

    if (url.indexOf(hash) >= 0) {
      console.log("yes");
      setTimeout(introAnimation, 00);
      setTimeout(outroAnimation, 00);
      setTimeout(setWaypoints, 10);
    } else {
      console.log("no");
      setTimeout(introAnimation, 500);
      setTimeout(outroAnimation, 1000);
      setTimeout(setWaypoints, 1000);
    }
  }


  function checkForMobile() {
    var windowWidth = $(window).width()

    if (windowWidth < 1000) {
      // getImageHeight()
      $('.menu-arrow, .home-link').on('click', function(e) {
        e.preventDefault();
        if( $(this).hasClass('open-menu')) {
          closeMenuMobile();
        } else {
          openMenuMobile();
        }
      })
    } else {
      $('.menu-arrow, .home-link').on('click', function(e) {
        e.preventDefault();
        if( $(this).hasClass('open-menu')) {
          closeMenu();
        } else {
          openMenu();
        }
      })
    }
  }

  // var slides = $('.slides'),
  //     i = 0;

  // slides
  // .on('swipeleft', function(e) {
  //     unslider.prev();
  // })
  // .on('swiperight', function(e) {
  //     unslider.next();
  // });



// function getImageHeight() {
//   var sections = $('section.project')
//   for (var i = 0; i < sections.length; i++) {
//     var sectionId = sections[i].id

    
//     var imageHeight = getImageMin(sectionId);
//     console.log(imageHeight);

//   };
//   // 
  
// }

// function getImageMin(sectionId) {
//   var maximum = null;
//   $('#' + sectionId + ' ul li img').each(function() {
//     console.log($(this).context)
//     var value = parseFloat($(this).context.height());
//     maximum = (value > maximum) ? value : maximum;
//   });
//   return maximum
// }






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



  
  // $('.arrow-item').mouseover(function() {
  //   $(this).velocity('stop', false).velocity({translateX: "4px", scaleX: "1.2,1"});
  // });

  // $('.arrow-item').mouseleave(function() {
  //   $(this).velocity('stop', false).velocity({translateX: "0px", scaleX: "1,1"});
  // });

getImageInfo();

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
    animation: 'fade',
    speed: 400
  });



  // data = unslider.data('unslider');

  // var slides = $('.slides'),
  //     i = 0;

  // slides
  // .on('swipeleft', function(e) {
  //     data.prev();
  // })
  // .on('swiperight', function(e) {
  //     data.next();
  // })

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


  // $('.home-link').on('click', function(e) {
  //   e.preventDefault();
  //   $('body, html').animate({ scrollTop: 0 }, 1000);
  // })

  // $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
  //       $('html, body').stop();
  //   });

function addMobileProjectText(sectionId){
  var textLeft = $('#' + sectionId + ' .text-left').text().slice(0,-6);
  var textCenter = $('#' + sectionId + ' .text-center').text();
  var textRight = $('#' + sectionId + ' .text-right').text();
  $('#' + sectionId + ' .project-mobile').append('<p>'+ textLeft + '</p>' + '<br>' + '<p>'+ textCenter + '</p>'  + '<br>' +  '<p>'+ textRight + '</p>' + '<h6 class="extra-mobile-toggle">(less)</h6>');

    $('.extra-mobile-toggle').on('click', function(e) {
      e.preventDefault();
      var sectionId = $(this).parents('section')[0].id;
      var anchorId = $('#' + sectionId).prev()[0].id;
      removeMobileProjectText(sectionId);
      $('#' + sectionId + ' .toggle-text-mobile').text('(more)');
      $('#' + sectionId + ' .toggle-text-mobile').removeClass('read-less-mobile');
      $('#' + sectionId + ' .toggle-text-mobile').addClass('read-more-mobile');
      var tag = $('#' + anchorId);
      $('html,body').animate({scrollTop: tag.offset().top});
  })
}

function removeMobileProjectText(sectionId){
  $('#' + sectionId + ' .project-mobile').empty();
}
  
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

    $('.toggle-text-mobile').on('click', function(e) {
      e.preventDefault();
      var sectionId = $(this).parents('section')[0].id;
      if($(this).hasClass('read-more-mobile')) {
      addMobileProjectText(sectionId)
      $(this).text('(less)');
      $(this).removeClass('read-more-mobile');
      $(this).addClass('read-less-mobile');
    } else {
      removeMobileProjectText(sectionId)
      $(this).text('(more)');
      $(this).removeClass('read-less-mobile');
      $(this).addClass('read-more-mobile');
    }
  })

});