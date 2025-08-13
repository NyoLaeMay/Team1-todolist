'use client';
import { useState } from 'react';

type Props = {
  todo: { id: number; text: string; done: boolean };
  toggleDone: (id: number) => Promise<void>;
  remove: (id: number) => Promise<void>;
};

export default function TodoItem({ todo, toggleDone, remove }: Props) {
  const [isToggling, setIsToggling] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggle = async () => {
    if (isToggling) return;
    setIsToggling(true);
    try {
      await toggleDone(todo.id);
    } finally {
      setIsToggling(false);
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await remove(todo.id);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li className="flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center space-x-3 flex-1">
        <button
          onClick={handleToggle}
          disabled={isToggling}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            todo.done
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-400'
          } ${isToggling ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {todo.done && <span className="text-sm">✓</span>}
        </button>
        <span 
          className={`flex-1 text-lg transition-all duration-200 ${
            todo.done 
              ? 'line-through text-gray-500' 
              : 'text-gray-800'
          }`}
        >
          {todo.text}
        </span>
      </div>
      
      <div className="flex space-x-2 ml-4">
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isDeleting
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600 text-white hover:scale-105'
          }`}
        >
          {isDeleting ? '...' : 'Delete'}
        </button>
      </div>
    </li>
  );
}