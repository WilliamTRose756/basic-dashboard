import { Box } from "@mui/system";
import { useContext } from "react";
import LocationContext from "../context/LocationContext";
import DeviceInventory from "./shared/DeviceInventory";
function RightDisplay() {
  const { data } = useContext(LocationContext);

  return (
    <Box flex={1}>
      <div>
        <h3>Selected Devices:</h3>
        {data &&
          data.map((datum) => {
            return <DeviceInventory datum={datum} key={datum.device} />;
          })}
      </div>
    </Box>
  );
}

export default RightDisplay;
