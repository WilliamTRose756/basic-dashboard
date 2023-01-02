function DeviceInventory({ datum }) {
  const { device, location, timestamp } = datum;
  return (
    <>
      {device === "6ATF12018" && (
        <ul className="device-inventory-instance">
          <h3>Device ID: {device}</h3>
          <h3>Kuzi</h3>
          <li>Location: {location}</li>
          <li>Time Stamp: {timestamp}</li>
        </ul>
      )}

      {device === "6ATF12016" && (
        <ul className="device-inventory-instance">
          <h3>Device ID: {device}</h3>
          <h3>William</h3>
          <li>Location: {location}</li>
          <li>Time Stamp: {timestamp}</li>
        </ul>
      )}
    </>
  );
}

export default DeviceInventory;
