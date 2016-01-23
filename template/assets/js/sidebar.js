$(initialize)

function initialize() {
  // $('.sidebar').hide();

  $('.side-click').on('click', function() {
    console.log('click')
    if( $(this).hasClass('open-menu')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

function openMenu() {
  $('.sidebar').css('left', '0px');
}

function closeMenu() {
  $('.sidebar').show();
  $('.sidebar').css('left', '-300px');
}