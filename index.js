

var textWrapper = document.querySelector('.about');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.about .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => {
        return 150 * (i + 1);
    }
  }).add({
    targets: '.about',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });