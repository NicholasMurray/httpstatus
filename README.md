# HTTPSTATUS

A node express server app that returns HTTP status responses to the HTTP status code requested

## Install and run

### Install npm dependencies

```
npm install
```

### Run app locally

```
node index.js
```

or

```
PORT=8888 node index.js
```

## Usage

```
http://localhost:3000/301
```

## Response

```
HTTP/1.1 {status code} {status description}
Content-Type: text/plain or application/json
```