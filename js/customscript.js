var typed = new Typed('.ketik', {
    strings: ["an IT student.", "an UI/X Designer." , " a Web Developer."],
    typeSpeed: 70,
    loop: true,
    backSpeed: 25,
    startDelay: 0, 
    showCursor: false
    
  
  });

jQuery(document).ready(function($){
  $('.button-burger').on('click',function(e){
    e.preventDefault();
  $('.menu-mb').addClass('open');
  });
  $('.close').on('click',function(e){
    e.preventDefault();
  $('.menu-mb').removeClass('open');

  });

   
});

jQuery(document).ready(function($){
    // Add smooth scrolling to all links
    $("a.menu, a.portfolio").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $("a.link-mb").on('click', function(event) {
      event.preventDefault();
      $('.menu-mb').removeClass('open');
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } //


    });


   
});

var offset_val = parseInt(900 * 30 / 100);


AOS.init({
  offset:offset_val




});

