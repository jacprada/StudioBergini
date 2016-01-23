$(initialize)

function initialize() {
  // $('.sidebar').hide();

  $('.fa-long-arrow-right').on('click', function() {
    if( $(this).hasClass('open-menu')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

function openMenu() {
  $('.fa-long-arrow-right').removeClass('close-menu');
  $('.fa-long-arrow-right').addClass('open-menu');
  $('.home-link').removeClass('close-menu-link');
  $('.home-link').addClass('open-menu-link');
  $('.left-navigation').removeClass('close-menu-nav');
  $('.left-navigation').addClass('open-menu-nav');
  $('.project-left p').removeClass('close-menu-text');
  $('.project-left p').addClass('open-menu-text');
  $('.sidebar').css('left', '0px');
}

function closeMenu() {
  $('.sidebar').show();
  $('.fa-long-arrow-right').removeClass('open-menu');
  $('.fa-long-arrow-right').addClass('close-menu');
  $('.home-link').removeClass('open-menu-link');
  $('.home-link').addClass('close-menu-link');+
  $('.left-navigation').removeClass('open-menu-nav');
  $('.left-navigation').addClass('close-menu-nav');
  $('.project-left p').removeClass('close-menu-text');
  $('.project-left p').addClass('close-menu-text');
  $('.sidebar').css('left', '-33.3%');
}

$(function() {
  $('.project-link').on('click', function() {
    console.log("hi")
    event.preventDefault();
    var id = $(this).attr('id')
    if($(this).hasClass('active')){
      return false
    }else{
      switch(id){
        case "project-front":
        $('.project-right img').fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_1.jpg">').show('slow');
        add_enable_class($(this))
        break;

        case "project-back":
        $('.project-right img').fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_2.jpg">').show('slow');
        add_enable_class($(this))
        break;

        case "project-open":
        $('.project-right img').fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_8.jpg">').show('slow');
        add_enable_class($(this))
        break;

        case "details-one":
        $('.project-right img').fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_3.jpg">').show('slow');
        add_enable_class($(this))
        break;

        case "details-two":
        $('.project-right img').fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_4.jpg">').show('slow');
        add_enable_class($(this))
        break;

        case "details-three":
        $('.project-right img').fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_5.jpg">').show('slow');
        add_enable_class($(this))
        break;

        case "details-four":
        $('.project-right img').fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_6.jpg">').show('slow');
        add_enable_class($(this))
        break;

        case "details-five":
        $('.project-right img').fadeOut('slow')
        $('.project-right').append('<img src="./img/variations/var_7.jpg">').show('slow');
        add_enable_class($(this))
        break;
      }} 
    });
function add_enable_class(elm){
  elm.parent().siblings('li').children().removeClass('active');
  elm.addClass('active')
}
});