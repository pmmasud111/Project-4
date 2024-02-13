import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../Context";

const useWeather = () => {
  const { selectedLocation } = useContext(LocationContext);
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const FetchingData = async (latitude, longitude) => {
    try {
      setLoading({
        state: true,
        message: "Loading...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const erroMessage = `Fetching Data field: ${response.status}`;
        throw new Error(erroMessage);
      }

      const data = await response.json();
      const updateData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updateData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location...",
    });

    if (
      selectedLocation &&
      selectedLocation.latitude &&
      selectedLocation.longitude
    ) {
      FetchingData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        FetchingData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation]);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
