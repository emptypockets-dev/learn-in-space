import Playground from '@agney/playground';
import '@reach/tabs/styles.css';
import { useState } from 'react';

function Question({ initialSnippet }) {
  return (
    <Playground
      key='example-1'
      id='example-1'
      initialSnippet={initialSnippet}
      defaultEditorTab='javascript'
      defaultResultTab='console'
      transformJs
    />
  );
}

function Answer({ initialSnippet }) {
  return (
    <Playground
      key='example-2'
      id='example-2'
      initialSnippet={initialSnippet}
      defaultEditorTab='javascript'
      defaultResultTab='console'
      transformJs
    />
  );
}

export default function LessonCard({ selectedCard, handleIncreaseLevel }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function handleClick() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div>
      <h1>{selectedCard.name}</h1>
      <h1>{selectedCard.level}</h1>
      <h2>Question</h2>
      <Question initialSnippet={selectedCard.snippetQuestion} />
      <button
        className='border-white p-4 border text-white mb-6'
        onClick={handleClick}
      >
        {!showAnswer ? 'Show Answer' : 'Hide answer'}
      </button>

      <button
        className='border-white p-4 border text-white mb-6'
        onClick={() => handleIncreaseLevel(selectedCard.id)}
      >
        Got it! Level up!
      </button>
      <div className={!showAnswer ? 'hidden' : null}>
        <h2>Answer</h2>
        <Answer initialSnippet={selectedCard.snippetAnswer} />
      </div>
    </div>
  );
}
