const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  controls: false,
  nav: false,
  speed: 1200,
  autoHeight: true,
});

(function ($) {
  $(function () {
    $("ul.catalog__tabs").on(
      "click",
      "li:not(.catalog__tab_active)",
      function () {
        $(this)
          .addClass("catalog__tab_active")
          .siblings()
          .removeClass("catalog__tab_active")
          .closest("div.container")
          .find("div.catalog__content")
          .removeClass("catalog__content_active")
          .eq($(this).index())
          .addClass("catalog__content_active");
      }
    );
  });
})(jQuery);
