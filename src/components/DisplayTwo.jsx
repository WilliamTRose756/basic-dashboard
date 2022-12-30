import { useEffect, useState } from "react";
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

  useEffect(() => {
    getData().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="inner-square">
          {/* {data.map((datum) => (
            <DisplayItem datum={datum} key={datum.device} />
          ))} */}
        </div>
        <div className="inner-square">Zone 2</div>
        <div className="inner-square">Zone 3</div>
        <div className="inner-square">Zone 4</div>
      </div>
    </>
  );
}

export default DisplayTwo;
