import express from 'express';
import controllerRouting from './routes/index';

const app = express();
const port = 1245;

controllerRouting(app);

app.listen(port, () => {
  console.log(`Express Server app listening at http://localhost:${port}`);
});
module.exports = app;
