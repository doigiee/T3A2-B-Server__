import app from './app.js'

const port = process.env.PORT || 4717;

// Start the server
app.listen(port, () => console.log(`App is running, click here ---> http://localhost:${port}/`));
