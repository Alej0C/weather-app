import s from "./style.module.css";

const CurrentWeather = () => {
  return (
    <div className={s.weather}>
      <div className={s.top}>
        <div>
          <p className={s.city}>Belgrade</p>
          <p className={s.weatherDescription}>Sunny</p>
        </div>
        <img alt="weather" className={s.weatherIcon} src="icons/01d.png" />
      </div>
      <div className={s.bottom}>
        <p className={s.temperature}>18°C</p>
        <div className={s.details}>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Details</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Feels like</span>
            <span className={s.parameterValue}>22°C</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Wind</span>
            <span className={s.parameterValue}>2 m/s</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Humidity</span>
            <span className={s.parameterValue}>15%</span>
          </div>
          <div className={s.parameterRow}>
            <span className={s.parameterLabel}>Presure</span>
            <span className={s.parameterValue}>15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
