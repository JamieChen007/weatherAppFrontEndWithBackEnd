import { useRef, useState } from "react";
import Button from "../../../UI/Button/";

const SearchBar = ({ getSearchCity }) => {
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef();

  const onSearchBtnClick = () => {
    if (searchInput === "") {
      inputRef.current.focus();
      return;
    }
    getSearchCity(searchInput);
    setSearchInput("");
    inputRef.current.focus();
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      onSearchBtnClick();
    }
  };

  return (
    <div className="relative h-16 w-1/2 px-2 max-xl:w-2/3 max-lg:w-full max-md:px-0">
      <input
        ref={inputRef}
        type="text"
        autoFocus
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={onEnterPress}
        placeholder="Search for a city"
        className="absolute h-full w-full outline-none text-2xl px-4 rounded-2xl max-xs:text-xl"
      />
      <Button
        onClick={onSearchBtnClick}
        className="absolute right-0 top-2 max-md:right-2"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
