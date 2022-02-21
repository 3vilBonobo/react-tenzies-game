import { useState } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';

const App = () => {
  const newDiceValues = () => {
    const randomDieValues = [];
    for (let i = 0; i < 10; i++) {
      randomDieValues.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid(),
      });
    }
    return randomDieValues;
  };

  const [dice, setDice] = useState(newDiceValues());

  const rollDice = () => {
    setDice(newDiceValues());
  };
  const holdDice = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const dieElements = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      holdDice={() => holdDice(die.id)}
      held={die.isHeld}
    />
  ));

  return (
    <main className="App">
      <div className="game-container">
        <h1 className="title">Tenzies</h1>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die-container">{dieElements}</div>

        <button className="btn" type="button" onClick={rollDice}>
          {'Roll'}
        </button>
      </div>
    </main>
  );
};

export default App;
