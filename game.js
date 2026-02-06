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
    error.innerText = "รหัสไม่ถูกนะ 💔";
  }
}

// ===============================
// หน้าซองจดหมาย
// ===============================
function openLetter() {
  const box = document.getElementById("letterBox");
  const envelope = document.querySelector(".envelope");
  
  envelope.classList.add("opened");
  box.classList.add("show");
}

function nextPage() {
  window.location.href = "gallery.html";
}

// ===============================
// หน้ารูปคู่ → หน้าสุดท้าย
// ===============================
function goForever() {
  window.location.href = "forever.html";
}