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
