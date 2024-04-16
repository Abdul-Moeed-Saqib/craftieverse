require('dotenv').config();

const express = require('express');

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('listening on port and connected to database', process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error);
  })