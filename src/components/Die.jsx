const Die = ({ value, holdDice, held }) => {
  const styles = { backgroundColor: held && '#59E391' };
  return (
    <div className="die" onClick={holdDice} style={styles}>
      {value}
    </div>
  );
};

export default Die;
