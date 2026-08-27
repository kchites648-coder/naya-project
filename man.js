const welcomeScreen = document.getElementById("welcome-screen");
const yesBtn = document.getElementById("yes");

const balloonScreen = document.getElementById("balloon-screen");
const nextToCandle = document.getElementById("next-to-candle");
let poppedCount = 0;

const candleScreen = document.getElementById("candle-screen");
const cakeImg = document.getElementById("cake-img");

const wishScreen = document.getElementById("wish-screen");

const photoScreen = document.getElementById("photo-screen");
const nextToLetter = document.getElementById("next-to-letter");

const letterScreen = document.getElementById("letter-screen");
const envelopeBox = document.getElementById("envelope-box");
const letterContent = document.getElementById("letter-content");

yesBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  balloonScreen.style.display = "block";
});

for (let i = 1; i <= 4; i++) {
  const balImg = document.getElementById(`bal-${i}`);
  const balText = document.getElementById(`t${i}`);
  
  balImg.addEventListener("click", () => {
    balImg.style.display = "none";
    balText.style.display = "block";
    poppedCount++;
    
    if (poppedCount === 4) {
      nextToCandle.style.display = "inline-block";
    }
  });
}

nextToCandle.addEventListener("click", () => {
  balloonScreen.style.display = "none";
  candleScreen.style.display = "block";
});

cakeImg.addEventListener("click", () => {
  candleScreen.style.display = "none";
  wishScreen.style.display = "flex"; 
  
  setTimeout(() => {
    wishScreen.style.display = "none";
    photoScreen.style.display = "block";
  }, 3000); 
});

nextToLetter.addEventListener("click", () => {
  photoScreen.style.display = "none";
  letterScreen.style.display = "block";
});

envelopeBox.addEventListener("click", () => {
  envelopeBox.style.display = "none";
  letterContent.style.display = "block";
});
