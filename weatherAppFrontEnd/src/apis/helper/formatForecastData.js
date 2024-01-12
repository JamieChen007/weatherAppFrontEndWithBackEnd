import dayjs from 'dayjs';

export const formatForecastData = (forecastFetchResult) => {
  let forecastData = [];
  // get next 4 day data
  for (let i = 1; i <= 4; i++) {
    // get next 'i' day date
    const futureDate = dayjs().add(i, 'day').format('YYYY-MM-DD');
    // filter to get next 'i' day's weather data list
    const futureDateDataList = forecastFetchResult.list.filter((forecastFetchResult) =>
      dayjs(futureDate).isSame(dayjs(forecastFetchResult.dt_txt).format('YYYY-MM-DD'), 'day')
    );
    // get all min_temp in next 'i' day weather data list, and set in minArr
    const minArr = futureDateDataList.map((futureDateData) => futureDateData.main.temp_min);
    // get all max_temp in next 'i' day weather data list, and set in maxArr
    const maxArr = futureDateDataList.map((futureDateData) => futureDateData.main.temp_max);
    // use Math.min to find minimum number in minArr, and return as min_tmp
    const min_temp = Math.min(...minArr);
    // use Math.max to find maximum number in maxArr, and return as max_temp
    const max_temp = Math.max(...maxArr);

    // format data and push into 'forecastData' array
    forecastData.push({
      date: dayjs(futureDate).format('DD MMMM'),
      dayOfWeek: dayjs(futureDate).format('dddd'),
      minTemp: Math.ceil(min_temp),
      maxTemp: Math.ceil(max_temp),
      // use index 3 weather as that day weather condition
      weather: futureDateDataList[3].weather[0].main,
    });
  }

  return forecastData;
};
