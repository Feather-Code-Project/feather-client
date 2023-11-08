import searchIcon from "../../../public/icons/search.svg";

const MentorSearchBar = () => {
  return (
    <div className="flex items-center w-3/5 h-[50px] ml-[80px] border-2 rounded-full px-5 shadow-md">
      <input type="text" className="w-full h-full outline-none" />
      <button className="ml-2">
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
};

export default MentorSearchBar;
