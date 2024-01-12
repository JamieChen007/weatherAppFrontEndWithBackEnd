import Date from '../../../Date';
import Meta from './components/Meta';
import Name from '../../../Name';
import Temperature from './components/Temperature';
import TemperatureRange from '../../../TemperatureRange';
import WeatherIcon from '../../../WeatherIcon';
import Image from './components/Image';
import { getIcon } from '../../../../apis/helper/getIcon';
import { getBg } from '../../../../apis/helper/getBg';

const CurrentCity = ({ weatherData }) => {
  const icon = getIcon(weatherData.weather);
  const imgUrl = getBg(weatherData.weather);

  return (
    <div className="relative flex flex-col items-center h-full justify-around p-3 max-xs:min-h-[550px]">
      <Image
        imageUrl={imgUrl}
        alt={weatherData.weather}
        className="absolute top-0 right-0"
      />
      <Date
        value={weatherData.dateTime}
        className="text-white text-left  text-1xl w-11/12"
      />
      <Name
        value={weatherData.cityName}
        className="text-white text-3xl font-bold"
      />
      <Temperature
        value={weatherData.currentTemp}
        className="text-slate-200 text-8xl font-bold"
      />
      <TemperatureRange
        value={`${weatherData.minTemp} ~ ${weatherData.maxTemp}`}
        className="text-white text-1xl"
      />
      <WeatherIcon
        imgUrl={icon}
        alt="cloud"
      />
      <Meta weatherData={weatherData} />
    </div>
  );
};

export default CurrentCity;
