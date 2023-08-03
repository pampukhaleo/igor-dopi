import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Todo } from './Todo';

export type DataPropsType = {
  userId: number
  id: number
  title: string
  completed: boolean
  onChangeHandler: (id: number) => void
}

function App() {

  const [data, setData] = useState<DataPropsType[]>([]);

  const onChange = (id: number, status: boolean) => {
    setData(prevState => {
      return prevState.map(el => {
        if (el.id === id) {
          return {
            ...el,
            completed: status
          }
        }
        return el
      })
    })
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <div className="App">
      <ul>
        {data.length && data.map(el => {
          return (
            <Todo {...el} callBack={onChange}/>
          )
        })}
      </ul>
    </div>
  );
}

export default App;

