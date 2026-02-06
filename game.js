function checkPassword() {
  const pass = "1931"; // เปลี่ยนรหัส
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");
  
  if (input === pass) {
    window.location.href = "letter.html";
  } else {
    error.innerText = "รหัสไม่ถูกนะ ลองใหม่อีกครั้ง 💔";
  }
}

function openLetter() {
  document.getElementById("letterBox").style.display = "block";
}

function nextPage() {
  window.location.href = "gallery.html";
}

function goForever() {
  window.location.href = "forever.html";
}