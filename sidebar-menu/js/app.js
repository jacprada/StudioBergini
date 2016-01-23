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
  $('.sidebar').css('left', '0px');
}

function closeMenu() {
  $('.sidebar').show();

  $('.fa-long-arrow-right').removeClass('open-menu');
  $('.fa-long-arrow-right').addClass('close-menu');

  $('.sidebar').css('left', '-300px');
}