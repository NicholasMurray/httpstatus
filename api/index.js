const express = require('express');
const HTTPStatusCode = require('http-status-code');
const app = express();
const { postResponseCodes, putResponseCodes, patchResponseCodes, deleteResponseCodes } = require('./responseCodes');
const PORT = process.env.PORT || 3000;

// Homepage
app.get('/api', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <meta charset="UTF-8"> 
      <head>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🫖</text></svg>">
        <title>HTTP Status Codes</title>
      </head>
      <body>
        <h1>🫖 HTTP Status Codes</h1>
        <h2>
          Request a HTTP response using HTTP Verbs
        </h2>
        <table>
          <tr>
            <td>GET:</td>
            <td>https://httpstatus-ten.vercel.app/api/302</td>
          </tr>
          <tr>
            <td>POST:</td>
            <td>https://httpstatus-ten.vercel.app/api/201</td>
          </tr>
          <tr>
            <td>PUT:</td>
            <td>https://httpstatus-ten.vercel.app/api/204</td>
          </tr>
          <tr>
            <td>PATCH:</td>
            <td>https://httpstatus-ten.vercel.app/api/200</td>
          </tr>
          <tr>
            <td>DELETE:</td>
            <td>https://httpstatus-ten.vercel.app/api/202</td>
          </tr>
        </table>
      </body>
    </html>`
  );
});

// API
app.get('/api/:code', (req, res) => {
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

// API
app.put('/api/:code', (req, res) => {
  const statusCode = parseInt(req.params.code);
  
  // Send error message if statusCode supplied is out of range
  if (isNaN(statusCode) || !putResponseCodes.includes(statusCode)) {
    return res.status(400).json({ error: 'Invalid status code' });
  }

  res.status(statusCode);

  // Set headers based on the status code 
  res.setHeader('Content-Type', 'text/plain');
  res.send(`${statusCode} ${HTTPStatusCode.getMessage(statusCode)}`);  
});

// API
app.patch('/api/:code', (req, res) => {
  const statusCode = parseInt(req.params.code);
  
  // Send error message if statusCode supplied is out of range
  if (isNaN(statusCode) || !patchResponseCodes.includes(statusCode)) {
    return res.status(400).json({ error: 'Invalid status code' });
  }

  res.status(statusCode);

  // Set headers based on the status code 
  res.setHeader('Content-Type', 'text/plain');
  res.send(`${statusCode} ${HTTPStatusCode.getMessage(statusCode)}`);  
});

// API
app.delete('/api/:code', (req, res) => {
  const statusCode = parseInt(req.params.code);
  
  // Send error message if statusCode supplied is out of range
  if (isNaN(statusCode) || !deleteResponseCodes.includes(statusCode)) {
    return res.status(400).json({ error: 'Invalid status code' });
  }

  res.status(statusCode);

  // Set headers based on the status code 
  res.setHeader('Content-Type', 'text/plain');
  res.send(`${statusCode} ${HTTPStatusCode.getMessage(statusCode)}`);  
});


module.exports = app;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
