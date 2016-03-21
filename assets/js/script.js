  
  
   
  jQuery(document).ready(function($) {  

    

  $(window).load(function(){
    //$('#preloader').fadeOut('slow',function(){$(this).remove();});
    
  });

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
  });
  $(document).click(function(event) {
      if (!$(event.target).is("#sidebar-wrapper, #menu-toggle, #menu-toggle .ion-navicon")) {
          $("#sidebar-wrapper").removeClass("active");
      }
  });
  $('.sidebar-nav li a').click(function(){
    $("#sidebar-wrapper").removeClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
  });

  // Scrolls to the selected menu item on the page
  
  });

  // wow

  //new WOW().init();

  // carousel
  function initOwl(){ 
    var owls = ['trending', 'jk', 'india', 'international'];
    $.each(owls, function(i, v){
      $("#" + v).owlCarousel({
        autoPlay: false,
        pagination: false,
        lazyLoad : true,
        items: 4,
        autoHeight: true,
        stopOnHover: true,
      });
      
      $("." + v + " .next").click(function(){
        $("#" + v).trigger('owl.next');
      })
      $("." + v + " .prev").click(function(){
        $("#" + v).trigger('owl.prev');
      })
      
    });
    }
    
    function initScripts() {
     $('.optin').validate({
      rules: {
          name: {
              minlength: 3,
              required: true
          },
          email: {
              required: true,
              email: true
          },
          number: {
              minlength: 10,
              required: true
          }
      },
      messages: {
          name: {
            required: "Please specify your name",
            minlength: "Must be atleast 3 characters"
          },
          number: {
            required: "Please type your phone number",
            minlength: "Must be atleast 9 digits"
          },
          email: {
            required: "Email address is required",
            email: "Invalid Email address"
          }
      },
      highlight: function (element) {
          $(element).closest('.control-group').removeClass('success').addClass('has-error');
      },
      success: function (element) {
          element.html('<i class="ion-checkmark"></i> Valid').addClass('valid')
              .closest('.control-group').removeClass('error').addClass('has-success');
      },
      submitHandler: function(form) {
      $.ajax({
        url: "http://mailthis.to/viku5star@gmail.com", 
        method: "GET",
        data: {
          _subject: "travask",
          Name: $("#name").val(),
          Phone: $("#number").val(),
          Email: $("#email").val(),
          Date: $("#dd").val()
        },
        dataType: "json",
        beforeSend: function() {
          $("#askButton").attr('disabled', 'disabled');
          $('.sending').removeClass('hidden');
        },complete: function(data) {
          if(data.status == 200){
            $("#askButton").removeAttr('disabled');
            $('.sending').addClass('hidden');
            $('.optin').html('<p><b>Thank you!</b> We have received your message and will get back to you asap.</p>');
          } else {
            $("#askButton").removeAttr('disabled');
            $('.sending').addClass('hidden');
            $('.optin').prepend('An error occured and we were unable to process the request. Please try again.<br><br>');
          }
        },
        fail: function(data) {
          $("#askButton").removeAttr('disabled');
          $('.sending').addClass('hidden');
          $('.optin').prepend('An error occured and we were unable to process the request. Please try again.<br><br>')
        }
      });
      }
  });
     $('.dpker').datepicker({
       autoclose: true,
       format: "dd/MM/yyyy"
    });
   }

  $(document).ready(function() {
    
    $('.quotes').quovolver({
      autoPlaySpeed : 5000
    });

   
  });

  // Set Header Background

  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 20) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
