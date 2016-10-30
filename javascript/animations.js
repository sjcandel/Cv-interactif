/* ******************************************************************** */
/* mentions légales */
/* ******************************************************************** */
$(document).ready(function() {
  var blockState = "closed";

  $('#mentions-btn').click(function() {
    if (blockState=="closed"){
      $('#mentions-hidden').slideDown();
      blockState = "open";
      }
    else {
      $('#mentions-hidden').slideUp();
      blockState = "closed";
      }
  })
}); 

/* ******************************************************************** */
/* portfolio animation des éléments lors du clic */
/* ******************************************************************** */

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});



/* ******************************************************************** */
/* smooth scroll */
/* ******************************************************************** */

$(function () {
    var filterList = {
        init: function () {
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp(
                selectors: {
                    target: '.portfolio'
                    , filter: '.filter'
                }
                , load: {
                    filter: '.web'
                }
            });
        }
    };
    // Run the show!
    filterList.init();
});



/* ******************************************************************** */
/* toggle */
/* ******************************************************************** */

$(document).ready(function(){
    $(".toggleParcours").click(function(){
        $(".parcoursContenuExp").toggle();
        $( ".parcoursHover" ).animate({
        width: "10%",
        marginRight: "-90%",
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
  }, 1500 );
        
    });
});



$(document).ready(function(){
    $(".toggleCompetences").click(function(){
        $(".competencesContenu").toggle();
    });
});