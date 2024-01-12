import Clouds from '../../components/WeatherCard/components/CurrentCity/assets/Cloudy_day_background.png';
import Hail from '../../components/WeatherCard/components/CurrentCity/assets/Hail_background.png';
import Rain from '../../components/WeatherCard/components/CurrentCity/assets/Rain_background.png';
import Snow from '../../components/WeatherCard/components/CurrentCity/assets/Snow_background.png';
import Clear from '../../components/WeatherCard/components/CurrentCity/assets/Sunny day_background.png';

export const getBg = (weather) => {
  switch (weather) {
    case 'Clear':
      return Clear;
    case 'Clouds':
      return Clouds;
    case 'Hail':
      return Hail;
    case 'Rain':
      return Rain;
    case 'Snow':
      return Snow;
    default:
      return Clouds;
  }
};
