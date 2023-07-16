document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  if(!this.classList.contains('is-open')) {
      this.classList.add('is-open');
  } else {
      this.classList.remove('is-open');
  }
});

document.querySelector('.hamburger').addEventListener('click', function() {
  this.classList.toggle('is-open');
  document.querySelector('nav').classList.toggle('is-open');
});

// document.querySelector(".dropdown-toggle").addEventListener('click', function (event) {
//   event.stopPropagation();
//   document.getElementById("dropdownMenu").classList.toggle("show");
// });

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-toggle')) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}


// document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
//   this.parentNode.classList.toggle('is-open');
// });


console.log('check dit');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    speed: '700',
    autoplay: {
      delay: 4000, // Delay between transitions in milliseconds (2 seconds)
      disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },
  });

  