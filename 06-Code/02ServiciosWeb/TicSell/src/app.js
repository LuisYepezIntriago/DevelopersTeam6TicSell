import express from 'express';
import itemRouter from './routes/item.route.js';
const app = express();

app.use (express.json());
app.use (express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.use('/api/items', itemRouter);
export default app;