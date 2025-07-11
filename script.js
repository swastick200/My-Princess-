let currentStep = 1;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const extraMsg = document.getElementById("extraMsg");
const loveSection = document.getElementById("loveSection");
const slider = document.getElementById("loveSlider");
const heart = document.getElementById("heart");
const secretMsg = document.getElementById("secretMsg");

yesBtn.addEventListener("click", () => {
  if (currentStep === 1) {
    question.textContent = "Do you want me to stay in your life forever?";
    currentStep++;
  } else if (currentStep === 2) {
    question.textContent = "Do you love me?";
    currentStep++;
  } else {
    document.querySelector(".container").classList.add("hidden");
    loveSection.classList.remove("hidden");
  }
  extraMsg.classList.add("hidden");
  noBtn.style.position = "static";
});

noBtn.addEventListener("mouseover", () => {
  extraMsg.classList.remove("hidden");
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 70 + "%";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.transition = "top 0.3s, left 0.3s";
  noBtn.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
});

slider.addEventListener("input", () => {
  const value = parseInt(slider.value);
  document.getElementById("loveValue").textContent = `${value} / 100`;

  if (value < 70) {
    heart.textContent = "🖤";
    heart.classList.remove("glow-heart");
    secretMsg.classList.add("hidden");
    document.querySelector(".shayari").classList.add("hidden");
  } else if (value < 100) {
    heart.textContent = "❤️";
    heart.classList.remove("glow-heart");
    secretMsg.classList.add("hidden");
    document.querySelector(".shayari").classList.add("hidden");
  } else {
    heart.textContent = "💖✨";
    heart.classList.add("glow-heart");
    secretMsg.classList.remove("hidden");
    document.querySelector(".shayari").classList.remove("hidden");
    triggerHeartRain();
  }
});

function triggerHeartRain() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-fall");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heart.textContent = "❤️‍🔥";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  loveSection.classList.add("hidden");
  secretMsg.classList.add("hidden");
  heart.textContent = "🖤";
  heart.classList.remove("glow-heart");
});