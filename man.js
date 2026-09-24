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

// 1. Welcome -> Balloons (Yes dabane par)
yesBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  balloonScreen.style.display = "flex";
});

// 2. Balloons Phodna
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

// 4. Candle Bujhana
blowBtn.addEventListener("click", () => {
  flameImg.style.display = "none"; 
  blowBtn.style.display = "none"; 
  wishText.style.display = "block"; 
  makeWishBtn.style.display = "block"; 
});

// 5. Cake -> Photos (3 Second wala Jadoo)
makeWishBtn.addEventListener("click", () => {
  cakeScreen.style.display = "none";
  photoScreen.style.display = "flex";

  // 3 sec me 1st Photo gayab
  setTimeout(() => { if(photo1) photo1.style.display = "none"; }, 3000);
  // 6 sec me 2nd Photo gayab
  setTimeout(() => { if(photo2) photo2.style.display = "none"; }, 6000);
  // 9 sec me screen change
  setTimeout(() => {
    photoScreen.style.display = "none";
    letterScreen.style.display = "flex";
  }, 9000);
});

// 6. Envelope Kholna
envelopeBox.addEventListener("click", () => {
  envelopeBox.style.display = "none";
  letterContent.style.display = "block";
});

// 7. Letter -> Feedback Screen
nextToFeedbackBtn.addEventListener("click", () => {
  letterScreen.style.display = "none";
  feedbackScreen.style.display = "flex";
});

// ==========================================
// THE ULTIMATE PRANK LOGIC (10 WORDS MINIMUM & SHOW DATA)
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
const noBtn = document.getElementById("no"); // Welcome screen ka No button

// Step 1: Submit dabane par 10 Words ki Validation
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

// FUNCTON: Button ko bhagane ke liye
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

// SAARE 'NO' BUTTONS KO BHAGAO
const prankButtons = [noBtn, rgNo, settingNo];
prankButtons.forEach(btn => {
  if(btn) {
    btn.addEventListener("mouseover", () => bhagButton(btn));
    btn.addEventListener("touchstart", (e) => { e.preventDefault(); bhagButton(btn); }, { passive: false });
    btn.addEventListener("click", (e) => { e.preventDefault(); bhagButton(btn); });
  }
});

// Step 2: Majboori mein "Haan" dabayegi (Return Gift)
rgYes.addEventListener("click", () => {
  returnGiftStep.style.display = "none";
  settingBox.style.display = "block";
});

// Step 3: Haar maan kar "Karva dungi" dabayegi
settingYes.addEventListener("click", () => {
  settingBox.style.display = "none";
  nameBox.style.display = "block"; 
});

// Step 4: Naam likh kar Final Submit Karna (Aur Result Dikhana)
submitNameBtn.addEventListener("click", () => {
  const girlName = girlNameInput.value.trim();
  
  if (girlName === "") {
    alert("Naam toh bata de kanjoos! Chhupa kyu rahi hai? 😂");
    return;
  }
  
  nameBox.style.display = "none";
  
  // YAHAN PAR TERA NAYA AAKHIRI DIALOGUE AAYEGA (Bina Feedback Dikhaye)
  dealDoneMsg.innerHTML = `
    <span style="font-size:35px;">Deal Done! 🤝🎉</span><br><br>
    Maan gayi tu! Ab meri setting <b style="color: #000; background: #fff; padding: 2px 8px; border-radius: 5px;">${girlName}</b> ke sath confirm! 😎<br><br>
    <div style="background: rgba(255,255,255,0.4); padding: 15px; border-radius: 10px; margin-top:10px;">
      <b>Aur haan...</b><br>
      Kyunki aaj mera bhi Birthday hai, toh tera yeh return gift mujhe mil gaya! 🎁<br><br>
      Ab jaldi se mujhe bol:<br>
      <span style="font-size:26px; color:#d1225b; font-weight:bold;">"Happy Birthday Bhai!" 🎂🥳</span>
    </div><br>
    Pura proof mere paas hai! Jaldi baat chala ab! 😂
  `;
  
  dealDoneMsg.style.display = "block";
});
