import './App.css';

import { useState } from 'react';
import data from './data.json';

import NewTaskForm from './components/NewTaskForm';
import TableList from './components/TableList';

function App() {
  const [tasks, setTask] = useState(data);

  const onTickedChange = (id) => {
    const stricked = tasks.map(task => {
      return task.id === id ? {...task, complete: !task.complete} : {...task};
    });
    setTask(stricked);
  }

  const onDeleteHandller = () => {
    const completed = tasks.filter(task => {
      return !task.complete;
    });
    setTask(completed);
  }

  const addTask = (newInput) => {
    const allTodos = [...tasks, {id: tasks.length + 1, task: newInput, complete: false}];
    setTask(allTodos);
  }

  return (
    <>
      <h1 className="heading">Todo List</h1>
      <NewTaskForm addTask={addTask} />
      <TableList newTask={tasks} onTickedChange={onTickedChange} onDeleteHandller={onDeleteHandller} />
    </>
  );
}

export default App;