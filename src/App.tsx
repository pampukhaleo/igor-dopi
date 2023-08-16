import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

  type todolistsType = {
    id: string
    title: string
    filter: string
  }

  type Task = {
    id: string
    title: string
    isDone: boolean
  }

  type Tasks = {
    [key: string]: Task[]
  }

  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<todolistsType>>([
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ])

  let [tasks, setTasks] = useState<Tasks>({
    [todolistID1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
      { id: v1(), title: 'Rest API', isDone: false },
      { id: v1(), title: 'GraphQL', isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: 'HTML&CSS2', isDone: true },
      { id: v1(), title: 'JS2', isDone: true },
      { id: v1(), title: 'ReactJS2', isDone: false },
      { id: v1(), title: 'Rest API2', isDone: false },
      { id: v1(), title: 'GraphQL2', isDone: false },
    ]
  });

  function removeTask(id: string, todoListId: string) {
    const newTasks = tasks[todoListId]
    tasks[todoListId] = newTasks.filter(t => t.id !== id);
    setTasks({ ...tasks });
  }

  function addTask(title: string, todoListId: string) {
    const newTasks = tasks[todoListId]
    let task = { id: v1(), title: title, isDone: false };
    tasks[todoListId] = [task, ...newTasks];
    setTasks({ ...tasks });
  }

  function changeTaskStatus(taskId: string, isDone: boolean, todoListId: string) {
    const newTasks = tasks[todoListId]
    tasks[todoListId] = newTasks.map(t => t.id === taskId ? { ...t, isDone } : t)
    setTasks({ ...tasks });
  }

  const filteredTodoList = (someTasks: Task[], filter: string) => {
    let tasksForTodolist = someTasks;

    if (filter === 'active') {
      tasksForTodolist = someTasks.filter(t => !t.isDone);
    }
    if (filter === 'completed') {
      tasksForTodolist = someTasks.filter(t => t.isDone);
    }
    return tasksForTodolist
  }

  function changeTaskFilter(filter: FilterValuesType, todoListId: string) {
    setTodolists(todolists.map(t => todoListId === t.id ? { ...t, filter } : t))
  }

  return (
    <div className="App">
      {
        todolists.map(t => {

          return <Todolist title={ t.title }
                           tasks={ filteredTodoList(tasks[t.id], t.filter) }
                           removeTask={ removeTask }
                           changeFilter={ changeTaskFilter }
                           addTask={ addTask }
                           changeTaskStatus={ changeTaskStatus }
                           filter={ t.filter }
                           todoListId={ t.id }
          />
        })
      }

    </div>
  );
}

export default App;
