$(function() {

// $("select.select2").select2({
//       dropdownPosition: 'below',
//       allowClear: true
//     });


// Password-hide

$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

// blog-filter-logic

  $('.btn-filter').click(function(){
    $('.filter-menu').toggleClass('d-none');
  });

// Generate-btn-animation

  $('.btn-loading').click(function(){
    $('.review').addClass('d-block');
  });

  // $('#generate_btn').click(function(){
  //   $('#generate').addClass('d-none');
  //   $('#regenerate').addClass('d-block');
  // });

// Mobile-menu-style-logic

  $(".navbar-toggler").on("click", function() {
    $("body").toggleClass("mobile");
  });

// Review-menu-logic

  $(".like-btn, .dislike-btn").on("click", function() {
    $(".like-menu").addClass("d-flex");
    $("#like-menu").addClass("d-block");
  });

  $(".close-menu").on("click", function() {
    $('.like-menu').removeClass('d-flex')
    $(".like-menu").addClass("d-none");
  });

 })

const button = document.querySelector('.btn-loading', '.btn-loading-2')
const buttonText = button.querySelector('span')

button.addEventListener('click', () => {
  button.classList.add('animation');
  button.disabled = true;
  buttonText.style.top = '-' + buttonText.offsetHeight + 'px'
  setTimeout(() => {
    button.classList.add('active')
  }, 600)
  
  setTimeout(() => {
    button.classList.remove('animation')
    button.disabled = false;
    button.querySelector('span').style.top = '0';
  }, 3000)
})