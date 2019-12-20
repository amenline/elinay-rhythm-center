const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
const config = require('config');
const next = require('next')
// const cors = require('cors');

const port = process.env.PORT || 5000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// MongoDB connection
const uri = config.get('DB_URI');
  mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('MongoDB connection established'))
.catch(error => console.log(error));  

// check db connection status
// mongoose.connection.once('open', () => {
//   console.log('MongoDB connection established')
// });
mongoose.connection.on('error', err => {
  console.log(err);
});

app.prepare().then(() => {
  const server = express();

  // bodyparser middleware
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  /********* main backend server **********/ 
  // use routes
  server.use('/api/book', require('./routes/api/book'));

  
  /********* Next routes **********/ 
  server.get("*", (req, res) => {
    return handle(req, res)
  });

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
})
.catch(ex => {
  console.error(ex.stack);
  process.exit(1);
})