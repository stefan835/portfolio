(() => {
  $('.projects__item').children().each(function (i) {
    setTimeout(function () {
      $('.projects__item').children().eq(i).addClass('is-visible');
    }, 200 * i);
  });
})();