$(function() {
  $('a[href*=#].scroll:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.cross-menu > div').hover(
    function() {
      $(this).children('.inside').animate(
        {bottom: '0px'}, 500
        );
    },
    function() {
      $(this).children('.inside').animate(
        {bottom: '-100px'}, 500
        );
    }
    );
  $('.cross-menu > div').hover(
    function() {
      $(this).children('.in-dev').fadeIn();
    },
    function() {
      $(this).children('.in-dev').fadeOut();}
    );
});