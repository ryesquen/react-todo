import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo } from './types'

const mockTodos: Todo[] = [
  {
    id: 1,
    title: 'Learn React',
    completed: true,
  },
  {
    id: 2,
    title: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 3,
    title: 'Learn GraphQL',
    completed: false,
  },
]

export const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleCompleted = ({ id }: TodoId): void => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo !== undefined) {
      todo.completed = !todo.completed
      setTodos([...todos])
    }
  }

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handleRemove}
        onCompletedTodo={handleCompleted}
        todos={todos}
      />
    </div>
  )
}
