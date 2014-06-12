(function () {
  "use strict";

  $('#spar-app-slide').on('slideenter', function() {
    var $iframe = $(this).find('iframe');
    $iframe.attr('src', 'http://localhost/~developer/Spar.Web_App/build/?debug').show();
  }).on('slideleave', function() {
    var $iframe = $(this).find('iframe');
    $iframe.hide();
  });

  $('#layers_wrapper > div').click(function(){
    $(this).parent().toggleClass('rotate');
    $('#layers_desc').addClass('show');
  });

  $('#layers_move_ball').click(function() {
    $('#layers_layer_3').toggleClass('moved');
  });
})();