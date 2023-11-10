const express = require('express');
const HTTPStatusCode = require('http-status-code');
const app = express();
const PORT = process.env.PORT || 3000;

const postResponseCodes = [
  200, // OK
  201, // Created
  204, // No Content
  400, // Bad Request
  401, // Unauthorized
  403, // Forbidden
  404, // Not Found
  422, // Unprocessable Entity
  500, // Internal Server Error
];

// Homepage
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>HTTP Status Codes</title></head>
      <body>
        <h1>HTTP Status Codes</h1>
        <p>
          Request a HTTP response in the format: <a href="http://localhost:${PORT}/200">http://localhost:${PORT}/200</a>
        </p>
      </body>
    </html>`
  );
});

// API
app.get('/:code', (req, res) => {
  const statusCode = parseInt(req.params.code);
  
  // Send error message if statusCode supplied is out of range
  if (isNaN(statusCode) || statusCode < 100 || statusCode >= 512) {
    return res.status(400).json({ error: 'Invalid status code' });
  }

  res.status(statusCode);

  // Set headers based on the status code 
  res.setHeader('Content-Type', 'text/plain');
  res.send(`${statusCode} ${HTTPStatusCode.getMessage(statusCode)}`);  
});

// API
app.post('/api/:code', (req, res) => {
  const statusCode = parseInt(req.params.code);
  
  // Send error message if statusCode supplied is out of range
  if (isNaN(statusCode) || !postResponseCodes.includes(statusCode)) {
    return res.status(400).json({ error: 'Invalid status code' });
  }

  res.status(statusCode);

  // Set headers based on the status code 
  res.setHeader('Content-Type', 'text/plain');
  res.send(`${statusCode} ${HTTPStatusCode.getMessage(statusCode)}`);  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
