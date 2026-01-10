const express = require("express");
const app = express();

app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "GodVoid Backend Live 🚀"
  });
});

// CREATE SERVER (FAKE LOGIC ABHI)
app.post("/create-server", (req, res) => {
  const { plan } = req.body;

  if (!plan) {
    return res.status(400).json({ error: "Plan missing" });
  }

  if (plan === "free") {
    return res.json({
      server: "created",
      type: "FREE",
      online: false,
      note: "Free server is NOT 24/7"
    });
  }

  if (plan === "paid") {
    return res.json({
      server: "created",
      type: "PAID",
      online: true,
      note: "Paid server is 24/7 ON"
    });
  }

  res.status(400).json({ error: "Invalid plan" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});
