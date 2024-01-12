const express = require('express');
const { getSingleCityData, getForecastData } = require('../controller/weather.controller');
const weatherRouter = express.Router();

weatherRouter.get('/getSingleCityData', getSingleCityData);
weatherRouter.get('/getForecastData', getForecastData);

module.exports = weatherRouter;
