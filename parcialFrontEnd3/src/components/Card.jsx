const Card = ({ name, fruit, error }) => (
  <div>
    {error ? (
      <p>{error}</p>
    ) : (
      <>
        <p>Nombre: {name}</p>
        <p>Fruta favorita: {fruit}</p>
      </>
    )}
  </div>
);

export default Card;
