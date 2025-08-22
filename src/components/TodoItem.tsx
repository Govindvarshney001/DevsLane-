import React from 'react';
import { Check } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <div 
      className="flex items-center gap-3 py-2 group cursor-pointer"
      onClick={() => onToggle(todo.id)}
    >
      <div className={`
        w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200
        ${todo.completed 
          ? 'bg-yellow-500 border-yellow-500' 
          : 'border-gray-300 hover:border-yellow-400 group-hover:border-yellow-400'
        }
      `}>
        {todo.completed && (
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
        )}
      </div>
      
      <span className={`
        text-gray-800 transition-all duration-200 flex-1
        ${todo.completed ? 'line-through opacity-60' : 'group-hover:text-gray-600'}
      `}>
        {todo.text}
      </span>
    </div>
  );
};