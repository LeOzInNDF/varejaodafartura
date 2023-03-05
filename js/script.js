// Can also be used with $(document).ready()
function slide1(){
    document.getElementById('id').src="./img/slider1.jpg";
    setTimeout("slide2()", 10000)
    }
    
    function slide2(){
    document.getElementById('id').src="./img/slider2.jpg";
    setTimeout("slide3()", 10000)
    }
    
    function slide3(){
    document.getElementById('id').src="./img/slider3.jpg";
    setTimeout("slide1()", 10000)
    }
$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });


});

