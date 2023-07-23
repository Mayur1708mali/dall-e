import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
const MONGODB_URL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E');
});

const startServer = async () => {
  try {
    //! connecting to database
    connectDB(MONGODB_URL);

    app.listen(3000 || process.env.PORT, () => {
      console.log('Server is up now.');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
