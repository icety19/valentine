// ===============================
// หน้าใส่รหัส
// ===============================
function checkPassword() {
  const correctPassword = "1931";
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

// 