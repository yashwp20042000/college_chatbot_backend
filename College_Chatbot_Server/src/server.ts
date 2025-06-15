
import app from './app';
import { env } from './config/env';

const port = env.PORT;

app.listen(port, () => {
  console.log(`Server running in ${env.NODE_ENV} mode on port ${port}`);
});
