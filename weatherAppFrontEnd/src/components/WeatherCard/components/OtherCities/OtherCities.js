import City from './components/City';
import London from './assets/London.png';
import Newyork from './assets/Newyork.png';
import Shanghai from './assets/Shanghai.png';
import Sydney from './assets/Sydney.png';
import { getIcon } from '../../../../apis/helper/getIcon';

const OtherCities = ({ weatherDataList, getOtherCityClick }) => {
  const iconArr = weatherDataList.map((weatherData) => {
    return getIcon(weatherData.weather);
  });

  return (
    <div className="flex justify-around h-full max-xs:hidden">
      {weatherDataList.length > 0 &&
        weatherDataList.map((weatherData, index) => (
          <City
            key={index}
            getOtherCityClick={getOtherCityClick}
            className={(index === 3 && 'max-xl:hidden') || (index === 2 && 'max-lg:hidden')}
            bg={
              (index === 0 && Sydney) ||
              (index === 1 && Shanghai) ||
              (index === 2 && Newyork) ||
              (index === 3 && London)
            }
            cityName={weatherData.cityName}
            weatherIcon={iconArr[index]}
            temperatureRange={`${weatherData.minTemp} ~ ${weatherData.maxTemp}`}
          />
        ))}
    </div>
  );
};

export default OtherCities;
