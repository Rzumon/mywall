const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let messages = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/add-message', (req, res) => {
    const { message } = req.body;
    if (message) {
        messages.push(message);
        res.json({ success: true, messages });
    } else {
        res.json({ success: false });
    }
});

app.get('/messages', (req, res) => {
    res.json({ messages });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
