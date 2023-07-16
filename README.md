# Intersection API

This is a simple Express.js API that calculates intersections between a line string and scattered lines.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>


cd intersection-api
npm install

2. Set up environment variables:

SECRET_KEY=secret123
PORT=3000


To start the application, run the following command:
npm start


Calculate Intersections
Endpoint: `POST /api/intersections`


API Usage
Get an Access Token
To access the API endpoints, you need to include a valid access token in the request header.

The access token is generated automatically when starting the app. You can find the generated access token in the console output when the server starts. It will be printed as token:
 🔒  Token: <access-token>



Request Body:

{
"lineString": {
"coordinates": [[0, 0], [1, 1], [2, 2]]
},
"scatteredLines": [
{
"id": 1,
"line": {
"type": "LineString",
"coordinates": [[1, 0], [1, 2]]
}
},
{
"id": 2,
"line": {
"type": "LineString",
"coordinates": [[0, 1], [2, 1]]
}
}
]
}

Response:

[
{
"id": 1,
"intersectionPoint": [1, 1]
},
{
"id": 2,
"intersectionPoint": [1, 1]
}
]


```
