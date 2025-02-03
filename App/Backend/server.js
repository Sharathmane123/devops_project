const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
});
