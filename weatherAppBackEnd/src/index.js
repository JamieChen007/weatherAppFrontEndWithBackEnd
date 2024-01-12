const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const v1Router = require('./routes');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/api', v1Router);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
