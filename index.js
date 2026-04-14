const express = require('express');
const sdk = require('@api/render-api');
const app = express();
const port = process.env.PORT || 3000;

// כאן אנחנו מחברים את ה-SDK עם המפתח שלך
sdk.auth(process.env.RENDER_API_KEY);

app.get('/', async (req, res) => {
  try {
    // קריאה ל-Render להביא את רשימת השירותים
    const { data } = await sdk.listServices({ limit: '20' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services", message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});