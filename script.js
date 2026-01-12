// ⏱️ 1.5 second baad GIF lag jaayega
setTimeout(() => {
  document.body.style.backgroundImage = "url('./giphy.gif')";
}, 1500);

// buttons
function openFreePanel() {
  window.location.href = "panel.html";
}

function openPaid() {
  window.location.href = "payment.html";
}
