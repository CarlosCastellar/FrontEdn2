import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');

  const [submited, setSubmited] = useState(false);


  const handleSubmit = (error, name, fruit) => {
    setError(error);
    setName(name);
    setFruit(fruit);
    setSubmited(true)
  };

  return (
    <div>
      <Header title="Mi fruta favorita" />
      <hr />
      <Form onSubmit={handleSubmit} />
      <hr />
      {submited==true ? <Card name={name} fruit={fruit} error={error} /> : undefined}
    </div>
  );
};

export default App;
