$(initialize)

function initialize() {
  // $('.sidebar').hide();

  $('.fa-bars').on('click', function() {
    if( $(this).hasClass('open-menu')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

function openMenu() {
  $('.fa-bars').removeClass('close-menu');
  $('.fa-bars').addClass('open-menu');
  $('.sidebar').css('left', '0px');
}

function closeMenu() {
  $('.sidebar').show();

  $('.fa-bars').removeClass('open-menu');
  $('.fa-bars').addClass('close-menu');

  $('.sidebar').css('left', '-300px');
}