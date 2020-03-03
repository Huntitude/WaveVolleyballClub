// Jquery Team tab + body team 
$(document).ready(function(){
    $(".showSingle").click(function(){
        $(".targetDiv").hide();
        $("#div" + $(this).attr("target")).show();
    });
});
// Team Tabs 
$(document).ready(function(){
    $('.teams ul li').on('click',function(){
        // keeps the background color of the rest of the tabs 
        $('li.showSingle').css("background-color", "rgb(218, 218, 218)");

        // larger size font-size on click and shrinks the other tabs
        // $('li.showSingle').css('font-size', "22px");
        // $(this).css("font-size", "26px");

        // adds different color to active  tab 
        $(this).css("background-color", "rgb(234, 234, 234)");

    });
})

// Responsive Tabs 
// $(document).ready(function(){
//     $(window).resize(function(){
//         if ($(window).width() > 1045) {
//             $('li.showSingle').css('border-top-left-radius', "30px"); 
//             $('li.showSingle').css('border-top-right-radius', "30px"); 
//         }
//         if ($(window).width() <= 1045) {
//             $('li.showSingle p').css('font-size', "18px");

//         }
//         if ($(window).width() <= 900) { 
//                 $('li.showSingle p').css('font-size', "15px"); 
//                 $('li.showSingle').css('border-top-left-radius', "15px"); 
//                 $('li.showSingle').css('border-top-right-radius', "15px"); 
//         }
//         if ($(window).width() <= 700) { 
//             $('li.showSingle p').css('font-size', "13px"); 
//             $('li.showSingle').css('border-top-left-radius', "17px"); 
//             $('li.showSingle').css('border-top-right-radius', "17px"); 
//         }
//     }        
// )});
