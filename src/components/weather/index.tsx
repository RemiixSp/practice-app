import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import cn from 'classnames';
import { useDebounce } from '../../hooks/useDebounce';
import styles from './weather.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchWeather } from '../../redux/weather/asyncAction';
import { Status } from '../../redux/utilTypes';

const Weather: React.FC = () => {
  const weather = useAppSelector((state) => state.weather);

  const dispatch = useAppDispatch();

  const getForecast = (): void => {
    navigator.geolocation.getCurrentPosition((position) => {
      const getWeather = async (): Promise<any> => {
        try {
          dispatch(
            fetchWeather({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            }),
          );
        } catch (error) {
          toast.error('Error while getting forecast');
        }
      };
      getWeather();
    });
  };

  useEffect(() => {
    getForecast();
  }, []);

  return (
    <div className={cn(styles.weatherWidget)}>
      <h3 className={styles.weatherHeader}>{`Weather in ${weather.name}`}</h3>

      {weather.status === Status.SUCCESS ? (
        <div className={styles.weatherInfo}>
          <div className={styles.mainInfo}>
            <h4>Temperature</h4>
            <ul className={styles.listOfWeather}>
              <li className={styles.mainTemp}>{`${weather.main.temp} °C`}</li>
              <div className={styles.additionalInfo}>
                <li className={styles.eachAdditionalProp}>
                  {` Feels like ${weather.main.feels_like} °C`}
                </li>
                <li className={styles.eachAdditionalProp}>
                  {`Max today ${weather.main.temp_max} °C`}
                </li>
                <li className={styles.eachAdditionalProp}>
                  {`Min today ${weather.main.temp_min} °C`}
                </li>
              </div>
              <h4>Humidity and preassure</h4>
              <div className={styles.additionalInfo}>
                <li className={cn(styles.eachAdditionalProp, styles.humidity)}>
                  {`Today humidity is ${weather.main.humidity} RH`}
                </li>
                <li className={cn(styles.eachAdditionalProp, styles.humidity)}>
                  {`And the pressure is ${weather.main.pressure} f/a`}
                </li>
              </div>
            </ul>
          </div>
          <div className={styles.windInfo}>
            <h4>Wind information</h4>
            <ul>
              <li>{`Wind speed ${weather.wind.speed} m/s`}</li>
              <li>{`Wind direction ${weather.wind.deg} degrees`}</li>
            </ul>
          </div>
        </div>
      ) : (
        <>Loading</>
      )}

      <ToastContainer />
    </div>
  );
};

export default Weather;
