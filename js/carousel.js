$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:false,
    stagepadding: 0,
    center: false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        500:{
          items:1.5  
        },
        600:{
            items:1.5,
        },
        700:{
            items:1.5,
            center: true,
            loop:true,
        },
        900:{
            items: 2,
        },
        1000:{
            items:2.2,
        },
        1200:{
            items:2.5,
        },
        1350:{
            items:3,
        },
        1500:{
            items:3,
        },
        1800:{
            items:4,

        },
    }
})
});
