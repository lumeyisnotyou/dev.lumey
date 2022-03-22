// Wrap every letter in a span
var textWrapper = document.querySelector('.lumeytext');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
 var myElements = document.getElementsByClassName("letter");
  for(var i = 0; i < myElements.length; i++){
  var randomIntA = getRandomInt(-500,500);
  var randomIntB = getRandomInt(-500,500);


  anime.timeline({loop: false})
  .add({
    targets: myElements[i],
    translateX: [randomIntA,randomIntA,0],
    translateY: [randomIntB,randomIntB,0],
    scale: [2,2,1],
    translateZ: 1,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 500 + 300 * i
  })
  }
setTimeout(() => {
 anime.timeline({loop: false})
 .add({
  targets: '.lumeytextdiv',
    right: '37%',
    top: '45%',
    scaleX: [1, 2],
    scaleY: [1, 2],
    opacity: [1,0.25],
    translateZ: 0.5,
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
  }).add({

     targets: '.header2',
    translateY: [40,0],
    translateZ: 1,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({

     targets: '.othertext2',
    translateY: [40,0],
    translateZ: 1,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
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
 }, 2000);

