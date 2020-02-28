// ヘッダー途中固定
$(function() {
  var $win = $(window),
    $main = $('main'),
    $nav = $('header'),
    navHeight = $nav.outerHeight(),
    navPos = $nav.offset().top,
    fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if (value > navPos) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});

// スムーススクロール
$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var headerh = $('header').height();
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerh;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

// フェードイン
$(window).scroll(function() {
  $('.fade,.slide').each(function() {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    // fadein
    if (scroll > elemPos - windowHeight + 250) {
      $(this).addClass('in');
    } else {
      $(this).removeClass('in');
    }
  })
});
