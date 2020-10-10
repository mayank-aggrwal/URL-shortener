
# URL-Shortener

 - https://shortt-ly.herokuapp.com/

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