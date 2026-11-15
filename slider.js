const slider = document.querySelector(".slider");

if (slider) {
  const track = slider.querySelector(".slides");
  const total = slider.querySelectorAll(".slide").length;
  const dotsBox = slider.querySelector(".dots");
  let index = 0;
  let timer;

  // Create one dot per slide
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", "Go to slide " + (i + 1));
    dot.addEventListener("click", () => { goTo(i); restart(); });
    dotsBox.appendChild(dot);
  }
  const dots = dotsBox.querySelectorAll("button");

  function goTo(i) {
    index = (i + total) % total; // loops around
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, n) => d.classList.toggle("active", n === index));
  }

  function start() { stop(); timer = setInterval(() => goTo(index + 1), 5000); }
  function stop() { clearInterval(timer); }
  function restart() { stop(); start(); }

  slider.querySelector(".prev").addEventListener("click", () => { goTo(index - 1); restart(); });
  slider.querySelector(".next").addEventListener("click", () => { goTo(index + 1); restart(); });

  // Pause while the mouse is over it or a button has focus
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);
  slider.addEventListener("focusin", stop);
  slider.addEventListener("focusout", start);

  goTo(0);
  start();
}
