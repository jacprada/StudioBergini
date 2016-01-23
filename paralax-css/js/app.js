$(initialize)

function initialize() {
  // $('.sidebar').hide();

  $('.fa-arrow-right').on('click', function() {
    console.log('click')
    if( $(this).hasClass('open-menu')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  $('.close').on('click', function() {
      closeMenu();
  });
}

function openMenu() {
  $('.fa-arrow-right').removeClass('close-menu');
  $('.fa-arrow-right').addClass('open-menu');
  $('.sidebar').css('left', '0px');
  // $('.content').css('width', '100%').css('width', '-=300px');
}

function closeMenu() {
  $('.sidebar').show();

  $('.fa-arrow-right').removeClass('open-menu');
  $('.fa-arrow-right').addClass('close-menu');

  $('.sidebar').css('left', '-300px');
  // $('.content').css('width', '100%');
}