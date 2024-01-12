import DayOfWeek from './components/DayOfWeek';
import { getIcon } from '../../../../apis/helper/getIcon';

const Forecast = ({ forecastData }) => {
  const iconArr = forecastData.map((forecastData) => {
    return getIcon(forecastData.weather);
  });

  return (
    <div className="flex justify-between text-center h-full max-xs:flex-col max-xs:bg-slate-50 max-xs:rounded-2xl max-xs:border max-xs:divide-y">
      {forecastData.length > 0 &&
        forecastData.map((forecastData, index) => (
          <DayOfWeek
            key={index}
            className={index === 3 && 'max-lg:hidden max-xs:flex'}
            day={forecastData.dayOfWeek}
            date={forecastData.date}
            wetherIcon={iconArr[index]}
            temperatureRange={`${forecastData.minTemp} ~ ${forecastData.maxTemp}`}
          />
        ))}
    </div>
  );
};

export default Forecast;
