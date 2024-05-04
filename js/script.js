function toggleLogin(userType) {
  if (userType === 'customer') {
      document.getElementById('customer-form').classList.add('active-customer');
      document.getElementById('staff-form').classList.remove('active-staff');
  } else if (userType === 'staff') {
      document.getElementById('customer-form').classList.remove('active-customer');
      document.getElementById('staff-form').classList.add('active-staff');
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const sliderNavLinks = document.querySelectorAll('.slider-nav a');

  function changeSlide(slideIndex) {
      const targetSlide = document.getElementById(`slide-${slideIndex}`);
      slider.scroll({
          left: targetSlide.offsetLeft,
          behavior: 'smooth'
      });
  }

  sliderNavLinks.forEach((link, index) => {
      link.addEventListener('click', function (event) {
          event.preventDefault(); // Prevents the default behavior of anchor links
          changeSlide(index + 1); // Index is zero-based, so we add 1
      });
  });

  slider.addEventListener('scroll', function () {
      const currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
      sliderNavLinks.forEach((link, index) => {
          if (index === currentIndex) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  });
});




function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}




// To Validate Hope Page Contact Form
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
      alert('All fields must be filled out');
      return false;
  }

  // You can add more complex email validation if needed

  alert('Form submitted successfully!');
  return true;
}



// Product Sidebar Menu
(function ($) {
  $(document).ready(function () {
      $('#leftmenu li.has-sub>a').on('click', function () {
          $(this).removeAttr('href');
          var element = $(this).parent('li');
          if (element.hasClass('open')) {
              element.removeClass('open');
              element.find('li').removeClass('open');
              element.find('ul').slideUp();
          }
          else {
              element.addClass('open');
              element.children('ul').slideDown();
              element.siblings('li').children('ul').slideUp();
              element.siblings('li').removeClass('open');
              element.siblings('li').find('li').removeClass('open');
              element.siblings('li').find('ul').slideUp();
          }
      });

      $('#leftmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
  });
})(jQuery);



// Product Details

function addToCart() {
    alert('Product added to cart!');
    const anchorTag = document.getElementById('myAnchor');
    anchorTag.style.display = (anchorTag.style.display === 'none') ? 'inline-block' : 'none';
}


// FAQ

function toggleAnswer(element) {
    const answer = element.querySelector('.answer');

    if (answer) {
        answer.classList.toggle('active');
    }
}

