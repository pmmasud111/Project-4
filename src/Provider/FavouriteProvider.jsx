import { FavouriteContext } from "../Context";
import useLocalStorege from "../Hooks/useLocalStorege";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorege("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavourutes = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ addToFavourites, removeFromFavourutes, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
