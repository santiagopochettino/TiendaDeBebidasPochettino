//Componente de practica en la clase 4
//Ejercicio trabajado en clase.
import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);
  const [lastDate, setLastDate] = useState('');

  const addClick = (event) => {
    setCount(count + 1);

    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    setLastDate(new Date().toLocaleDateString('en-US', options));
  };

  return (
    <div>
      <p>
        <h1>Contador de clicks</h1>
      </p>
      <br />
      <p>
        <h2>Clicks realizados: {count}</h2>
      </p>
      <p>Hora del último click: {lastDate}</p>
      <br />
      <button onClick={addClick}>Click!</button>
    </div>
  );
}
export default  Contador