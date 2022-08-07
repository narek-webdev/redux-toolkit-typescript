import { useSelector, useDispatch } from 'react-redux'

import { getTodos } from 'redux/slices/todos/todosSlice'

import { useEffect } from 'react'

import { getError } from 'redux/slices/error/errorSlice'
import { Link } from 'react-router-dom'
import { GET_TODOS_REQUESTED } from 'redux/sagas/todos/actionTypes'

function App() {
  const todos = useSelector(getTodos)

  const error = useSelector(getError)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GET_TODOS_REQUESTED })
  }, [])

  return (
    <ul>
      {todos.length &&
        todos.map((item, indx) => {
          return (
            <li key={indx}>
              <Link to={'/' + item.id}>{item.title}</Link>
            </li>
          )
        })}
    </ul>
  )
}

export default App
