import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../Context";

const FavouriteList = () => {
  const { favourites } = useContext(FavouriteContext);
  const { setSelectedLocation } = useContext(LocationContext);
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-xl font-bold px-6">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer text-center">
        {favourites.length > 0
          ? favourites.map((fav) => (
              <li
                key={fav.location}
                className="hover:bg-gray-200 font-semibold"
              >
                <a onClick={() => setSelectedLocation(fav)}>{fav.location}</a>
              </li>
            ))
          : "No favourite items"}
      </ul>
    </div>
  );
};

export default FavouriteList;
