// stiky  navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});

// models
function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden')
}

// slider
const config = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 32,
    breakpoints: {
      1280: {
        perView: 3,
      },
      1024: {
        perView: 2,
      },
      768: {
        perView: 1,
      }
    }
  }
  new Glide('.glide', config).mount()

  // lider 2
  const config2 = {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    gap: 32,
    breakpoints: {
      1280: {
        perView: 3,
      },
      1024: {
        perView: 2,
      },
      768: {
        perView: 1,
      }
    }
  }
  new Glide('.glide2', config2).mount()


  /* YOU DONT NEED THESE, these are just for the popup you see */
function closeTreactPopup(){ 
  document.querySelector(".treact-popup").classList.add("hidden");
}
function openTreactPopup(){ 
  document.querySelector(".treact-popup").classList.remove("hidden");
}
document.querySelector(".close-treact-popup").addEventListener("click", closeTreactPopup);
setTimeout(openTreactPopup, 3000)

// fq

$('.question-and-answer').click(function() {
  $(this).find(".answer").toggleClass("hidden")
  $(this).find(".question-chevron").toggleClass("hidden")
})


//  //Get the button
 let mybutton = document.getElementById("btn-back-to-top");
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
   scrollFunction();
 };
 function scrollFunction() {
   if (
     document.body.scrollTop > 20 ||
     document.documentElement.scrollTop > 20
   ) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 // When the user clicks on the button, scroll to the top of the document
 mybutton.addEventListener("click", backToTop);
 function backToTop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }