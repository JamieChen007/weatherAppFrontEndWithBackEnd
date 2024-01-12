import Cloudy from '../../components/WeatherIcon/assets/Cloudy.png';
import Hail from '../../components/WeatherIcon/assets/Hail.png';
import Rain from '../../components/WeatherIcon/assets/Rain.png';
import Snow from '../../components/WeatherIcon/assets/Snow.png';
import Sunny from '../../components/WeatherIcon/assets/Sunny.png';

export const getIcon = (weather) => {
  switch (weather) {
    case 'Clear':
      return Sunny;
    case 'Clouds':
      return Cloudy;
    case 'Hail':
      return Hail;
    case 'Rain':
      return Rain;
    case 'Snow':
      return Snow;
    default:
      return Cloudy;
  }
};
