import React, { useContext } from "react";
import { RiSearchLine } from "react-icons/ri";
import { SearchLocContext } from "../../contexts/SearchLocState";
import { CurrentDataContext } from "../../contexts/CurrentDataState";
import { Link } from "react-router-dom";
import { DataListContext } from "../../contexts/DataListState";

const SearchBox = () => {
  const { handleLoc } = useContext(SearchLocContext);
  const { handleSearch } = useContext(CurrentDataContext);
  const { cities, countries } = useContext(DataListContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      autoComplete="off"
      className="flex justify-center items-center gap-4"
    >
      <input
        onChange={handleLoc}
        type="search"
        placeholder="Enter location"
        className="px-4 py-2 sm:w-auto w-20 rounded-full outline-4 outline-blue-600 text-black focus:absolute focus:w-[60vw] left-12 sm:focus:static sm:focus:w-auto"
        name=""
        id="search"
        list="data"
      />
      <datalist id="data">
        {cities.length > 0 &&
          cities.map((value, index) => (
            <option key={index} value={value.name}>
              {value.name}
            </option>
          ))}
        {countries.length > 0 &&
          countries.map((value, index) => (
            <option key={index} value={value.name}>
              {value.name}
            </option>
          ))}
      </datalist>
      <Link
        to="/info"
        onClick={handleSearch}
        className="text-xl border-2 border-white p-2 rounded-full hover:bg-white hover:text-black"
      >
        <RiSearchLine />
      </Link>
    </form>
  );
};

export default SearchBox;
