// ----- Google Maps -------
function initMap() {
        var lawn = {lat: -27.477400, lng: 153.029349};
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 15,
          center: lawn,
          scrollwheel:  false,
          disableDefaultUI: true,
          styles: [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}]
        });
        
        var contentString = '<p class="maps-info"><b>QUT Gardens Point</b></p>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: lawn,
          map: map,
          icon: './files/img/qut_eb_pin.png',
          title: 'QUT Gardens Point'
        });

        infowindow.open(map, marker);

}


// ------ Scroll ------
// Enables the click and scroll functionality
$(document).ready(function (){
    $("#go-home").click(function (){
        $("#banner").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-home2").click(function (){
        $("#banner").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-home3").click(function (){
        $("#banner").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-home4").click(function (){
        $("#banner").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-about").click(function (){
        $("#about").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-membership").click(function (){
        $("#membership").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-membership2").click(function (){
        $("#membership").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-membership3").click(function (){
        $("#membership").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-events").click(function (){
        $("#events").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-events2").click(function (){
        $("#events").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-contact").click(function (){
        $("#contact").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-executives").click(function (){
        $("#executives2").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-contact").click(function (){
        $("#contact2").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-top").click(function (){
        $("#banner").velocity("scroll", { 
            duration: 1000,
        });
    });
    // ----  Popover settings  -----
    $('a.session-box').click(function(e){
        // Prevents scrolling to the top of the page when clicking a tag with href="#"
        e.preventDefault();
    });
    //Enables popover when rel="popover"
    $("[rel='tooltip']").tooltip();
});


//collapse the navbar upon selection from hamburger menu
$(document).on('click','.navbar-collapse.in',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	    $(this).collapse('hide');
	}
});

//Script to fade out the banner when scrolled past
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = ($(window).height() / 2); //1.7 previous
    $('.top').css({
        'opacity': ((height - scrollTop) / (height))
    });
    $('.bottom').css({
        'opacity': ((height - scrollTop) / (height))
    });
    // $('.jarallax-container-1').css({
    //     'z-index': 'unset !important'
    // });
    //  $('.jarallax').css({
    //     'z-index': 'unset !important'
    // });
    $('.jarallax').removeAttr( 'style' );
    document.getElementById('jarallax-container-0').style.zIndex="unset";
    document.getElementById('jarallax-container-1').style.zIndex="unset";
    document.getElementById('jarallax-container-2').style.zIndex="unset";
    // $('.card-img').removeAttr( 'style' )
});



$(window).scroll(function() {
  //Detect browser and disable fixed backgrounds if on Safari or IE/Edge
    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_edge_or_ie;    
    
    var ua = window.navigator.userAgent;
    var trident = ua.indexOf('Trident/');
    var edge = ua.indexOf('Edge/');
    if (trident > 0 || edge > 0) {
      is_edge_or_ie = true;
    }
    if ((is_chrome)&&(is_safari)) {
      is_safari=false;
    }
    if(is_safari || is_edge_or_ie){
      $('html').addClass('touch');
    }
    else{
      $('html').removeClass('touch');
    }
    if ($(this).scrollTop() > 50) {                 
      $('.navbar-default').addClass('smaller');
      $('.navbar-default').addClass('solid');

    } else {
      $('.navbar-default').removeClass('smaller');
      $('.navbar-default').removeClass('solid');
    } 
});

$('.jarallax').jarallax({
    speed: 0.2
});

$(document).ready(function () {
    $('.banner.hidden').fadeIn(100).removeClass('hidden');
    if ($(window).width() < 479) {                 
        $('#map-canvas').css("height", $('.fourth-block').height());
        $('.fifth-block').css("height", $('.fourth-block').height() + 80);
        $('.spacer-block').css("height", $('.fourth-block').height() + 80);
    }
    else {
        $('#map-canvas').css("height", $('.fourth-block').height());
        $('.fifth-block').css("height", $('.fourth-block').height() + 50);
        $('.spacer-block').css("height", $('.fourth-block').height() + 50);
    }
    if ($(this).scrollTop() < 2000) { 
      $(".fifth-block" ).css( "z-index", -2);
      $(".fix" ).css( "z-index", -1);
    } else {
      $(".fifth-block" ).css( "z-index", -1);
      $(".fix" ).css( "z-index", -2);
    }

});

$(window).resize(function () {
    if ($(window).width() < 479) {                 
        $('#map-canvas').css("height", $('.fourth-block').height());
        $('.fifth-block').css("height", $('.fourth-block').height() + 80);
        $('.spacer-block').css("height", $('.fourth-block').height() + 80);
    }
    else {
        $('#map-canvas').css("height", $('.fourth-block').height());
        $('.fifth-block').css("height", $('.fourth-block').height() + 50);
        $('.spacer-block').css("height", $('.fourth-block').height() + 50);
    }
});

$('.center').slick({
  // centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: false
  autoplay: true,
  autoplaySpeed: 1500
});


Pace.options.elements.selectors = ["video"];
Pace.restart();
Pace.on("done", function(){
    $('.loading').fadeOut(200);   
    // Make sure that the header animation doesn't start until page load finishes
});

// Show the map in fixed position once scrolled past 2000px
$( window ).scroll(function() {
  // If user didn't scroll 2000px set default z-index
  if ($(this).scrollTop() < 2000) { 
      $(".fifth-block" ).css( "z-index", -2);
      $(".fix" ).css( "z-index", -1);
  } else {
      $(".fifth-block" ).css( "z-index", -1);
      $(".fix" ).css( "z-index", -2);
  }
});