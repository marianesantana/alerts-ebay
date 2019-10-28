require("dotenv").config();
const express = require('express');
const app = express()
const PORT = process.env.DEV_PORT || 3000;

app.listen(PORT, (res, req) => {
    console.log(`Server is listening on port ${PORT}`);
  });
