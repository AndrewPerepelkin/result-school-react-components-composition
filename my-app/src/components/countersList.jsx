import React from "react";
import Counter from "./counter";

const CounterList = () => {
  const counters = [
    {id:0, value: 0, name: 'Ненужная вещь'},
    {id:1, value: 4, name: 'Ненужная вещь'},
    {id:2, value: 0, name: 'Ненужная вещь'},
    {id:3, value: 0, name: 'Ненужная вещь'},
    {id:4, value: 0, name: 'Ненужная вещь'},
  ]
  return (
    <>
      {counters.map(count => (
        <Counter key={count.id} {...count} />
      ))}
    </>
  )
}

export default CounterList;