import Page from "./Page";
import FavouriteProvider from "./Provider/FavouriteProvider";
import LocationProvider from "./Provider/LocationProvider";
import WeatherProvider from "./Provider/WeatherProvider";

const App = () => {
  return (
    <LocationProvider>
      <FavouriteProvider>
        <WeatherProvider>
          <Page />
        </WeatherProvider>
      </FavouriteProvider>
    </LocationProvider>
  );
};

export default App;
