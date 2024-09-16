import React from 'react';

export const Person = ({ person }) => {
  const { name, age, partnerName, isMarried, sex } = person;
  const getPartner = () => {
    if (isMarried) {
      if (sex === 'm') {
        return 'wife';
      }

      return 'husband';
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {person.age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {partnerName} is my {getPartner()}
      </p>
    </section>
  );
};
