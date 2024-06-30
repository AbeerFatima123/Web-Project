const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Attach the public directory to our express server
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.redirect('/homepage');
});

//login page
app.get('/login', (req, res) => {
    res.sendFile('/pages/login page.html', { root: __dirname });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // login logic here
    res.redirect('/dashboard');
});

// sign up page
app.get('/signup', (req, res) => {
    res.sendFile('/pages/signup page.html', { root: __dirname });
});

// homepage
app.get('/homepage', (req, res) => {
    res.sendFile('/pages/homepage.html', { root: __dirname });
});

/// Admin dashboard ///
app.get('/dashboard', (req, res) => {
    res.sendFile('/pages/dashboard_Page.html', { root: __dirname });
});

// shop setup
app.get('/dashboard_shopSetup', (req, res) => {
    res.sendFile('/pages/shop setup Page.html', { root: __dirname });
});

app.get('/dashboard_shopSetup_integration', (req, res) => {
    res.sendFile('/pages/setup_integrations.html', { root: __dirname });
});

app.get('/dashboard_shopSetup_team', (req, res) => {
    res.sendFile('/pages/setup_Team.html', { root: __dirname });
});

// projects
app.get('/dashboard_project', (req, res) => {
    res.sendFile('/pages/project page.html', { root: __dirname });
});

// clients
app.get('/dashboard_clients', (req, res) => {
    res.sendFile('/pages/client page.html', { root: __dirname });
});

app.get('/dashboard_clients_type', (req, res) => {
    res.sendFile('/pages/client type page.html', { root: __dirname });
});

// orders
app.get('/dashboard_orders', (req, res) => {
    res.sendFile('/pages/orders Page.html', { root: __dirname });
});

app.get('/dashboard_invoice', (req, res) => {
    res.sendFile('/pages/orders_and_invoices.html', { root: __dirname });
});
// notifications
app.get('/dashboard_notifications', (req, res) => {
    res.sendFile('/pages/Notifications Page.html', { root: __dirname });
});

/// Super Admin dashboard ///

// listen for requests
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})