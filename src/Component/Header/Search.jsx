import { useContext, useEffect, useRef } from "react";
import { LocationContext } from "../../Context";
import { getLocationByName } from "../../Data/LocationData";
import { useDebounce } from "../../Hooks/useDebounce";

const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext);
  const focusRef = useRef();

  useEffect(() => {
    focusRef.current.focus();
  });

  const doSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchedLocation });
  }, 1000);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          ref={focusRef}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Search;
