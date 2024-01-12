const WeatherIcon = ({ imgUrl, alt = "this is a weather icon", className }) => {
  return <img src={imgUrl} alt={alt} className={className} />;
};

export default WeatherIcon;
