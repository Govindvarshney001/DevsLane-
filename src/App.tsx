import React from 'react';
import { RefreshCw } from 'lucide-react';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoSection } from './components/TodoSection';
import { useTodos } from './hooks/useTodos';

function App() {
  const { pendingTodos, completedTodos, addTodo, toggleTodo, clearCompleted } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">XTodo</h1>
          <button
            onClick={clearCompleted}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200 font-medium"
            disabled={completedTodos.length === 0}
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Things to get done</h2>
          
          <TodoSection
            title="Things to do"
            todos={pendingTodos}
            onToggle={toggleTodo}
          />

          <AddTodoForm onAdd={addTodo} />

          <TodoSection
            title="Things done"
            todos={completedTodos}
            onToggle={toggleTodo}
          />

          {pendingTodos.length === 0 && completedTodos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No todos yet. Add one to get started!</p>
            </div>
          )}
        </div>

        {/* Stats */}
        {(pendingTodos.length > 0 || completedTodos.length > 0) && (
          <div className="mt-6 text-center text-sm text-gray-500">
            {pendingTodos.length} pending • {completedTodos.length} completed
          </div>
        )}
      </div>
    </div>
  );
}

export default App;