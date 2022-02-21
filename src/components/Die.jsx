const Die = ({ value, holdValue }) => {
  return (
    <div className="die" onClick={holdValue}>
      {value}
    </div>
  );
};

export default Die;
