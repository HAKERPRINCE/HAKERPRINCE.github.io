// ===============================
// CHECK: JS LOAD HO RAHA HAI YA NAHI
// ===============================
console.log("script.js loaded ✅");

// ===============================
// FREE SERVER BUTTON
// ===============================
function openFreePanel() {
  console.log("Free Server clicked");
  // same website ke andar panel open hoga
  window.location.href = "./panel.html";
}

// ===============================
// PAID PLAN BUTTON
// ===============================
function openPaid() {
  console.log("Paid Plan clicked");
  // payment page open hoga
  window.location.href = "./payment.html";
}

// ===============================
// FUTURE READY (backend ke liye)
// ===============================

// Example: server start
function startServer() {
  alert("Server Starting... (demo)");
}

// Example: server stop
function stopServer() {
  alert("Server Stopped... (demo)");
}

// Example: restart
function restartServer() {
  alert("Server Restarting... (demo)");
}
