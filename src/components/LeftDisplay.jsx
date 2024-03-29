import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import { Box } from "@mui/system";
import { useContext } from "react";
import LocationContext from "../context/LocationContext";

function Sidebar() {
  const { isSwitched, setIsSwitched } = useContext(LocationContext);

  const handleSwitchChange = () => {
    if (isSwitched) {
      setIsSwitched(false);
    } else {
      setIsSwitched(true);
    }
  };

  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
      flex={1}
    >
      <List>
        <ListItem>
          <img
            style={{ height: "100px", width: "100px" }}
            src={process.env.PUBLIC_URL + "/modjoul2.png"}
          />
        </ListItem>
        <ListItem disablePadding sx={{ mb: 2 }}>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mb: 2 }}>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mb: 2 }}>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mb: 2 }}>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <ListItemText primary="Global View" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mb: 2 }}>
          <Switch onChange={handleSwitchChange} color="warning" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
