(() => {
  $('.projects__item').each(function (i) {
    setTimeout(function () {
      $('.projects__item').eq(i).addClass('is-visible');
    }, 200 * i);
  });
})();