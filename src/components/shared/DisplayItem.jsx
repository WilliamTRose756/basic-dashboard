import PersonIcon from "@mui/icons-material/Person";
function DisplayItem({ datum }) {
  return (
    <>
      {datum.device === "6ATF12018" && (
        <h4 style={{ display: "flex", alignItems: "center", color: "orange" }}>
          <PersonIcon sx={{ color: "orange" }} />
          Kuzi
        </h4>
      )}
      {datum.device === "6ATF12016" && (
        <h4 style={{ display: "flex", alignItems: "center", color: "orange" }}>
          <PersonIcon sx={{ color: "orange" }} />
          William
        </h4>
      )}
    </>
  );
}

export default DisplayItem;
