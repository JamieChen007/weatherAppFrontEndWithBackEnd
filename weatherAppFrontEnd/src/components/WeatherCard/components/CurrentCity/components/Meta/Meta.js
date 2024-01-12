import MetaItem from "./components/MetaItem";
import wind from "./assets/wind_speed.svg";
import humidity from "./assets/humidity.svg";
import airQuality from "./assets/PM2.5.svg";
import Somatosensory from "./assets/Somatosensory_temperature.svg";

const Meta = ({ weatherData }) => {
  return (
    <div className="flex font-semibold justify-around bg-slate-50 rounded-2xl w-full py-2 px-5 min-h-[100px]  max-xl:px-1">
      <MetaItem
        imageUrl={humidity}
        value={`${weatherData.humidity}%`}
        alt="humidity icon"
      />
      <MetaItem
        imageUrl={wind}
        value={`${weatherData.windSpeed}km/h`}
        alt="wind icon"
      />
      <MetaItem
        imageUrl={airQuality}
        value={`${weatherData.PM25}μg`}
        alt="airQuality icon"
      />
      <MetaItem
        imageUrl={Somatosensory}
        value={`${weatherData.maxTemp}°`}
        alt="Somatosensory icon"
      />
    </div>
  );
};

export default Meta;
