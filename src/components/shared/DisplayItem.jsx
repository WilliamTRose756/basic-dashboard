import { Avatar } from "@mui/material";
function DisplayItem({ datum }) {
  return (
    <>
      {datum.device === "6ATF12018" && (
        <h4 style={{ display: "flex", alignItems: "center", color: "#FFEC2D" }}>
          <Avatar sx={{ bgcolor: "#074d36" }}>KR</Avatar>
        </h4>
      )}
      {datum.device === "6ATF12016" && (
        <h4 style={{ display: "flex", alignItems: "center", color: "#074d36" }}>
          <Avatar sx={{ bgcolor: "#074d36" }}>WR</Avatar>
        </h4>
      )}
    </>
  );
}

export default DisplayItem;
