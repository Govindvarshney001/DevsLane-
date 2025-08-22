import { useState } from 'react';
import { Todo } from '../types/todo';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      text: 'Clean my computer',
      completed: false,
      createdAt: new Date(),
    },
    {
      id: '2',
      text: 'Buy a keyboard',
      completed: false,
      createdAt: new Date(),
    },
    {
      id: '3',
      text: 'Write an article about @xstate/test',
      completed: true,
      createdAt: new Date(),
    },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const pendingTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return {
    todos,
    pendingTodos,
    completedTodos,
    addTodo,
    toggleTodo,
    clearCompleted,
  };
};