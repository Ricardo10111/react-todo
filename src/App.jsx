import { useState } from 'react'
export default function App() {
  // Lista de Todods
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  function addTask() {
    setTasks([...tasks, text])
  }

  function onSubmit(event) {
    event.preventDefault()
    addTask()
    setText('')
  }

  function removeTask(index) {
    // Metodo splice
    // tasks.splice(index, 1)
    // setTasks([...tasks])

    // Metodo filter
    // la explicacion del metodo filter es que se crea un nuevo array con los elementos que cumplan la condicion
    const newTasks = tasks.filter((task, idx) => idx !== index)
    setTasks(newTasks)
  }

  return (
    <main className='w-full min-h-screen flex flex-col '>
      <form
        className='flex flex-row gap-2 justify-center p-5'
        onSubmit={onSubmit}
      >
        <input
          type='text'
          className='p-2 rounded text-black w-full max-w-screen-sm text-center'
          placeholder='ingresa una tarea'
          required={true}
          value={text}
          onChange={(event) => {
            setText(event.target.value)
            console.log(event.target.value)
          }}
        />
        <button
          className='bg-white text-black px-3 rounded'
          // onClick={addTask}
        >
          +
        </button>
      </form>
      <div className='max-w-screen-sm w-full mx-auto p-3 flex flex-col gap-1'>
        {tasks.length === 0 && (
          <div className='text-white/50 text-center'>
            No hay tareas pendientes
          </div>
        )}
        {tasks.map((task, idx) => {
          return (
            <div
              key={`todo-${idx}`}
              className='bg-white/20 rounded p-4 flex flex-row justify-between'
            >
              <span></span>

              {task}
              <span
                className='text-[37px] text-white cursor-pointer select-none hover:transform hover:scale-110 transition-transform hover:text-red-700'
                onClick={() => removeTask(idx)}
              >
                x
              </span>
            </div>
          )
        })}
      </div>
    </main>
  )
}
