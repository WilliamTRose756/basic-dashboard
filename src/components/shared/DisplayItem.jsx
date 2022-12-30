function DisplayItem({ datum }) {
  return (
    <div className="inner-square">
      <p>{`${datum.device} is currently in ${datum.location}`}</p>
    </div>
  );
}

export default DisplayItem;
