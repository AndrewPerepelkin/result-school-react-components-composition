import React, {useState} from "react";
import Counter from "./counter";

const CounterList = () => {
  const initialState = [
    {id:0, value: 0, name: 'Ненужная вещь'},
    {id:1, value: 4, name: 'Ложка'},
    {id:2, value: 0, name: 'Вилка'},
    {id:3, value: 0, name: 'Тарелка'},
    {id:4, value: 0, name: 'Набор минималиста'},
  ];
  
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(prevState => prevState.filter(c => c.id !== id));
  };  
  const handleIncrement = (id) => {
    setCounters(prevState => prevState.map(c => (c.id === id) ? {value:c.value++, ...c} : c));
  };
  const handleDecrement = (id) => {
    setCounters(prevState => prevState.map(c => (c.id === id) ? {value:c.value--, ...c} : c));
  };

  const handleReset = () => setCounters(initialState);
  
  return (
    <>
      {counters.map(count => (
        <Counter 
          key={count.id} 
          onDelete={handleDelete} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
          />
      ))}
      <button
        className='btn btn-primary m-2'
        onClick={handleReset}
      >
        Сброс
      </button>
    </>
  )
}

export default CounterList;