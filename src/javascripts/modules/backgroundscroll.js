import detectIt from 'detect-it'

export default class backgroundscroll {
  constructor(el) {


    	if(!detectIt.hasTouch) {
        // THIS WILL RUN ON DESKTOP
        $(window).scroll(function() {
        var $window = $(window),
            $body = $('body'),
            $panel = $('section'),
            $nav = $(".site-header");

        // var scroll = $window.scrollTop() + ($panel).height();

        var scroll = $window.scrollTop() + ($panel.height() / 1);



        $panel.each(function () {
          var $this = $(this);
          if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            $body.removeClass(function (index, css) {
              return (css.match (/(^|\s)fade-\S+/g) || []).join(' ');
            });
            //
            // $('body').attr('class', function(i, c){
            //     return c.replace(/(^|\s)fade-\S+/g, '');
            // });

            $body.addClass('fade-' + $(this).attr('data-bg-colour'));
          }
        });

        $panel.each(function () {
          var $this = $(this);
          if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            $nav.removeClass(function (index, css) {
              return (css.match (/(^|\s)hdr-\S+/g) || []).join(' ');
            });

            // $('.site-header').attr('class', function(i, c){
            //     return c.replace(/(^|\s)hdr-\S+/g, '');
            // });

            $nav.addClass('hdr-' + $(this).attr('data-bg-colour'));
          }
        });




      }).scroll();

      } else {
        // THIS WEILL RUN ON MOBILE
        var $window = $(window),
            $body = $('body'),
            $section = $('section');

            $section.each(function () {
              var $this = $(this);
                $this.removeClass(function (index, css) {
                  return (css.match (/(^|\s)fade-\S+/g) || []).join(' ');
                });
                $this.addClass('fade-' + $(this).attr('data-bg-colour'));
            });

    	}




  }
}
