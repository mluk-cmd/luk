const coin = document.getElementById("coin");
const coinInner = document.getElementById("coinInner");
const randomBtn = document.getElementById("randomBtn");
const result = document.getElementById("result");

let spins = 0;
let isFlipping = false;

function flipCoin() {
  if (isFlipping) return;
  isFlipping = true;

  const isHead = Math.random() < 0.5;
  spins += 1;
  const targetRotation = spins * 4 * 180 + (isHead ? 0 : 180);

  coinInner.style.transform = `rotateY(${targetRotation}deg)`;

  window.setTimeout(() => {
    result.textContent = isHead ? "Head" : "Tail";
    isFlipping = false;
  }, 1100);
}

coin.addEventListener("click", flipCoin);
randomBtn.addEventListener("click", flipCoin);
