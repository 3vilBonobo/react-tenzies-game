import Die from './components/Die';

const App = () => {
  let randomDieValues = [];
  for (let i = 0; i < 10; i++) {
    randomDieValues.push(Math.floor(Math.random() * 6 + 1));
  }

  const dieElements = randomDieValues.map((value, idx) => (
    <Die value={value} key={idx} />
  ));
  const rollDice = () => {
    console.log('rolled');
  };
  return (
    <main className="App">
      <div className="game-container">
        {dieElements}
        <button className="btn" type="button" onClick={rollDice}>
          {'Roll'}
        </button>
      </div>
    </main>
  );
};

export default App;
