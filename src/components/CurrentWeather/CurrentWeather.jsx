import s from "./style.module.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className={s.weather}>
      <div className={s.top}>
        <div>
          <p className={s.city}>{data.city}</p>
          <p className={s.weatherDescription}>{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className={s.weatherIcon}
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className={s.bottom}>
        <p className={s.temperature}>{Math.round(data.main.temp)}°C</p>
        <div className={s.details}>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Details</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Feels like</span>
            <span className={s.parameterValue}>
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Wind</span>
            <span className={s.parameterValue}>{data.wind.speed} m/s</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Humidity</span>
            <span className={s.parameterValue}>{data.main.humidity}%</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Presure</span>
            <span className={s.parameterValue}>{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
