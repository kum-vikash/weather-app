import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataListContext = createContext();
const DataListState = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    let url1 =
      "https://gist.githubusercontent.com/almost/7748738/raw/575f851d945e2a9e6859fb2308e95a3697bea115/countries.json";
    let resp1 = axios.get(url1).then((res) => {
      setCountries(res.data);
    });
    let url2 =
      "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json";
    let resp2 = axios.get(url2).then((res) => {
      setCities(res.data);
    });
  }, []);
  return (
    <DataListContext.Provider value={{ cities, countries }}>
      {children}
    </DataListContext.Provider>
  );
};

export default DataListState;
