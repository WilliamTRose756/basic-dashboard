import { useContext } from "react";
import DisplayItem from "./shared/DisplayItem";
import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import LocationContext from "../context/LocationContext";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

function DisplayTwo() {
  const { isRefresh, setIsRefresh, data, isLoading } =
    useContext(LocationContext);

  const refreshButtonHandler = () => {
    if (isRefresh) {
      setIsRefresh(false);
      console.log("Set to False");
    } else {
      setIsRefresh(true);
      console.log("Set to True");
    }
  };

  const zone1Data = [];
  const zone2Data = [];
  const zone3Data = [];
  const zone4Data = [];
  const zone5Data = [];
  const zone6Data = [];

  if (data) {
    data.forEach((datum) => {
      if (datum.location === "zone_1" && datum.device.includes("ATF")) {
        zone1Data.push(datum);
      } else if (datum.location === "zone_2") {
        zone2Data.push(datum);
      } else if (datum.location === "zone_3") {
        zone3Data.push(datum);
      } else if (datum.location === "zone_4") {
        zone4Data.push(datum);
      } else if (datum.location === "zone_5") {
        zone5Data.push(datum);
      } else if (datum.location === "zone_6") {
        zone6Data.push(datum);
      }
    });
  }

  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Box flex={4}>
        <div style={{ textAlign: "center" }}>
          <h3>Warehouse: DSC3</h3>
        </div>
        <div className="container">
          <div className="inner-square">
            <ul style={{ paddingLeft: "0" }}>
              <h6>Zone 4</h6>
              {zone4Data.map((datum) => {
                return <DisplayItem datum={datum} key={datum.device} />;
              })}
            </ul>
          </div>
          <div className="inner-square">
            <ul style={{ paddingLeft: "0" }}>
              <h6>Zone 5</h6>
              {zone5Data.map((datum) => {
                return <DisplayItem datum={datum} key={datum.device} />;
              })}
            </ul>
          </div>
          <div className="inner-square">
            <ul style={{ paddingLeft: "0" }}>
              <h6>Zone 6</h6>
              {zone6Data.map((datum) => {
                return <DisplayItem datum={datum} key={datum.device} />;
              })}
            </ul>
          </div>
          <div className="inner-square">
            <ul style={{ paddingLeft: "0" }}>
              <h6>Zone 3</h6>
              {zone3Data.map((datum) => {
                return <DisplayItem datum={datum} key={datum.device} />;
              })}
            </ul>
          </div>
          <div className="inner-square">
            <ul style={{ paddingLeft: "0" }}>
              <h6>Zone 2</h6>
              {zone2Data.map((datum) => {
                return <DisplayItem datum={datum} key={datum.device} />;
              })}
            </ul>
          </div>
          <div className="inner-square">
            <ul style={{ paddingLeft: "0" }}>
              <h6>Zone 1</h6>
              {zone1Data.map((datum) => {
                return <DisplayItem datum={datum} key={datum.device} />;
              })}
            </ul>
          </div>
        </div>
        <div className="refresh-button-div">
          <Button variant="contained" onClick={refreshButtonHandler}>
            <RefreshIcon /> Update
          </Button>
        </div>
      </Box>
    </>
  );
}

export default DisplayTwo;
