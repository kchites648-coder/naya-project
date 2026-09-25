// ==========================================
// 1. EMAILJS SPY SETUP (Safe Mode)
// ==========================================
try {
  if (window.emailjs) {
    emailjs.init("_WbisVjYDUyHK7o2V"); // Teri Public Key
  }
} catch (error) {
  console.log("EmailJS load nahi hua, par website chalti rahegi", error);
}

// --- JASOOSI VARIABLES ---
let rgNoClicks = 0;
let setNoClicks = 0;

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

// ====== PRANK ELEMENTS ======
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

// ==========================================
// 1. Welcome -> Balloons
// ==========================================
if(yesBtn && welcomeScreen && balloonScreen) {
  yesBtn.addEventListener("click", () => {
    welcomeScreen.style.display = "none";
    balloonScreen.style.display = "flex";
  });
}

// ==========================================
// "NO" BUTTON BHAGAO LOGIC
// ==========================================
function bhagButton(btn, type) {
  if(!btn) return;
  if (type === 'rgNo') rgNoClicks++;
  if (type === 'setNo') setNoClicks++;

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

if(noBtn) {
  noBtn.addEventListener("mouseover", () => bhagButton(noBtn, 'welcomeNo'));
  noBtn.addEventListener("click", (e) => { e.preventDefault(); bhagButton(noBtn, 'welcomeNo'); });
  noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); bhagButton(noBtn, 'welcomeNo'); }, { passive: false });
}

// ==========================================
// 2. Balloons
// ==========================================
let poppedCount = 0;
for (let i = 1; i <= 4; i++) {
  const balImg = document.getElementById(`bal-${i}`);
  const balText = document.getElementById(`t${i}`);
  if(balImg) {
    balImg.addEventListener("click", () => {
      balImg.style.display = "none";
      if(balText) balText.style.display = "block";
      poppedCount++;
      if (poppedCount === 4 && nextToCandleBtn) {
        nextToCandleBtn.style.display = "block";
      }
    });
  }
}

// ==========================================
// 3. Balloons -> Cake
// ==========================================
if(nextToCandleBtn && balloonScreen && cakeScreen) {
  nextToCandleBtn.addEventListener("click", () => {
    balloonScreen.style.display = "none";
    cakeScreen.style.display = "flex";
  });
}

// ==========================================
// 4. Candle Bujhana
// ==========================================
if(blowBtn) {
  blowBtn.addEventListener("click", () => {
    const f1 = document.getElementById("flame-1");
    const f2 = document.getElementById("flame-2");
    if (f1) f1.style.display = "none";
    if (f2) f2.style.display = "none"; 
    blowBtn.style.display = "none"; 
    if (wishText) wishText.style.display = "block"; 
    if (makeWishBtn) makeWishBtn.style.display = "block"; 
  });
}

// ==========================================
// 5. Cake -> Photos 
// ==========================================
if(makeWishBtn && cakeScreen && photoScreen) {
  makeWishBtn.addEventListener("click", () => {
    cakeScreen.style.display = "none";
    photoScreen.style.display = "flex";

    setTimeout(() => { if(photo1) photo1.style.display = "none"; }, 3000);
    setTimeout(() => { if(photo2) photo2.style.display = "none"; }, 6000);
    setTimeout(() => {
      photoScreen.style.display = "none";
      if(letterScreen) letterScreen.style.display = "flex";
    }, 9000);
  });
}

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

if(envelopeBox) {
  envelopeBox.addEventListener("click", () => {
    envelopeBox.classList.add("envelope-open-anim");
    
    setTimeout(() => {
      envelopeBox.style.display = "none"; 
      if(letterContent) letterContent.style.display = "block"; 
      
      if(typingText) typingText.textContent = ""; 
      let currentLineIndex = 0;
      let currentCharIndex = 0;

      function typeWriter() {
        if(!typingText) return;
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
            if(nextToFeedbackBtn) nextToFeedbackBtn.style.display = "block";
          }, 1000);
        }
      }
      setTimeout(typeWriter, 200); 
    }, 1000);
  });
}

// ==========================================
// 7. Letter -> Feedback Screen
// ==========================================
if(nextToFeedbackBtn && letterScreen && feedbackScreen) {
  nextToFeedbackBtn.addEventListener("click", () => {
    letterScreen.style.display = "none";
    feedbackScreen.style.display = "flex";
  });
}

// ==========================================
// 8. PRANK SCREENS LOGIC
// ==========================================
if(submitFeedbackBtn && feedbackStep && returnGiftStep) {
  submitFeedbackBtn.addEventListener("click", () => {
    const fbValue = feedbackText ? feedbackText.value.trim() : "";
    const wordCount = fbValue === "" ? 0 : fbValue.split(/\s+/).length;

    if (wordCount < 10) {
      alert(`Oye kanjoos! Sirf ${wordCount} words? Kam se kam 10 words ki tareef toh likh meri! 😤`);
      return; 
    }
    feedbackStep.style.display = "none";
    returnGiftStep.style.display = "block";
  });
}

if(rgNo) {
  rgNo.addEventListener("mouseover", () => bhagButton(rgNo, 'rgNo'));
  rgNo.addEventListener("click", (e) => { e.preventDefault(); bhagButton(rgNo, 'rgNo'); });
  rgNo.addEventListener("touchstart", (e) => { e.preventDefault(); bhagButton(rgNo, 'rgNo'); }, { passive: false });
}
if(settingNo) {
  settingNo.addEventListener("mouseover", () => bhagButton(settingNo, 'setNo'));
  settingNo.addEventListener("click", (e) => { e.preventDefault(); bhagButton(settingNo, 'setNo'); });
  settingNo.addEventListener("touchstart", (e) => { e.preventDefault(); bhagButton(settingNo, 'setNo'); }, { passive: false });
}

if(rgYes && returnGiftStep && settingBox) {
  rgYes.addEventListener("click", () => {
    returnGiftStep.style.display = "none";
    settingBox.style.display = "block";
  });
}

if(settingYes && settingBox && nameBox) {
  settingYes.addEventListener("click", () => {
    settingBox.style.display = "none";
    nameBox.style.display = "block"; 
  });
}

// ==========================================
// 9. FINAL SUBMIT AND EMAIL SEND
// ==========================================
if(submitNameBtn) {
  submitNameBtn.addEventListener("click", () => {
    const girlName = girlNameInput ? girlNameInput.value.trim() : "";
    const feedback = feedbackText ? feedbackText.value.trim() : "No Feedback";
    
    if (girlName === "") {
      alert("Naam toh bata de kanjoos! Chhupa kyu rahi hai? 😂");
      return;
    }
    
    if(nameBox) nameBox.style.display = "none";
    
    // --- GATHER JASOOSI DATA ---
    const savedWrongPasswords = JSON.parse(localStorage.getItem("wrongPasswords") || "[]");
    const savedHintClicks = localStorage.getItem("hintClicks") || "0";
    
    const emailParams = {
      wrong_passwords: savedWrongPasswords.length > 0 ? savedWrongPasswords.join(", ") : "Ek baari mein sahi daal diya",
      wrong_count: savedWrongPasswords.length,
      hint_clicks: savedHintClicks,
      feedback: feedback,
      rg_no_clicks: rgNoClicks,
      set_no_clicks: setNoClicks,
      girl_name: girlName
    };

    // --- FIRE THE EMAIL ---
    if(window.emailjs) {
      emailjs.send("service_2nuw37l", "template_94hots7", emailParams)
        .then(function() {
           console.log("Email Sent!");
        }).catch(function(error) {
           console.log("Email failed:", error);
        });
    }

    // --- FINAL MESSAGE SCREEN ---
    if(dealDoneMsg) {
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
    }
  });
}
