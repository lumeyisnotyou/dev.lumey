// Wrap every letter in a span
var textWrapper = document.querySelector('.lumeytext');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({loop: false})
  .add({
    targets: '.lumeytext .letter',
    translateX: [40,0],
    translateY: [30,0],
    translateZ: 1,
    opacity: [0,1],
    color: ['rgb(255,255,255)','rgb(255,255,255)','rgb(194, 235, 255)'],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
  targets: '.lumeytextdiv',
    right: '40%',
    top: '-40%',
    scaleX: [1, 0.3],
    scaleY: [1, 0.3],
    translateZ: 1,
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({

     targets: '.header',
    translateY: [40,0],
    translateZ: 1,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({

     targets: '.othertext',
    translateY: [40,0],
    translateZ: 1,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
   targets: '.menuitemlink',
    translateX: [40,0],
    translateZ: 1,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 500 + 30 * i
  })

  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
  anime.timeline({loop: false})
  .add({

     targets: '.footer',
    translateY: [40,0],
    translateZ: 1,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  })
    .add({

     targets: '.footer',
    translateY: [0,40],
    translateZ: 1,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  })

  }
