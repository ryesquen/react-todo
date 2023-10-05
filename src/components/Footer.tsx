import React from 'react'

interface Props {
  activeCount: number
  todos: any[]
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount,
  todos,
  onClearCompleted
}) => {
  return (
    <footer>
      <span className="todo-count">
        <strong>{todos.length}</strong> tareas pendientes
      </span>
    </footer>
  )
}
