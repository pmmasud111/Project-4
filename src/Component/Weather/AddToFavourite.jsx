import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../Context";
import redfavouriteIcon from "../../assets/heart-red.svg";
import favouriteIcon from "../../assets/heart.svg";

const AddToFavourite = () => {
  const { addToFavourites, removeFromFavourutes, favourites } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  }, []);

  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location == location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourutes(location);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? redfavouriteIcon : favouriteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
