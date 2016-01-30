$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});


$(window).on('scroll', function(){
  getScrolling();

  function getScrolling() {
    var sections = $('section.project');
    
    for (var i = 0; i < sections.length; i++) {
      // var sectionId = sections[i].id;
      var sectionText = $('#' + sections[i].id + ' h4.image-info').text();
      new Waypoint({
        element: document.getElementById(sections[i].id),
        handler: function() {
          $('.slider-info').text(sectionText);
          console.log(i);
        },
        offset: 75
      })
    }
  }
});


$(initialize)

function initialize() {
  // $('.sidebar').hide();

  $('.menu-arrow').on('click', function() {
    if( $(this).hasClass('open-menu')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

// $('.arrow-item').hover(
//   function() {
//     $(this).addClass('hover');
//   }, function() {
//     $(this).removeClass('hover');
//   });



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


  // function handler(direction) {
  //   console.log('diocane')
  // }

  // function getScrolling() {
  //   var sections = $('section.project');
  //   console.log(sections);
  //   sections.forEach(function(element) {
  //     new Waypoint({
  //       element: element,
  //       handler: handler,
  //       offset: 75
  //     })
  //   })
  // }









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

  $('.home-link').on('click', function() {
    $('body').animate({ scrollTop: 0 }, 800);
  })
  
  $('.toggle-text').on('click', function() {
    if($(this).hasClass('read-more')) {
    $(this).text('(less)');
    $('.unslider').css('display', 'none');
    $('.text-center, .text-right').css('display', 'inline-block');
    $(this).removeClass('read-more');
    $(this).addClass('read-less');
  } else {
    $(this).text('(more)');
    $('.text-center, .text-right').css('display', 'none');
    $('.unslider').css('display', 'block');
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

});