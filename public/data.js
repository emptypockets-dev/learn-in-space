const snippetQuestion = {
  javascript: `/******************** 
  Object Destructuring
  ********************/
       
  const infinityStoneColors = {
    space: "blue",
    mind: "yellow",
    reality: "red",
    power: "purple",
    time: "green",
    soul: "orange"
  };
   
  // QUESTION
  // Can you create a const that contains
  // just the color of the mind stone?
  
  // BONUS 
  // Rename your const to be more specific
  `,
};

const snippetAnswer = {
  javascript: `/******************** 
  Object Destructuring
  ********************/
     
  const infinityStoneColors = {
    space: "blue",
    mind: "yellow",
    reality: "red",
    power: "purple",
    time: "green",
    soul: "orange"
  };
     
  // REVIEW
  // Can you create a const that contains
  // just the color of the mind stone?
  
  // ANSWER
  const { mind } = infinityStoneColors;
  console.log(mind); // "yellow"
  
  // BONUS ANSWER
  // Rename your const to be more specific
  const { mind: mindStoneColor } = infinityStoneColors;
  console.log(mindStoneColor); // "yellow"
  `,
};

export const initialCards = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A',
    level: 1,
    snippetQuestion: snippetQuestion,
    snippetAnswer: snippetAnswer,
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa',
    level: 1,
    snippetQuestion: snippetQuestion,
    snippetAnswer: snippetAnswer,
  },
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji',
    level: 1,
    snippetQuestion: snippetQuestion,
    snippetAnswer: snippetAnswer,
  },
  {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment:
      'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71',
    level: 1,
    snippetQuestion: snippetQuestion,
    snippetAnswer: snippetAnswer,
  },
  {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l',
    level: 1,
    snippetQuestion: snippetQuestion,
    snippetAnswer: snippetAnswer,
  },
];
