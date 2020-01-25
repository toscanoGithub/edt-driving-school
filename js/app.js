$(document).ready(function () {


  // <i class="fas fa-times"></i>

  $('.js--nav-icon').click(function () {
    const nav = $('.js--main-nav');
    nav.slideToggle(200);

    var icon = $('.js--nav-icon');
    if (icon.hasClass('fa-bars')) {
      icon.removeClass('fa-bars');
      icon.addClass('fa-times');
    } else {
      icon.removeClass('fa-times');
      icon.addClass('fa-bars');
    }
  });

  // SCROLL BUTTON 
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 400, 'linear')
  });
});
