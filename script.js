// TYPING EFFECT
const text = "Cyber Security Researcher | Digital Forensics Enthusiast";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// SCROLL ANIMATION
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// DARK MODE TOGGLE
const toggle = document.getElementById("toggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
};
