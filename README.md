
# News Web API 

## Overview

This simple Web API provides routes with demonstrates how to communicate data with client via JSON format.

## Working with database

- this web api work with mongodb 
- You can edit connection's string in `app.js`

```js
const db = require('monk')('localhost/newsDB')
```

## Route

- `GET /` return only hello world
- `GET /news` return json of news object
- `POST /news/create` accept json object to save in database

```json
{
    "content": "simple test"
}
```

## Companion Project

This Web API will work with following project: 

- Flutter 


