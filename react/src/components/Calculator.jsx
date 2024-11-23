import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const handleNumberClick = (num) => {
    setDisplay((prev) => (prev === '0' ? num : prev + num));
  };

  const handleOperationClick = (op) => {
    setOperation(op);
    setPrevValue(parseFloat(display));
    setDisplay('0');
  };

  const handleEquals = () => {
    const currentValue = parseFloat(display);
    let result;
    switch (operation) {
      case '+':
        result = prevValue + currentValue;
        break;
      case '-':
        result = prevValue - currentValue;
        break;
      case '*':
        result = prevValue * currentValue;
        break;
      case '/':
        result = prevValue / currentValue;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setOperation(null);
    setPrevValue(null);
  };

  const handleClear = () => {
    setDisplay('0');
    setOperation(null);
    setPrevValue(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Calculatrice</h2>
      <div className="w-64 bg-gray-200 p-4 rounded">
        <div className="bg-white p-2 mb-4 text-right text-2xl">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/'].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (typeof item === 'number') handleNumberClick(item.toString());
                else if (item === 'C') handleClear();
                else if (item === '=') handleEquals();
                else handleOperationClick(item);
              }}
              className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;