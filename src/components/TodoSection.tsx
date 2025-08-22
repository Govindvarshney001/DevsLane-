import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from '../types/todo';

interface TodoSectionProps {
  title: string;
  todos: Todo[];
  onToggle: (id: string) => void;
}

export const TodoSection: React.FC<TodoSectionProps> = ({ title, todos, onToggle }) => {
  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium text-gray-800 mb-4">{title}</h2>
      <div className="space-y-1">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};