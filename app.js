jQuery(document).ready(function(){

    jQuery(".hide").click(function(){

         jQuery(".box").hide(1000);
    });

    jQuery(".show").click(function(){

        jQuery(".box").show(1000);
    });

    jQuery(".toggle").click(function(){

       jQuery(".box").toggle(1000);
    });
  
  });