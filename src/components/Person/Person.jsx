export const Person = ({ person }) => {
  let spouse;

  if (person.sex === 'm' && person.isMarried) {
    spouse = `${person.partnerName} is my wife`;
  } else if (person.sex === 'f' && person.isMarried) {
    spouse = `${person.partnerName} is my husband`;
  } else {
    spouse = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className={`${person.age ? 'Person__age' : ''}`}>
        {person.age ? `I am ${person.age}` : ''}
      </p>
      <p className="Person__partner">{spouse}</p>
    </section>
  );
};
