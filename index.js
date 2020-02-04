const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const assetRoutes = require('./routes/assetRoutes');
const cors = require('cors');

// IMPORT MODELS
require('./models/User');
require('./models/assetModel');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/MRKD`,  { useNewUrlParser: true, useUnifiedTopology: true  })
  .catch(error => console.log(error));
mongoose.connection.on('error', err => {
    console.log(err);
  });

  
app.use(bodyParser.json());
app.use(cors());
app.use('/api/asset',assetRoutes);



//IMPORT ROUTES
require('./routes/userRoute')(app);



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});