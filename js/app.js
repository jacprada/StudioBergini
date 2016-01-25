$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
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

  $('.home-link').on('click', function() {
    $('body').animate({ scrollTop: 0 }, 800);
  })
  
  $('.toggle-text').on('click', function() {
    if($(this).hasClass('read-more')) {
    $(this).text('(less)');
    $('.project-right img').css('display', 'none');
    $('.text-center, .text-right').css('display', 'inline-block');
    $(this).removeClass('read-more');
    $(this).addClass('read-less');
  } else {
    $(this).text('(more)');
    $('.text-center, .text-right').css('display', 'none');
    $('.project-right img').css('display', 'block');
    $(this).removeClass('read-less');
    $(this).addClass('read-more');
  }
})


  $('.project-link').on('click', function() {
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