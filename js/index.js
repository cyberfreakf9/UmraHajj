const hajjEl = document.getElementById('hajj')
const iconhajjEl = document.getElementById('icon-hajj')
const iconvisa = document.getElementById('icon-visa')
const iconumrah = document.getElementById('icon-umrah')
const ulEl = document.getElementById('icons')
const subHajjEl = document.getElementById('hajj-sub')
const umrahsubEl = document.getElementById('umrah-sub')
const visasubEl = document.getElementById('visa-sub')
let isdown = true

function caretHandler() {
  ulEl.addEventListener('click', (e) => {
    const target = e.target
    const list = e.target.getAttribute('id')
    if (target.matches('li')) {
      const list = e.target.getAttribute('id')
      if (list != null) {
        const id = document.getElementById(list)
        // id.style.rotate = '360deg'
        if (id.id == 'visa') {
          if (isdown) {
            iconvisa.style.color = 'orange'
            iconvisa.style.rotate = '180deg'
            isdown = false
          }
          // console.log(id.id)
        }
      }
    }
  })
}
ulEl.addEventListener('click', (e) => {
  const target = e.target
  if (target.matches('li')) {
    const list = e.target.getAttribute('id')
    if (list != null) {
      const id = document.getElementById(list)
      // id.style.rotate = '360deg'
      if (id.id == 'visa') {
        if (isdown) {
          visasubEl.style.display = 'block'
          iconvisa.style.color = 'orange'
          iconvisa.style.rotate = '180deg'
          isdown = false
        } else {
          visasubEl.style.display = 'none'
          iconvisa.style.color = 'white'
          iconvisa.style.rotate = '360deg'
          isdown = true
        }
        // console.log(id.id)
      } else if (id.id == 'umrah') {
        iconumrah.style.color = 'orange'
        if (isdown) {
          umrahsubEl.style.display = 'block'
          iconumrah.style.color = 'orange'
          iconumrah.style.rotate = '180deg'
          isdown = false
        } else {
          umrahsubEl.style.display = 'none'
          iconumrah.style.color = 'white'
          iconumrah.style.rotate = '360deg'
          isdown = true
        }
      }
    }
  }
})
///////////////////////////////////////////

function ChevronHandler() {
  var lis = document.getElementById('icons').getElementsByTagName('li')
  for (let i = 0; i < lis.length; i++) {
    const idis = lis[i].id
    const liEl = document.getElementById('idis')
    console.log(idis[2])
  }
}
hajjEl.addEventListener('mouseover', () => {
  subHajjEl.style.display = 'block'
  if (isdown) {
    iconhajjEl.style.rotate = '180deg'
    isdown = 'false'
  } else {
    iconhajjEl.style.rotate = '90deg'
    isdown = true
  }
})
hajjEl.addEventListener('mouseleave', () => {
  if (isdown) {
    iconhajjEl.style.rotate = '360deg'
    isdown = 'false'
  } else {
    iconhajjEl.style.rotate = '180deg'
    isdown = true
  }
})
subHajjEl.addEventListener('mouseleave', () => {
  subHajjEl.style.display = 'none'
})
umrahsubEl.addEventListener('mouseleave', () => {
  umrahsubEl.style.display = 'none'
  iconumrah.style.color = 'white'
  iconumrah.style.rotate = '360deg'
  isdown = true
})
visasubEl.addEventListener('mouseleave', () => {
  visasubEl.style.display = 'none'
  iconvisa.style.color = 'white'
  iconvisa.style.rotate = '360deg'
  isdown = true
})
// Slick Code
mySlides()
function mySlides() {
  $(document).ready(function () {
    $('.slick-slides').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      autoplay: true,
      speed: 500,
      dots: true,
      prevArrow:
        '<div class="slick-left"><span class="fa fa-angle-left fa-2xl"></span><span class="sr-only">Prev</span></div>',

      nextArrow:
        '<div class="slick-right"><span class="fa fa-angle-right fa-2xl"></span><span class="sr-only">Next</span></div>',
    })
  })
}
LondonSlides()
function LondonSlides() {
  $(document).ready(function () {
    $('.london-slick').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      autoplay: true,
      speed: 500,
      dots: true,
      prevArrow:
        '<div class="slick-left"><span style="color:orange;padding:14px 14px;border-radius:100%;background-color:black" class="fa fa-angle-left fa-2xl"></span><span class="sr-only">Prev</span></div>',

      nextArrow:
        '<div class="slick-right"><span style="color:orange;padding:14px 14px;border-radius:100%;background-color:black" class="fa fa-angle-right fa-2xl"></span><span class="sr-only">Next</span></div>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    })
  })
}
