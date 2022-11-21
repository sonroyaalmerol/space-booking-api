const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Space Booking API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/sonroyaalmerol/space-booking-api/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
      description: 'Development server',
    },
    {
      url: `https://space-booking-api.onrender.com/v1`,
      description: 'Production server',
    },
  ],
};

module.exports = swaggerDef;
