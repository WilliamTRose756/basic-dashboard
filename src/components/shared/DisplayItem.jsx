function DisplayItem({ datum }) {
  return (
    <>
      {datum.device === "6ATF12018" && <h4>Kuzi</h4>}
      {datum.device === "6ATF12016" && <h4>William</h4>}
    </>
  );
}

export default DisplayItem;
