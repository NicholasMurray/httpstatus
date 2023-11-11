# 🫖 HTTP Status Codes

A node express server app that returns HTTP status responses

## Install and run

### Install npm dependencies

```
npm install
```

### Run app locally

```
node api/index.js
```

or

```
PORT=8888 node api/index.js
```

## Usage

```
GET:    http://localhost:3000/api/302
POST:   http://localhost:3000/api/201
PUT:    http://localhost:3000/api/204
PATCH:  http://localhost:3000/api/200
DELETE: http://localhost:3000/api/202
```

## Response

```
HTTP/1.1 {status code} {status description}
Content-Type: text/plain or application/json
```