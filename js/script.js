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