import React from 'react'; // <-- Add this line
import { Button, Frog, TextInput } from 'frog';

export const app = new Frog({ title: 'Math Quiz Frame' });

const randomQuestion = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b} = ?`, answer: a + b };
};

let currentQuestion = randomQuestion();

app.frame('/', (c) => {
  const { inputText, status } = c;

  const isCorrect = inputText == currentQuestion.answer;

  if (status === 'initial') {
    return c.res({
      image: (
        <div style={{ color: 'white', backgroundColor: 'black', display: 'flex', fontSize: 30, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <p>{currentQuestion.question}</p>
        </div>
      ),
      intents: [
        <TextInput placeholder="Your answer" />,
        <Button value="submit">Submit</Button>,
      ]
    });
  }

  return c.res({
    image: (
      <div style={{ color: 'white', backgroundColor: 'black', display: 'flex', fontSize: 30, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
      </div>
    ),
    intents: [
      <Button action="/">Try Again</Button>,
    ]
  });
});
