jQuery(document).ready(function(){

    jQuery("#hide").click(function(){

         jQuery(".box").hide(4000);
    });

    jQuery("#show").click(function(){

        jQuery(".box").show(4000);
    });

    jQuery("#toggle").click(function(){

       jQuery(".box").toggle(1000);
    });

    $("#fadein").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
      });

      $("#fadeout").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
      });

      $("#buttontoggle").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
      });

      jQuery("#startanimate").click(function() {

           jQuery("#animate").animate({color:"white"});
        });




        // stop function 

        $(document).ready(function(){
            $("#flip").click(function(){
              $("#panel").slideDown(5000);
            });
            $("#stop").click(function(){
              $("#panel").stop();
            });
          });

          jQuery('#getvalue').click(function(){


            alert( jQuery('#par').text());
          });

          jQuery("#chaining").click(function(){

            jQuery("#chainingvalue").css("color","red").slideUp(1000).slideDown(1000);
          });

          jQuery("#get").click(function(){
           var x= jQuery("#getset").text();
           jQuery("#getvalue1").text(x);

          });

          jQuery("#classapply").click(function(){
           
            jQuery(".cssclass").addClass("fixed");

          });
  
  });