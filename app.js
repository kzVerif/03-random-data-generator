const express = require('express');
const app = express();
app.use(express.json());

app.get('/random/number', (req, res) => {
    res.json({ number: Math.floor(Math.random() * 100) });
});

app.get('/random/string', (req, res) => {
    res.json({ string: Math.random().toString(36).substring(7) });
});

app.get('/random/uuid', (req, res) => {
    res.json({ uuid: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16); }) });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
