import BackgroundImage from './components/BackgroundImage';
import WeatherCard from './components/WeatherCard';
import bg from './assets/bg.png';
import { useEffect, useState } from 'react';
import TipsModal from './components/UI/TipsModal/';
import { fetchData } from './apis/fetchData';
import { formatForecastData } from './apis/helper/formatForecastData';
import { getSingleCityData } from './apis/helper/getSingleCityData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [citiesList, setCitiesList] = useState([
    'sydney',
    'melbourne',
    'shanghai',
    'guangzhou',
    'brisbane',
  ]);

  useEffect(() => {
    const fetchAllAndSetState = async () => {
      try {
        if (citiesList.length > 0) {
          const citiesListData = await Promise.all(
            citiesList.map(async (city) => {
              // const singleCityData = await getSingleCityData(city);
              const singleCityData = await fetch(
                `http://localhost:3001/api/v1/getSingleCityData/?cityName=${city}`
              ).then((res) => res.json());
              return singleCityData;
            })
          );
          setWeatherDataList(citiesListData);
          // const forecastFetchResult = await fetchData(null, citiesList[0]);
          const forecastFetchResult = await fetch(
            `http://localhost:3001/api/v1/getForecastData/?cityName=${citiesList[0]}`
          ).then((res) => res.json());
          const forecastData = formatForecastData(forecastFetchResult);
          setForecastData(forecastData);
          setIsLoading(false);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchAllAndSetState();
  }, [citiesList]);

  const getSearchCity = async (value) => {
    // const result = await fetchData(value);
    const result = await fetch(`http://localhost:3001/api/v1/getSingleCityData/?cityName=${value}`);
    // console.log('result', result);
    if (result.status !== 200) {
      setIsError(true);
      return;
    }
    // if (!result) {
    //   setIsError(true);
    //   return;
    // }

    const newCitiesList = [...citiesList];
    newCitiesList.pop();
    newCitiesList.unshift(value);
    setCitiesList(newCitiesList);
  };

  const getOtherCityClick = (value) => {
    const newCitiesList = [...citiesList];
    const newCitiesFilterList = newCitiesList.filter(
      (city) => city.toLowerCase() !== value.toLowerCase()
    );
    newCitiesFilterList.unshift(value);
    setCitiesList(newCitiesFilterList);
  };

  const onTipsConfirmBtnClick = () => {
    setIsError(false);
  };

  return (
    <BackgroundImage
      imageUrl={bg}
      alt="cloud"
      className={
        'min-h-[800px] h-screen max-md:h-full max-md:py-6 max-xs:py-3 bg-cover bg-center flex items-center font-alimama'
      }
    >
      {isError && (
        <TipsModal
          tips="City not found, please double check."
          onTipsConfirmBtnClick={onTipsConfirmBtnClick}
        />
      )}
      <WeatherCard
        isLoading={isLoading}
        weatherDataList={weatherDataList}
        getSearchCity={getSearchCity}
        forecastData={forecastData}
        getOtherCityClick={getOtherCityClick}
      />
    </BackgroundImage>
  );
}

export default App;
