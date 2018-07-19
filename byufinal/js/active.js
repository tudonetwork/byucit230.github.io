/*

    Template Name: DotBike - Bicycle 
    Template URI: ------------------
    Description: This is E-commerce Html Template 
    Author: Dot_themes
    Author URI: http://dotthemes.com/
    Version: 1.0
*/
/*===================================
    js INDEX
=====================================
	01. jQuery MeanMenu
    02. Active hover function
    03. stickey menu
    04. wow js active
    05. scrollUp jquery active
    06. Preloader
    07. MatchHeight activation
    08. Nivo slider activation
    09. Carousel slider
    11. price-slider active
    12. zoom 
    
======================================*/

(function($) {
    "use strict";
   /*-------------------------------------------
    	01. jQuery MeanMenu
    --------------------------------------------- */
    jQuery('nav#dropdown').meanmenu();

    
    /*---------------------------
        02. Active hover function
    ----------------------------*/
        $('.currency li, .language li, .meni-cart').on("mouseenter", function() {
            $(this).find(".currency-menu, .language-menu, .cart-area").stop(true).slideDown();
        });
        $('.currency li, .language li, .meni-cart').on("mouseleave", function() {
            $(this).find(".currency-menu, .language-menu, .cart-area").stop(true).slideUp();
        });
    
	/*----------------------------
       03. stickey menu
    ----------------------------*/
    $(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 265) {
		$(".sticky-header").removeClass("sticky");
	   }else{
		$(".sticky-header").addClass("sticky");
	   }
	});
    
   /*------------------
    	04. wow js active
    ---------------- */
    new WOW().init();
   /*------------
    	05. scrollUp jquery active
    ------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*---------
	    06. Preloader
	------------------------*/
		/*$(window).on('load', function() {
			$(".preloader").fadeOut("slow");;
		});
        */
    /*----------------------
		07. MatchHeight activation
	----------------------*/
    $('.single-product').matchHeight();
    
    /*----------------------
		08. Nivo slider activation
	----------------------*/
   $('#mainSlider').nivoSlider({
        directionNav: false,
        controlNavThumbs: false,
        animSpeed: 1000,
        slices: 10,
        pauseTime: 5000,
        pauseOnHover: true,
        controlNav: true,
        manualAdvance: false,
        prevText: 'p', 
        nextText: 'n'
    });    
    
    /*--------------------------
      09. Carousel slider
    ---------------------------- */	
    $(".brand-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 5,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [991,4],
	  itemsTablet: [768,3],
	  itemsMobile : [479,1]
    });
    $(".banner-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 2,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,2],
	  itemsDesktopSmall : [991,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1]
    });
    $(".accessories-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 3,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [991,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1]
    });
    $(".single-product-page-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation: true,	  
      items : 1,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [991,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1]
    });
    $(".s-tab-zoom").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation: false,	  
      items : 4,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [991,3],
	  itemsTablet: [768,3],
	  itemsMobile : [479,2]
    });

    $(".accordion-active").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});	
    $(".another-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});	
    
    
    /*----------------------------
      10. cart-plus-minus-button
    ------------------------------ */
    $(".cart-plus-minus")
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    /*----------------------------
      11. price-slider active
    -----------------------------*/  
    $( "#price-slider" ).slider({
       range: true,
       min: 0,
       max: 1169,
       values: [ 200, 969 ],
       slide: function( event, ui ) {
        $( "#min-price" ).val('$' + ui.values[ 0 ] );
        $( "#max-price" ).val('$' + ui.values[ 1 ] );
       }
      });
      $( "#min-price" ).val('$' + $( "#price-slider" ).slider( "values", 0 ));   
      $( "#max-price" ).val('$' + $( "#price-slider" ).slider( "values", 1 )); 
    
    
    /*-------------------------------------------
	elevateZoom
	-------------------------------------------- */	
	$("#zoom1").elevateZoom({
		gallery:'gallery_01', 
		cursor: 'crosshair', 
		galleryActiveClass: "active", 
		imageCrossfade: true
	});
    
    /*--------------------
       11. You tube video active
    -------------------------*/
    $(".youtube-bg").YTPlayer({
        videoURL:"https://www.youtube.com/watch?v=sZE8tJnTHhw",
        containment:'.youtube-bg',
        mute:true,
        loop:true,
        showControls: true
        
    });
    
    
   
    
    
    
    
    
    
    

})(jQuery);

