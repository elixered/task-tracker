import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'
import AddTask from './components/AddTask';
function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "os",
        day: "jun 5th at 2:30pm",
        reminder: false
      },
      {
        id: 2,
        text: "cn",
        day: "jun 6th at 2:30pm",
        reminder: false
      },
      {
        id: 3,
        text: "oops",
        day: "jun 9th at 2:30pm",
        reminder: false
      }
    ]
  )

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([newTask, ...tasks]);
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length === 0 ? <h2>No tasks to show</h2> : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />}
    </div>
  );
}

export default App;
