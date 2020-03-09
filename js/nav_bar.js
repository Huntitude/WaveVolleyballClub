// Desktop Other Link hover effect open/close on mouse enter/leave
$(document).ready(function(){
    $('.nav_links_responsive').hide();
    $('.dropdown').mouseleave(function(){
        $('.dropdown-content').stop(false,true,false).fadeOut();
    })
    $('.dropbtn').mouseenter(function(){
        $('.dropdown-content').stop(false,true,false).slideDown();
    });

});

// Responsive Menu bar Close/Open 
const menuBtn = document.querySelector('.menu-btn');
var menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// Close Nav bar when pressed on a link 
$('ul.nav_links_responsive > li > a').on('click', function(){
    $('ul.nav_links_responsive').slideUp();
    $('.menu-btn').removeClass("open");
    menuOpen = false;
});


// Responsive Hide/Show Menu bar 
$(document).ready(function(){
    $('.nav_links_responsive').hide();
    $('.menu-btn').click(function(){
        $('.nav_links_responsive').stop(false,true,false).slideToggle(500);
    })
});
