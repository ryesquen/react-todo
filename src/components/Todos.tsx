import { type TodoId, type ListTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onCompletedTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompletedTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(({ id, title, completed }) => (
        <li key={id} className={completed ? 'completed' : ''}>
          <Todo
            key={id}
            id={id}
            title={title}
            completed={completed}
            onRemoveTodo={onRemoveTodo}
            onCompletedTodo={onCompletedTodo}
          />
        </li>
      ))}
    </ul>
  )
}
