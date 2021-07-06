let mouseCursor = document.querySelector(".cursor")
let navLinks = document.querySelectorAll(".menuitemlink")

window.addEventListener('mousemove',cursor)
function cursor(e){
 mouseCursor.style.top = e.pageY + 'px';
 mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
  anime.timeline({loop: false})
  .add({
    targets: '.cursor',
    scale: "2",
    translateZ: 1,
    easing: "easeInOutQuad",
    duration: 200,
    transformOrigin: "100% 100% 0",
  })
  })
  link.addEventListener('mouseleave', () => {
  anime.timeline({loop: false})
  .add({
    targets: '.cursor',
    transform: "translate(-50%, -50%)",
    scale: "1",
    translateZ: 1,
    easing: "easeInOutQuad",
    duration: 200,
    transformOrigin: "100% 100% 0",
  })
  })
});
