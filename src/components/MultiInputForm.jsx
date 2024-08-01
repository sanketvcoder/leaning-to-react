import React, { useState } from 'react';

export default function MultiInputForm() {
  const [people, setPeople] = useState([]);
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  const handleAddPerson = () => {
    const newPeople = [...people,formData];
    setPeople(newPeople);
    setFormData({ firstName: '', lastName: '' });
    console.log(newPeople);  // Log the updated array of people
  };

  return (
    <div>
      <input
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        type="text"
        value={formData.firstName}
        placeholder="First Name"
      />
      <input
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        type="text"
        value={formData.lastName}
        placeholder="Last Name"
      />
      <button onClick={handleAddPerson}>Add Person</button>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person.firstName} {person.lastName}</li>
        ))}
      </ul>
    </div>
  );
}
