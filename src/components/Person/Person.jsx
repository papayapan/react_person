export const Person = ({ person }) => {
  const getPartnerText = () => {
    if (person.isMarried) {
      const partnerType = person.sex === 'm' ? 'wife' : 'husband';

      return `${person.partnerName} is my ${partnerType}`;
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{getPartnerText()}</p>
    </section>
  );
};
