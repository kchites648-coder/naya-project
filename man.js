// ====== SCREENS ======
const welcomeScreen = document.getElementById("welcome-screen");
const balloonScreen = document.getElementById("balloon-screen");
const cakeScreen = document.getElementById("cake-screen");
const photoScreen = document.getElementById("photo-screen");
const letterScreen = document.getElementById("letter-screen");
const feedbackScreen = document.getElementById("feedback-screen");

// ====== BUTTONS & ELEMENTS ======
const yesBtn = document.getElementById("yes");
const nextToCandleBtn = document.getElementById("next-to-candle");
const blowBtn = document.getElementById("blow-btn");
const makeWishBtn = document.getElementById("make-wish-btn");
const flameImg = document.getElementById("flame-img");
const wishText = document.getElementById("wish-text");

const photo1 = document.getElementById("photo-1");
const photo2 = document.getElementById("photo-2");
const photo3 = document.getElementById("photo-3");

const envelopeBox = document.getElementById("envelope-box");
const letterContent = document.getElementById("letter-content");
const nextToFeedbackBtn = document.getElementById("next-to-feedback");

// 1. Welcome -> Balloons
yesBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  balloonScreen.style.display = "flex";
});

// 2. Balloons
let poppedCount = 0;
for (let i = 1; i <= 4; i++) {
  const balImg = document.getElementById(`bal-${i}`);
  const balText = document.getElementById(`t${i}`);
  if(balImg) {
    balImg.addEventListener("click", () => {
      balImg.style.display = "none";
      balText.style.display = "block";
      poppedCount++;
      if (poppedCount === 4) {
        nextToCandleBtn.style.display = "block";
      }
    });
  }
}

// 3. Balloons -> Cake
nextToCandleBtn.addEventListener("click", () => {
  balloonScreen.style.display = "none";
  cakeScreen.style.display = "flex";
});

// 4. Candle Bujhana (Error-Free Safe Code)
blowBtn.addEventListener("click", () => {
  // Pehle check karega ki flame hai ya nahi, phir gayab karega (crash nahi hoga)
  const f1 = document.getElementById("flame-1");
  const f2 = document.getElementById("flame-2");
  
  if (f1) f1.style.display = "none";
  if (f2) f2.style.display = "none"; 
  
  // Ab definitely aage badhega aur text dikhayega
  blowBtn.style.display = "none"; 
  if (wishText) wishText.style.display = "block"; 
  if (makeWishBtn) makeWishBtn.style.display = "block"; 
});

// 5. Cake -> Photos 
makeWishBtn.addEventListener("click", () => {
  cakeScreen.style.display = "none";
  photoScreen.style.display = "flex";

  setTimeout(() => { if(photo1) photo1.style.display = "none"; }, 3000);
  setTimeout(() => { if(photo2) photo2.style.display = "none"; }, 6000);
  setTimeout(() => {
    photoScreen.style.display = "none";
    letterScreen.style.display = "flex";
  }, 9000);
});

// ==========================================
// 6. ENVELOPE KHOLNA AUR LETTER TYPING
// ==========================================
const typingText = document.getElementById("typing-text");
const letterLines = [
  "Dear Sister,\n",
  "Happy Birthday! Hum dono ka birthday ek hi din hona kisi jadoo se kam nahi hai. Tu meri sabse achi dost aur behen dono hai.\n",
  "Aur haan, ek aur baat... yeh poori website maine khud apne hathon se code ki hai! Ek ek line khud likhi hai tere liye! 😎\n",
  "Waise toh tu aajkal itni busy rehti hai ki mujhe message tak nahi karti... Par phir bhi dekh, tere bhai ne tere liye itni mehnat ki hai. Ab thodi baat kar liya kar kanjoos! ❤️\n",
  "\n\n- Tera Coder Bhai"
];

envelopeBox.addEventListener("click", () => {
  envelopeBox.classList.add("envelope-open-anim");
  
  setTimeout(() => {
    envelopeBox.style.display = "none"; 
    letterContent.style.display = "block"; 
    
    typingText.textContent = ""; 
    let currentLineIndex = 0;
    let currentCharIndex = 0;

    function typeWriter() {
      if (currentLineIndex < letterLines.length) {
        let currentLine = letterLines[currentLineIndex];
        if (currentCharIndex < currentLine.length) {
          typingText.textContent += currentLine.charAt(currentCharIndex);
          currentCharIndex++;
          setTimeout(typeWriter, 40); 
        } else {
          currentLineIndex++;
          currentCharIndex = 0;
          setTimeout(typeWriter, 300); 
        }
      } else {
        setTimeout(() => {
          nextToFeedbackBtn.style.display = "block";
        }, 1000);
      }
    }
    setTimeout(typeWriter, 200); 
  }, 1000);
});

// 7. Letter -> Feedback Screen
nextToFeedbackBtn.addEventListener("click", () => {
  letterScreen.style.display = "none";
  feedbackScreen.style.display = "flex";
});

// ==========================================
// THE ULTIMATE PRANK LOGIC 
// ==========================================
const feedbackStep = document.getElementById("feedback-step");
const submitFeedbackBtn = document.getElementById("submit-feedback");
const feedbackText = document.getElementById("feedback-text");

const returnGiftStep = document.getElementById("return-gift-step");
const rgYes = document.getElementById("rg-yes");
const rgNo = document.getElementById("rg-no");

const settingBox = document.getElementById("setting-box");
const settingYes = document.getElementById("setting-yes");
const settingNo = document.getElementById("setting-no");

const nameBox = document.getElementById("name-box");
const submitNameBtn = document.getElementById("submit-name");
const girlNameInput = document.getElementById("girl-name");
const dealDoneMsg = document.getElementById("deal-done-msg");
const noBtn = document.getElementById("no"); 

submitFeedbackBtn.addEventListener("click", () => {
  const fbValue = feedbackText.value.trim();
  const wordCount = fbValue === "" ? 0 : fbValue.split(/\s+/).length;

  if (wordCount < 10) {
    alert(`Oye kanjoos! Sirf ${wordCount} words? Kam se kam 10 words ki tareef toh likh meri! 😤`);
    return; 
  }
  feedbackStep.style.display = "none";
  returnGiftStep.style.display = "block";
});

function bhagButton(btn) {
  if(!btn) return;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const btnWidth = btn.offsetWidth || 100;
  const btnHeight = btn.offsetHeight || 50;
  
  const randomX = Math.floor(Math.random() * (windowWidth - btnWidth - 20));
  const randomY = Math.floor(Math.random() * (windowHeight - btnHeight - 20));
  
  btn.style.position = "fixed"; 
  btn.style.left = Math.max(10, randomX) + "px";
  btn.style.top = Math.max(10, randomY) + "px";
  btn.style.zIndex = "9999";
}

const prankButtons = [noBtn, rgNo, settingNo];
prankButtons.forEach(btn => {
  if(btn) {
    btn.addEventListener("mouseover", () => bhagButton(btn));
    btn.addEventListener("touchstart", (e) => { e.preventDefault(); bhagButton(btn); }, { passive: false });
    btn.addEventListener("click", (e) => { e.preventDefault(); bhagButton(btn); });
  }
});

rgYes.addEventListener("click", () => {
  returnGiftStep.style.display = "none";
  settingBox.style.display = "block";
});

settingYes.addEventListener("click", () => {
  settingBox.style.display = "none";
  nameBox.style.display = "block"; 
});

submitNameBtn.addEventListener("click", () => {
  const girlName = girlNameInput.value.trim();
  
  if (girlName === "") {
    alert("Naam toh bata de kanjoos! Chhupa kyu rahi hai? 😂");
    return;
  }
  
  nameBox.style.display = "none";
  
  dealDoneMsg.innerHTML = `
    <h2 class="aesthetic-title" style="font-size: 42px; margin-bottom: 20px;">Deal Done! 🤝🎉</h2>
    
    <p class="aesthetic-subtitle" style="font-size: 22px; margin-bottom: 30px; line-height: 1.5;">
      Maan gayi tu! Ab meri setting <b style="color: #000; background: #fff; padding: 2px 10px; border-radius: 5px;">${girlName}</b> ke<br>sath confirm! 😎
    </p>

    <div style="background-color: rgba(255, 255, 255, 0.5); border-radius: 15px; padding: 30px 20px; margin: 0 auto 30px auto; width: 95%; max-width: 400px; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
      <p style="font-size: 22px; color: #a62b49; font-weight: 600; margin-bottom: 10px;">Aur haan...</p>
      <p style="font-size: 22px; color: #a62b49; line-height: 1.5; margin-bottom: 25px; font-weight: 500;">
        Kyunki aaj mera bhi Birthday hai,<br>toh tera yeh return gift mujhe mil<br>gaya! 🎁
      </p>
      <p style="font-size: 20px; color: #a62b49; margin-bottom: 10px; font-weight: 500;">Ab jaldi se mujhe bol:</p>
      <h2 style="font-size: 32px; color: #d1225b; font-family: 'Playfair Display', serif; font-weight: bold; margin: 0;">
        "Happy Birthday Bhai!" 🎂<br>🥳
      </h2>
    </div>

    <p class="aesthetic-subtitle" style="font-size: 22px; font-weight: 600; margin-top: 20px; line-height: 1.4;">
      Pura proof mere paas hai! Jaldi baat<br>chala ab! 😂
    </p>
  `;
  
  dealDoneMsg.style.display = "block";
  dealDoneMsg.style.textAlign = "center"; 
});
