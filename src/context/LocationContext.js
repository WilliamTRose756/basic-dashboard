import { useState, createContext, useEffect } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefresh, setIsRefresh] = useState(false);

  //   Fetch up to date data
  const getData = async () => {
    try {
      const response = await fetch("/data");
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  // Update data
  useEffect(() => {
    getData().then((response) => {
      setData(response);
      setIsLoading(false);
    });
  }, [isRefresh]);

  return (
    <LocationContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
        isRefresh,
        setIsRefresh,
        getData,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
