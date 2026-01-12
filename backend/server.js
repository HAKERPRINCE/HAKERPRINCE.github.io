async function createFreeServer() {
  // Yahan aapko apne Render/Railway ka URL dalna hoga
  const backendURL = "https://your-backend-link.onrender.com/create-free";

  try {
    const response = await fetch(backendURL, { method: 'POST' });
    const data = await response.json();
    alert(data.message); // "Free server created!"
    window.location.href = "panel.html";
  } catch (error) {
    console.error("Error:", error);
    alert("Backend connection failed!");
  }
}
