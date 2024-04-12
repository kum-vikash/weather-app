import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchLocContext } from "./SearchLocState";

export const CurrentDataContext = createContext();
const CurrentDataState = ({ children }) => {
  const { loc } = useContext(SearchLocContext);
  const [search, setSearch] = useState(0);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const key = import.meta.env.VITE_WEATHER_API_KEY;
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${loc}&days=8`;
    if (search != 0) {
      let resp = axios.get(url);
      resp
        .then((res) => {
          setTimeout(() => {
            setData(res.data);
            setError(false);
          }, 1500);
        })
        .catch((err) => {
          // console.log(err.response.data.error.message);
          setTimeout(() => {
            setError(true);
          }, 2000);
        });
    } else {
      setError(true);
    }
  }, [search]);
  const handleSearch = () => {
    setData({});
    setError(false);
    setSearch(search + 1);
  };
  return (
    <CurrentDataContext.Provider value={{ data, search, error, handleSearch }}>
      {children}
    </CurrentDataContext.Provider>
  );
};

export default CurrentDataState;
