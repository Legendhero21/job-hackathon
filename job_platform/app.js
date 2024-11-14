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
// Route for displaying job seeker dashboard
app.get('/job-seeker', async (req, res) => {
    // Fetch jobs from database
    const jobs = await db.query("SELECT * FROM jobs");  // Adjust this query based on filters if needed
    res.render('job-seeker', { jobs: jobs.rows });
});

// Route for updating profile
app.get('/job-seeker/update', (req, res) => {
    res.render('job-seeker-update');
});

app.post('/job-seeker/update', (req, res) => {
    // Save updated profile details to the database
    const { name, location, skills, experience } = req.body;
    // Update logic here
    res.redirect('/job-seeker');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

