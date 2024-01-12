import Name from "../../../../../Name";
import TemperatureRange from "../../../../../TemperatureRange";
import WeatherIcon from "../../../../../WeatherIcon";
import Image from "../../../CurrentCity/components/Image";

const City = ({
  bg,
  cityName,
  weatherIcon,
  temperatureRange,
  getOtherCityClick,
  className,
}) => {
  const onOtherCityDivClick = () => {
    getOtherCityClick(cityName);
  };

  return (
    <div
      onClick={onOtherCityDivClick}
      className={`relative w-full m-3 flex flex-col justify-center items-center cursor-pointer hover:drop-shadow-4xl ${className}`}
    >
      <Image
        imageUrl={bg}
        alt="bg"
        className="absolute blur-xs drop-shadow h-full w-full top-0 left-0"
      />
      <WeatherIcon imgUrl={weatherIcon} className="z-10 w-1/3 h-1/3" />
      <Name
        value={cityName}
        className="text-white font-semibold text-2xl z-10"
      />
      <TemperatureRange value={temperatureRange} className="text-white z-10" />
    </div>
  );
};

export default City;
