// ==========================================
// JASOOSI SETUP (script.js) - FIXED
// ==========================================

// Galti yahin thi! Ab purana data delete nahi hoga, balki usme add hoga
let wrongPasswordsList = JSON.parse(localStorage.getItem("wrongPasswords")) || [];
let hintClicks = parseInt(localStorage.getItem("hintClicks")) || 0;

const SECRET_CODE = "MzAwOQ=="; // Tera pin 3009
let enteredCode = "";

const passboxes = document.querySelectorAll(".passbox");
const keybtns = document.querySelectorAll(".keybtn");
const openbtn = document.getElementById("openbtn");
const lockcard = document.querySelector(".lockcard");
const hintBtn = document.getElementById("hint-btn");

// --- 1. HINT BUTTON CLICK TRACKING ---
if (hintBtn) {
  hintBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hintClicks++; // Click badhao
    localStorage.setItem("hintClicks", hintClicks); // Memory me save karo
    
    // Save hone ke baad Hint page par bhejo
    window.location.href = "hint.html"; 
  });
}

// --- 2. PASSWORD DABBE UPDATE (PINK FLOWER) ---
function updateBoxes() {
  passboxes.forEach((box, i) => {
    box.value = enteredCode[i] ? "✿" : ""; 
  });
}

// --- 3. GALAT PASSWORD PE SHAKE EFFECT ---
function shakeCard() {
  lockcard.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(-10px)' },
    { transform: 'translateX(10px)' },
    { transform: 'translateX(-10px)' },
    { transform: 'translateX(10px)' },
    { transform: 'translateX(0)' }
  ], { duration: 400, iterations: 1 });
}

// --- 4. NUMBER TYPE KARNE KA LOGIC ---
keybtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); 
    const val = btn.textContent.trim();
    if (val === "⌫") {
      enteredCode = enteredCode.slice(0, -1); 
    } else if (val !== "*" && enteredCode.length < 4) {
      enteredCode += val; 
    }
    updateBoxes(); 
  });
});

// --- 5. OPEN BUTTON (THE MAIN LOGIC) ---
if(openbtn) {
  openbtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    if (enteredCode.length < 4) {
      alert("Please enter the full 4-digit passcode! 🌸");
      return;
    }
    const encodedInput = btoa(enteredCode); 

    if (encodedInput === SECRET_CODE) { 
      // CORRECT PIN ✅
      openbtn.innerHTML = "UNLOCKED! 🔓";
      openbtn.style.backgroundColor = "#d81b60"; 
      openbtn.style.color = "white";
      
      setTimeout(() => {
        window.location.href = "man.html"; 
      }, 800);
      
    } else {
      // WRONG PIN ❌ (Jasoosi Data Record)
      wrongPasswordsList.push(enteredCode);
      localStorage.setItem("wrongPasswords", JSON.stringify(wrongPasswordsList));
      
      shakeCard(); 
      enteredCode = ""; 
      updateBoxes(); 
    }
  });
}
