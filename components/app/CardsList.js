export default function CardsList({ selectedId, handleSelectedId, cards }) {
  return (
    <ul className='text-white'>
      {cards.map((card) => {
        return (
          <li
            key={card.id}
            className={selectedId === card.id && 'bg-gray-700'}
            onClick={() => handleSelectedId(card.id)}
          >
            <div>
              <h2>Lesson {card.id}</h2>
              <p>some additional text</p>
              <p>{selectedId === card.id && 'selected'}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
