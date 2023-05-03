const mySwiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination'
  },
})

const cardSwiper_1 = new Swiper('.cardSwiper_1', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.cardSwiper_1-pagination',
  }
})

new Swiper('.cardSwiper_2', {
  observer: true,
  loop: true,
  autoplay: false,
  pagination: {
    el: '.cardSwiper_2-pagination',
  }
})

new Swiper('.showroomSwiper', {
  observer: true,
  loop: true,
  autoplay: false,
  pagination: {
    el: '.showroomSwiper-pagination',
  },
  effect: 'coverflow',
  slidesPerView: 3,
  centeredSlides: true,
  coverflowEffect: {
    slideShadows : false
  },
})



$(document).ready(function(){
  $('.mobile-handle').toggle(function(){
    $('.mobile-nav').slideDown(200)
    $('.mobile-handle img:nth-of-type(1)').css({ 'display': 'none' })
    $('.mobile-handle img:nth-of-type(2)').css({ 'display': 'block' })
  }, function(){
    $('.mobile-nav').slideUp(200)
    $('.mobile-handle img:nth-of-type(1)').css({ 'display': 'block' })
    $('.mobile-handle img:nth-of-type(2)').css({ 'display': 'none' })
  })
})

