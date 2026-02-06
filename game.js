// ===============================
// หน้าใส่รหัส
// ===============================
function checkPassword() {
  const correctPassword = "1931"; // 🔐 เปลี่ยนรหัสตรงนี้
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");
  
  if (input === correctPassword) {
    window.location.href = "letter.html";
  } else {
    error.innerText = "รหัสไม่ถูกนะ ลองคิดถึงเค้าอีกที 💔";
  }
}


// ===============================
// หน้าซองจดหมาย
// ===============================
function openLetter() {
  const box = document.getElementById("letterBox");
  if (box) {
    box.style.display = "block";
  }
}

function nextPage() {
  window.location.href = "gallery.html";
}


// ===============================
// หน้ารูปคู่
// ===============================
function goForever() {
  window.location.href = "forever.html";
}


// ===============================
// เอฟเฟกต์หัวใจลอย (โทนหวาน)
// ===============================
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  
  const hearts = ["💗", "💖", "💘", "💝", "❤️"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (16 + Math.random() * 14) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// สร้างหัวใจทุก ๆ 400ms
setInterval(createHeart, 400);
