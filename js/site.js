    $('.btn-primary').click(function(){
      if($(this).hasClass( "btn-primary" )) {
        $(this).removeClass('btn-primary').addClass('btn-success');
        $(this).children('span').text("Ты мой бедный зайчик :)");
        if(!ready) {
          ready = true;
          loadd();
        }
      }
      else {
        $(this).removeClass('btn-success').addClass('btn-primary');
        $(this).children('span').text("Пожаловаться");
      }
    });

    var ready = false;
    var loadd = function () {
      var disqus_shortname = 'mymyt';
      (function() {
          var dsq = document.createElement('script');
          dsq.type = 'text/javascript';
          dsq.async = true;
          dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
    };