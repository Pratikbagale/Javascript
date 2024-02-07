const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/') {
        res.end('<h1> this is code with pratik </h1>  <p> hey this is my first code for js </p>');
    } else if (req.url === '/about') {
        res.end('<h1> About code with pratik </h1> <p> hey this is about code with pratik </p>');
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1><p>Sorry, the page you are looking for does not exist.</p>');
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
});

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
