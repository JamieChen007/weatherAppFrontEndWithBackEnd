const { Router } = require('express');

const weaterRouter = require('./weather.route');
const v1Router = Router();

v1Router.use('/v1', weaterRouter);

module.exports = v1Router;
