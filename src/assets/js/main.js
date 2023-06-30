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

  console.log("hoi");