const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.static('assets'));

const PORT = process.env.PORT || 5000;

// Route includes
const bootRouter = require('./routes/boot.router');

/* Routes */
app.get('/ping',  (req, res) => {
    res.send('alive')
});
app.get('/boot', bootRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});