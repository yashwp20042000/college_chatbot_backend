
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import { Router } from 'express';

export const setupSwagger = (app: Router) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
