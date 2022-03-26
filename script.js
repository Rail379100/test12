$(document).ready(function(){

  $('.reviews_slider').slick({
    infinity: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: document.querySelector('#rev_botton_r'),
    prevArrow: document.querySelector('#rev_botton_l'),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

 // let  = $(document).outerHeight(true);
 let = doc_height = $(document).height();
  $('.body_filters').css("height", doc_height)
  
  $('.header_services_button').click(function(event) {
   
    $('.header_services').toggleClass('active');
  });
  $('.header_services_button_mobile').click(function(event) {
   
    $('.header_services_mobile').toggleClass('active');
  });
  $('.header_menu_button_mobile').click(function(event) {
   
    $('.header_menu_mobile').toggleClass('active');
  });
  $('.header_menu_mobile_exit_button').click(function(event) {
   
    $('.header_menu_mobile').toggleClass('active');
  });

  if($(window).width() <= 1440){
    $('.check_pass_right_h2').text("Подключить контроль пропуска");
  }
 

});



