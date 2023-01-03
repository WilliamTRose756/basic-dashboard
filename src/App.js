import { Box, Stack } from "@mui/system";
import DisplayTwo from "./components/CenterDisplay";
import RightDisplay from "./components/RightDisplay";
import Sidebar from "./components/LeftDisplay";
import { LocationProvider } from "./context/LocationContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <LocationProvider>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <DisplayTwo />
          <RightDisplay />
        </Stack>
      </Box>
    </LocationProvider>
  );
}

export default App;
