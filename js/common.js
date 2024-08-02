$(function() {

// $("select.select2").select2({
//       dropdownPosition: 'below',
//       allowClear: true
//     });

$(function() {
  $( "#datepicker" ).datepicker({ firstDay: 1});
});

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

  $('.history-calendar').click(function(){
    $('.calendar').toggleClass('active');
  });

  $('.like-btn').click(function(){
    $(this).toggleClass('active');
  });
  $('.dislike-btn').click(function(){
    $(this).toggleClass('active');
  });


// generating process


  $('.btn-loading').click(function(){
    $('.generate-text-area').addClass('d-none');
    $('.generated-text-area').addClass('d-block');
    $('#generate').addClass('d-none');
    $('#regenerate').addClass('d-block');
    $('#generate_tab').addClass('d-none');
    $('#generate_tab-2').addClass('d-none');
    $('#generate_tab-3').addClass('d-none');
    $('#generate_tab-4').addClass('d-none');
    $('#generate_tab-5').addClass('d-none');
    $('#generated_tab').addClass('d-flex');
    $('#generated_tab-2').addClass('d-flex');
    $('#generated_tab-3').addClass('d-flex');
    $('#generated_tab-4').addClass('d-flex');
    $('#generated_tab-5').addClass('d-flex');
    $('.btn-new-gen').addClass('d-block');
    $('.btn-formal').removeClass('ml-auto');
    // $('.btn-formal').addClass('pl-2');
  });

  $('.btn-new-gen').click(function(){
    $('.generate-text-area').removeClass('d-none');
    $('.generated-text-area').removeClass('d-block');
    $('#generate_tab').removeClass('d-none');
    $('#generate_tab-2').removeClass('d-none');
    $('#generate_tab-3').removeClass('d-none');
    $('#generate_tab-4').removeClass('d-none');
    $('#generate_tab-5').removeClass('d-none');
    $('#generated_tab').removeClass('d-flex');
    $('#generated_tab-2').removeClass('d-flex');
    $('#generated_tab-3').removeClass('d-flex');
    $('#generated_tab-4').removeClass('d-flex');
    $('#generated_tab-5').removeClass('d-flex');
    $('#generate').removeClass('d-none');
    $('#regenerate').removeClass('d-block');

  });

// Mobile-menu-style-logic

  $(".navbar-toggler").on("click", function() {
    $("body").toggleClass("mobile");
  });

  // $(".dropdown-toggle-inside").on("click", function() {
  //   $(".dropdown-menu-inside").toggleClass("active");
  // });

// Review-menu-logic

  $(".like-btn, .dislike-btn").on("click", function() {
    $(".like-menu").addClass("d-flex");
    $("#like-menu").addClass("d-block");
  });

  $(".close-menu").on("click", function() {
    $('.like-menu').removeClass('d-flex')
    $(".like-menu").addClass("d-none");
  });




(function($, self){

if(!$ || !self) {
  return;
}

for(var i=0; i<self.properties.length; i++) {
  var property = self.properties[i],
    camelCased = StyleFix.camelCase(property),
    PrefixCamelCased = self.prefixProperty(property, true);
  
  $.cssProps[camelCased] = PrefixCamelCased;
}

})(window.jQuery, window.PrefixFree);



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


function myFunction() {
  // Get the text field
  var copyText = document.getElementById("exampleFormControlTextarea2");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}