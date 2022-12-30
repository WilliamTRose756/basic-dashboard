import { useEffect, useState } from "react";
import DeviceInventory from "./DeviceInventory";
import DisplayItem from "./shared/DisplayItem";

const getData = async () => {
  try {
    const response = await fetch("/data");
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

function DisplayTwo() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData().then((response) => {
      setData(response);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <h2 style={{ textAlign: "center" }}>Loading...</h2>
  ) : (
    <>
      <div className="main-container">
        <div className="device-inventory-container">
          {data &&
            data.map((datum) => {
              return <DeviceInventory datum={datum} key={datum.device} />;
            })}
        </div>
        <div className="container">
          <div className="inner-square">
            <ul style={{ paddingLeft: "0" }}>
              {data &&
                data.map((datum) => {
                  return (
                    datum.location === "zone_1" && (
                      <DisplayItem datum={datum} key={datum.device} />
                    )
                  );
                })}
            </ul>
          </div>

          <div className="inner-square">
            <ul style={{ paddingLeft: "0" }}>
              {data &&
                data.map((datum) => {
                  return (
                    datum.location === "zone_2" && (
                      <DisplayItem datum={datum} key={datum.device} />
                    )
                  );
                })}
            </ul>
          </div>

          <div className="inner-square">
            <ul style={{ paddingLeft: "0" }}>
              {data &&
                data.map((datum) => {
                  return (
                    datum.location === "zone_3" && (
                      <DisplayItem datum={datum} key={datum.device} />
                    )
                  );
                })}
            </ul>
          </div>

          <div className="inner-square">
            <ul style={{ paddingLeft: "0" }}>
              {data &&
                data.map((datum) => {
                  return (
                    datum.location === "zone_4" && (
                      <DisplayItem datum={datum} key={datum.device} />
                    )
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayTwo;
