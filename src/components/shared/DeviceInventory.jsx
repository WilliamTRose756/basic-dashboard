import SaveAltIcon from "@mui/icons-material/SaveAlt";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ClearIcon from "@mui/icons-material/Clear";

function DeviceInventory({ datum }) {
  const { device, location, timestamp } = datum;
  return (
    <>
      {device === "6ATF12018" && (
        <Card sx={{ mb: 1 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#074d36" }} aria-label="recipe">
                KR
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Kuzi Rusere"
            subheader={timestamp}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Device ID: {device}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ClearIcon />
            </IconButton>
            <IconButton aria-label="share">
              <SaveAltIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}

      {device === "6ATF12016" && (
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#074d36" }} aria-label="recipe">
                WR
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="William Rose"
            subheader={timestamp}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Device ID: {device}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ClearIcon />
            </IconButton>
            <IconButton aria-label="share">
              <SaveAltIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </>
  );
}

export default DeviceInventory;
