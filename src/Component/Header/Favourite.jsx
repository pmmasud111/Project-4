import favouriteImg from "../../assets/heart.svg";

const Favourite = ({ onShow }) => {
  return (
    <div className="py-2 p-4 hover:bg-black/30 cursor-pointer flex gap-3 items-center rounded-md transition-all">
      <img src={favouriteImg} alt="" />
      <span onClick={onShow} className="text-white">
        Favourite Locations
      </span>
    </div>
  );
};

export default Favourite;
