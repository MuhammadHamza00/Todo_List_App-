import React, { useEffect, useState, useContext } from 'react';
import themeContext from './MyContext'

export default function Tasks() {
  const myStyle = {
    color: 'white',
    backgroundColor: 'black',
  };

  const myStyle2 = {
    color: 'white',
    backgroundColor: '#222e50',
  };
  const myStyle3 ={
    color: '#fccb06',

  }
  const { themeValue, setThemeValue } = useContext(themeContext);

  const [taskData, setTaskData] = useState('');
  const [edituse, setEditUse] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleInputChange = (e) => {
    setTaskData(e.target.value);
  };

  function handleAddTask(e) {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const newObj = {
      id: Date.now(),
      taskName: taskData,
      date: formattedDate,
      complete: false,
      isEditing: false,
    };
    const updatedTasks = [...tasks, newObj];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    setTaskData('');
  }

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  function deleteTask(id) {
    const updatedList = tasks.filter((task) => task.id !== id);
    setTasks(updatedList);
    localStorage.setItem('tasks', JSON.stringify(updatedList));
  }

  function editTask(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isEditing: true,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function editData(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id && task.isEditing) {
        task.taskName = edituse;
        task.isEditing = false;
      }
      return task;
    });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }
  function checked(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (task.complete) {
          task.complete = false;
        } else {
          task.complete = true;
        }
      }
      return task;
    });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  return (
    <div className='tasks'>
      <ul style={themeValue === 'dark' ? myStyle : {}}>
        <div className="heading"style={themeValue === 'dark' ? myStyle3 : {}}><i className="bi bi-house"></i><h1>Tasks</h1></div>
        {tasks.map((item) => (
          <li key={item.id} className="task"style={themeValue === 'dark' ? myStyle2 : {}}>
            <i className="bi bi-circle" id="circle" onClick={() => checked(item.id)}></i>
            {item.complete ? (
              <p id="striked">{item.taskName}</p>
            ) : (
              <p>{item.taskName}</p>
            )}
            {item.isEditing ? (
              <div className="edit" id='edit'>
                <input
                  type="text"
                  value={edituse}
                  onChange={(e) => setEditUse(e.target.value)}
                  id='editInput'
                />
                <i
                  className="bi bi-plus-square"
                  id="adddataedit"
                  onClick={() => editData(item.id)}
                ></i>
              </div>
            ) : (
              <>
                <i
                  className="bi bi-pencil-square eddel"
                  id="editarea"
                  onClick={() => editTask(item.id)}
                ></i>
                <i
                  className="bi bi-trash eddel" id='delete'
                  onClick={() => deleteTask(item.id)}
                ></i>
              </>
            )}
          </li>
        ))}
      </ul>
      <form className="get_input" onSubmit={handleAddTask}style={themeValue === 'dark' ? myStyle : {}}>
        <i className="bi bi-circle"></i>
        <input
          type="text"
          placeholder='Enter Task Here'
          value={taskData}
          onChange={handleInputChange}
          style={themeValue === 'dark' ? myStyle : {}}
        />
        <button type='submit' id="addBtn"><i class="bi bi-plus" id="add"></i></button>
      </form>
    </div>
  );
}
