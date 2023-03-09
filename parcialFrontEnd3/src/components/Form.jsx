import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length < 3 || name.startsWith(' ') || fruit.length < 6) {
      onSubmit('Error! Por favor chequea que la información sea correcta');
    } else {
      onSubmit(null, name, fruit);
      setName('');
      setFruit('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Fruta favorita:
        <input type="text" value={fruit} onChange={(event) => setFruit(event.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
