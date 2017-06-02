$(window).scroll(function(){
  var offset = $(this).scrollLeft();
  var totalWidth = $('#container').width();

})

$(function() {
  $('#selectBurundi .btn-next, #selectCongo .btn-next, #selectRwanda .btn-next').bind('click',function(event){
    $('#blob2, #brush').fadeIn(0);

  });

});

$(function() {

    $('.btn-next').bind('click',function(event){
        var $anchor = $(this);
        $('body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1000, 'easeInOutQuart');

        $('#blob').animate({
            right: "-=60"
        }, 1000, 'easeInOutQuart');

        $('#foliage').animate({
            right: "-=180"
        }, 1000, 'easeInOutQuart');


        $('#blob2').animate({
            right: "-=60"
        }, 1000, 'easeInOutQuart');

        $('#brush').animate({
            right: "-=180"
        }, 1000, 'easeInOutQuart');




        event.preventDefault();
    });

    $('.btn-back').bind('click',function(event){
        var $anchor = $(this);
        $('body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1000, 'easeInOutQuart');

        $('#blob').animate({
            right: "+=60"
        }, 1000, 'easeInOutQuart');

        $('#foliage').animate({
            right: "+=180"
        }, 1000, 'easeInOutQuart');


        $('#blob2').animate({
            right: "+=60"
        }, 1000, 'easeInOutQuart');

        $('#brush').animate({
            right: "+=180"
        }, 1000, 'easeInOutQuart');


        event.preventDefault();
    });


});


var fixed = document.getElementById('container');

fixed.addEventListener('touchmove', function(e) {

        e.preventDefault();

}, false);


$(function() {

    $('#btn-Burundi').bind('click',function(event){
      $('#selectBurundi').removeClass('none');
      $('#selectBurundi').addClass('visible');

      $('.back').addClass('none');

    });

    $('#btn-Congo').bind('click',function(event){
      $('#selectCongo').removeClass('none');
      $('#selectCongo').addClass('visible');

      $('.back').addClass('none');

    });

    $('#btn-Rwanda').bind('click',function(event){
      $('#selectRwanda').removeClass('none');
      $('#selectRwanda').addClass('visible');

      $('.back').addClass('none');

    });

});

$(function() {
  $('.btn-cancel').bind('click',function(event){
    $('#selectBurundi').removeClass('visible');
    $('#selectBurundi').addClass('none');

    $('#selectCongo').removeClass('visible');
    $('#selectCongo').addClass('none');

    $('#selectRwanda').removeClass('visible');
    $('#selectRwanda').addClass('none');

    $('.back').removeClass('none');

  });

});



$(function() {
  $('[data-type]').click(function(e){
              $.ajax({
              type: 'POST',
              url: './phpmailer/mail.php',
              data: {"type": $(e.currentTarget).data('type')}


              });
    });

 });
