$(document).ready(function () {
    var vid = document.getElementById("video-background");
    var pauseButton = document.querySelector(".sec-lvl-1");

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
        vid.removeAttribute("autoplay");
        vid.pause();
        //pauseButton.innerHTML = "Paused";
         $('.abs-play').css({
            display: 'block'
        }); 
    }

    function vidFade() {
      vid.classList.add("stopfade");
    }

    vid.addEventListener('ended', function()
    {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
    }); 


    pauseButton.addEventListener("click", function() {
      vid.classList.toggle("stopfade");
      if (vid.paused) {
        vid.play();
        //pauseButton.innerHTML = "Pause";
        $('.abs-play').css({
            display: 'none'
        });  
          
      } else {
        vid.pause();
        //pauseButton.innerHTML = "Paused";
          $('.abs-play').css({
            display: 'block'
        });  
      }
    })

    
    
    
    $('.slider-wrapp').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
        arrows:false
    });

    
    
});
