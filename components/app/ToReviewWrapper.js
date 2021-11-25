import LessonCard from './LessonCard';
import LessonHeader from './LessonHeader';
import CardsList from './CardsList';
import LessonOverview from './LessonsOverview';
import LessonView from './LessonView';
import { useState } from 'react';
import { initialCards } from '../../public/data.js';
import NewCard from './NewCard';

export default function ToReviewWrapper() {
  const [selectedId, setSelectedId] = useState(0);
  const [cards, setCards] = useState(initialCards);
  const [open, setOpen] = useState(false);

  const handleSelectedId = (id) => {
    setSelectedId(id);
  };

  const handleIncreaseLevel = (id) => {
    setCards(
      cards.slice().map((card) => {
        if (card.id === id) {
          card.level = card.level + 1;
          return card;
        } else {
          return card;
        }
      })
    );
  };

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  let selectedCard = cards[selectedId];

  return (
    <div className='bg-black flex flex-1 min-h-screen'>
      <LessonOverview>
        <LessonHeader />
        <button
          className='text-white border mb-4 p-4'
          onClick={handleToggleOpen}
        >
          Add new lesson
        </button>
        <CardsList
          selectedId={selectedId}
          handleSelectedId={handleSelectedId}
          cards={cards}
        ></CardsList>
      </LessonOverview>
      <LessonView>
        <LessonCard
          selectedCard={selectedCard}
          handleIncreaseLevel={handleIncreaseLevel}
        />
      </LessonView>
      <NewCard open={open} handleToggleOpen={handleToggleOpen} />
    </div>
  );
}
