import { useContext, useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import Header from "./Component/Header/Header";
import WeatherBoard from "./Component/Weather/WeatherBoard";
import { WeatherContext } from "./Context";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

const Page = () => {
  const [climateImage, setClimateImage] = useState("");
  const { loading, weatherData } = useContext(WeatherContext);

  const getBackgroundImage = (climate) => {
    switch (climate) {
      case "rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  };

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="flex items-center justify-center h-screen">
          <MoonLoader
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url("${climateImage}")` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <WeatherBoard />
        </div>
      )}
    </>
  );
};

export default Page;
