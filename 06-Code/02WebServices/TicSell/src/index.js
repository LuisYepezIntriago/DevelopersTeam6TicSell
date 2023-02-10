import app from './app';
import './mongodb';
import config from './config';

app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}!`));
