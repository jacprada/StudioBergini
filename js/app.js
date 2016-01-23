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


var handler = function(e){
    //code here
}

$(function() {
  $('.project-link').on('click', function() {
    event.preventDefault();
   var id = $(this).attr('id')

   switch(id){
    case "project-front":
    $(this).off('click');
    $('.project-right img').fadeOut('slow')
    $('.project-right').append('<img src="./img/variations/var_2.jpg">').show('slow');
    console.log($(this).parent().siblings('li').children());

    $(this).parent().siblings('li').children().on('click');
    break;

    case "project-back":
    $(this).off('click');
    $('.project-right img').fadeOut('slow')
    $('.project-right').append('<img src="./img/variations/var_4.jpg">').show('slow');
    console.log($(this).parent().siblings('li').children());
   $(this).parent().siblings('li').children().on('click');
    break;

  }
    // $('.project-right img').fadeOut('slow')
    // $('.project-right').append('<img src="./img/variations/var_2.jpg">').show('slow');
    event.preventDefault();
  });

});