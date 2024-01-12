import CurrentCity from './components/CurrentCity';
import Forecast from './components/Forecast';
import OtherCities from './components/OtherCities';
import SearchBar from './components/SearchBar';

const WeatherCard = ({
  isLoading,
  weatherDataList,
  getSearchCity,
  forecastData,
  getOtherCityClick,
}) => {
  const currentCityData = weatherDataList[0];
  const otherCitiesDataList = [...weatherDataList];
  otherCitiesDataList.shift();

  return (
    <div className="max-h-[900px] max-md:max-h-[1500px] max-xl:w-[90%] max-lg:w-[95%] max-md:h-full max-md:flex max-md:flex-col max-w-[1650px] p-6 max-xs:p-2 rounded-3xl w-4/5 h-4/5 mx-auto bg-slate-100 shadow-blue-800 overflow-hidden grid grid-cols-6 grid-rows-6 gap-4">
      {isLoading ? (
        <div className="row-span-6 col-span-6 max-md:h-screen text-5xl flex items-center justify-center">
          <p>Data is loading...</p>
        </div>
      ) : (
        <>
          <div
            className="row-span-6 rounded-3xl col-span-2"
            style={{
              backgroundImage: 'linear-gradient(152deg,#899bf0 1%,#3f55e4 54%,#3f55e4 96%)',
            }}
          >
            {currentCityData ? (
              <CurrentCity weatherData={currentCityData} />
            ) : (
              <div className="h-full text-3xl flex items-center justify-center">
                <p>Data not found</p>
              </div>
            )}
          </div>
          <div className="row-span-3 col-span-4 mx-6 flex flex-col justify-center max-xs:w-full max-xs:mx-0">
            {forecastData.length > 0 ? (
              <Forecast forecastData={forecastData} />
            ) : (
              <div className="text-3xl flex items-center justify-center">
                <p>Forecast data not found</p>
              </div>
            )}
          </div>
          <div className="row-span-1 col-span-4 mx-6 flex items-center max-md:order-first max-md:mx-0">
            <SearchBar getSearchCity={getSearchCity} />
          </div>
          <div className="row-span-2 col-span-4 mx-6">
            {otherCitiesDataList.length > 0 ? (
              <OtherCities
                weatherDataList={otherCitiesDataList}
                getOtherCityClick={getOtherCityClick}
              />
            ) : (
              <div className="h-full text-3xl flex items-center justify-center">
                <p>Other cites data not found</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
