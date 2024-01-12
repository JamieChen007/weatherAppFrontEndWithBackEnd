import Date from "../../../../../Date";
import Name from "../../../../../Name";
import TemperatureRange from "../../../../../TemperatureRange";
import WeatherIcon from "../../../../../WeatherIcon";

const DayOfWeek = ({ className, day, date, wetherIcon, temperatureRange }) => {
  return (
    <div
      className={`flex flex-col items-center justify-around max-xs:flex-row  ${className}`}
    >
      <Name
        value={day}
        className="font-extrabold text-2xl max-xs:text-left max-xs:basis-1/2 max-xs:text-sm max-xs:font-semibold"
      />
      <Date value={date} className="font-semibold text-1xl max-xs:hidden" />
      <WeatherIcon
        imgUrl={wetherIcon}
        className="w-5/6 object-contain max-xs:w-1/12"
      />
      <TemperatureRange
        value={temperatureRange}
        className="font-semibold text-1xl max-xs:text-sm max-xs:basis-1/4"
      />
    </div>
  );
};

export default DayOfWeek;
