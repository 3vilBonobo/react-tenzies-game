import { useState, useEffect } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

const App = () => {
  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  };
  const newDiceValues = () => {
    const randomDieValues = [];
    for (let i = 0; i < 10; i++) {
      randomDieValues.push(generateNewDie());
    }
    return randomDieValues;
  };

  const [dice, setDice] = useState(newDiceValues());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allDiceHeld = dice.every((die) => die.isHeld);
    const valueForComparison = dice[0].value;
    const allSameValue = dice.every((die) => die.value === valueForComparison);
    if (allDiceHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  const rollDice = () => {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(newDiceValues());
    }
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
      {tenzies && <Confetti />}
      <div className="game-container">
        <h1 className="title">Tenzies</h1>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die-container">{dieElements}</div>

        <button className="btn" type="button" onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </main>
  );
};

export default App;
