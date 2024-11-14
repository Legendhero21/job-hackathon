const express = require('express');
const path = require('path');
const app = express();

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Load index.ejs for the home page
});

app.get('/job-seeker', (req, res) => {
    res.render('job-seeker'); // Load job-seeker.ejs directly
});

app.get('/company', (req, res) => {
    res.render('company'); // Load company.ejs directly
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

