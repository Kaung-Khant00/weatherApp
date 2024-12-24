import { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock';
export default function Form(weatherData){
const [value, setValue] = useState(new Date());
useEffect(() => {
  const interval = setInterval(() => setValue(new Date()), 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
  if (Object.keys(weatherData).length > 0) {
    const weatherIcon = weatherData?.weather?.[0]?.icon
    return (
      <div className="d-flex flex-column justify-content-center">
  <Clock value={value} />
        <div className="fs-3 font-weight-bold">{weatherData.name}{", "}{weatherData.sys.country}</div>
        <div className="fs-4"><img src={`https://openweathermap.org/img/wn/${weatherIcon && weatherIcon}.png`} alt="weather_Icon"/>{weatherData.main.temp}{" °C"}</div>
        <div>Humidity: {weatherData.main.humidity}</div>
        <div>Visibility: {weatherData.visibility / 1000} km</div>
      </div>
    );
  } else {
    return (
      <div>loading . . .</div>
    );
  }
}
