function DeviceInventory({ datum }) {
  const { device, location, timestamp } = datum;
  return (
    <>
      <ul className="device-inventory-instance">
        <h3>Device ID: {device}</h3>
        <li>Location: {location}</li>
        <li>Time Stamp: {timestamp}</li>
      </ul>
    </>
  );
}

export default DeviceInventory;
