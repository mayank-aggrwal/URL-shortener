
# 💻 SHORTT-LY (URL-Shortener)
[![](https://img.shields.io/badge/Node.js-12.19.0-blue)](https://nodejs.org/)
[![](https://img.shields.io/badge/express-4.17.1-brightgreen)](https://expressjs.com/)
[![](https://img.shields.io/badge/mongoose-5.9.29-orange)](https://www.npmjs.com/package/mongoose)
[![](https://img.shields.io/badge/author-mayankaggarwal-informational)](https://github.com/mayank-aggrwal/)
[![](https://img.shields.io/apm/l/vim-mode.svg)](https://choosealicense.com/licenses/mit/)

A simple yet useful web service to compress long URLs into shorter ones.
- https://shortt-ly.herokuapp.com/

## Features

1. General URL shortening
2. Custom URL shortening
3. Easy to integrate with other applications

## Open Endpoints

 - Shorten given long URL :  `POST /api/short`
 - Shorten URL with custom code : `POST /api/custom`
 - Redirect to website : `GET /:code`
 - Check API health : `GET /health`

---

`POST /api/short`
### Request schema

```json
{
    "longUrl": "<the-long-url-to-be-shortened>"
}
```
### Response schema

```json
{
  "_id": "5f81dca70f685f2f104",
  "longUrl": "<the-long-url-to-be-shortened>",
  "shortUrl": "https://<base-url>/-i8bZ5O9B",
  "urlCode": "-i8bZ5O9B",
  "date": "Sat Oct 10 2017 21:39:11 GMT+0530 (India Standard Time)",
  "__v": 0
}
```

```json
{
  "errors": {
    "message": "Invalid long URL"
  }
}
```

```json
{
  "errors": {
    "message": "Invalid base URL"
  }
}
```

```json
{
  "errors": {
    "message": "Server error"
  }
}
```
---

`POST /api/custom`
### Request schema

```json
{
    "longUrl": "<the-long-url-to-be-shortened>",
    "urlCode": "<custom-code>"
}
```
### Response schema

```json
{
  "_id": "5f81dca70f685f2f104",
  "longUrl": "<the-long-url-to-be-shortened>",
  "shortUrl": "https://<base-url>/-i8bZ5O9B",
  "urlCode": "-i8bZ5O9B",
  "date": "Sat Oct 10 2017 21:39:11 GMT+0530 (India Standard Time)",
  "__v": 0
}
```

```json
{
  "errors": {
    "message": "Code already in use"
  }
}
```

```json
{
  "errors": {
    "message": "Invalid long URL"
  }
}
```

```json
{
  "errors": {
    "message": "Invalid base URL"
  }
}
```

```json
{
  "errors": {
    "message": "Server error"
  }
}
```
---

## Instructions

 - Clone the repository
 - Install node from [official website](https://nodejs.org/en/download/)
 - Install the dependencies for the project using below command
   ```bash
   npm install
   ```
 - To run the application locally
   ```bash
   npm run dev
   ```
 - In the browser goto : http://localhost:5000/health
 
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Check Contributing.md for more instructions.

## License

[MIT](https://choosealicense.com/licenses/mit/)
