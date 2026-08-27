// 1. EmailJS Safe Start
window.onload = function() {
  try {
    if (window.emailjs) {
      emailjs.init("2QYepLZ5c1IFeqUHP");
    }
  } catch (error) {
    console.log("Email engine offline", error);
  }
};

// 2. Encoded Passcode (3009 ka Code)
const SECRET_CODE = "MzAwOQ=="; 
let enteredCode = "";

const passboxes = document.querySelectorAll(".passbox");
const keybtns = document.querySelectorAll(".keybtn");
const openbtn = document.getElementById("openbtn");
const lockcard = document.querySelector(".lockcard");

// 3. Boxes Update
function updateBoxes() {
  passboxes.forEach((box, i) => {
    box.value = enteredCode[i] || ""; 
  });
}

// 4. Send Email Function
function sendEmailLog(status) {
  try {
    if (window.emailjs) {
      emailjs.send("service_5b0d6qf", "template_jq7hc0g", {
        status: status,
        time: new Date().toLocaleString()
      }).catch(err => console.log(err));
    }
  } catch (e) {}
}

// 5. Galat Password par Shake Effect
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

// 6. KEYPAD CLICK LOGIC (Ekdum Solid)
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

// 7. OPEN BUTTON LOGIC
openbtn.addEventListener("click", (e) => {
  e.preventDefault(); 
  
  if (enteredCode.length < 4) {
    alert("Please enter the full 4-digit passcode! 🌸");
    return;
  }

  const encodedInput = btoa(enteredCode); 

  if (encodedInput === SECRET_CODE) { 
    // CORRECT PIN (3009) ✅
    sendEmailLog("Correct ✅ (Sister Unlocked It!)");
    
    openbtn.innerHTML = "UNLOCKED! 🔓";
    openbtn.style.backgroundColor = "#d81b60"; 
    openbtn.style.color = "white";
    
    setTimeout(() => {
      window.location.href = "man.html"; 
    }, 800);

  } else {
    // WRONG PIN ❌
    sendEmailLog("Wrong ❌");
    shakeCard(); 
    enteredCode = ""; 
    updateBoxes(); 
  }
});
