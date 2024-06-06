//USED TO TEST; ENSURE SERVER WAS UP AND RUNNING... ALWAYS DO THIS FIRST!
// const express = require('express')
// const app = express()
// const port = 3000
// app.get('/', (req, res) => {
//   res.send('We made it');
// });
// app.listen(port, () => {
//   console.log('I can hear you!....server is up and running');
// });

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

//Set the view engine to Pug
app.set('view engine', 'pug');

//Allow user to get...add get & res.send..Here I define route tohandle GET requests
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});



// Define route to render the index view
app.get('/index', (req, res) => {
    res.render('index');
});

// Define route to render the about view
app.get('/about', (req, res) => {
    res.render('about');
});

// Define route to render the user view
app.get('/user/123', (req, res) => {
    res.render('user');
});






// Define route to handle form submission
app.post('/submit-form', (req, res) => {
    // Extract form data from request
    const { name, email } = req.body;

    // Process form data (e.g., save to database, send email, etc.)
    // For now, we'll just log the data to the console
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);

    // Send a response to the client
    res.send('Form submitted successfully!');
});

// Start the server
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
