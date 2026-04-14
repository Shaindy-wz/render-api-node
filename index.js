const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// נתיב ה-GET שביקשו במשימה
app.get('/', async (req, res) => {
  try {
    // שליחת בקשה ל-API של Render עם ה-API Key שלך
    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        'Authorization': `Bearer ${process.env.RENDER_API_KEY}`
      }
    });
    
    // החזרת רשימת האפליקציות כ-JSON
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ 
      error: "Failed to fetch services", 
      details: err.response ? err.response.data : err.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});