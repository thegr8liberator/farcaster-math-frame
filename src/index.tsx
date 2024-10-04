import React, { useState } from 'react';
import { render } from 'react-dom';

const MathFrame: React.FC = () => {
  const [userInput, setUserInput] = useState<string>(''); // Track user input
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // null indicates no submission yet
  const [mathQuestion, setMathQuestion] = useState<{ question: string; answer: number }>({
    question: '2 + 2 = ?',
    answer: 4,
  });

  const handleSubmit = () => {
    const parsedInput = parseInt(userInput, 10);
    if (!isNaN(parsedInput)) {
      setIsCorrect(parsedInput === mathQuestion.answer);
    } else {
      setIsCorrect(false); // If input is not a number, consider it wrong
    }
  };

  const handleTryAgain = () => {
    // Reset state for a new attempt
    setUserInput('');
    setIsCorrect(null);
    setMathQuestion({
      question: '3 + 5 = ?',
      answer: 8,
    });
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {isCorrect === null ? (
        <>
          <h1>{mathQuestion.question}</h1>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your answer"
            style={{ padding: '10px', marginBottom: '10px' }}
          />
          <button onClick={handleSubmit} style={{ padding: '10px 20px' }}>Submit</button>
        </>
      ) : (
        <>
          <h1>{isCorrect ? 'Correct!' : 'Incorrect!'}</h1>
          <button onClick={handleTryAgain} style={{ padding: '10px 20px' }}>Try Again</button>
        </>
      )}
    </div>
  );
};

render(<MathFrame />, document.getElementById('root'));
