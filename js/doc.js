var typed3 = new Typed('.typed', {
    strings: ['Designer', 'Developer', 'Freelancer' , 'Photographer'],
    typeSpeed: 30,
    backSpeed: 50,
    smartBackspace: true, // this is a default
    loop: true
});


var scrollBtn = document.querySelector(".totop");

window.onscroll=function(){
  if(document.body.scrollTop>100){
    scrollBtn.style.display="block"
  }
  else{
    scrollBtn.style.display="none"
  }
}

scrollBtn.onclick=function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}

new PureCounter();

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  pagination: {
    el: ".swiper-pagination",
  },
});

$(document).ready(function(){
  $(".nav-btn").click(function(){
    $(".mobile").slideToggle();
  });
});