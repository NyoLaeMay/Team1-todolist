'use client';
import { useState } from 'react';

type Props = {
  todo: { id: number; text: string; done: boolean; deadline?: string };
  toggleDone: (id: number) => Promise<void>;
  remove: (id: number) => Promise<void>;
  updateTodoText: (id: number, newText: string) => Promise<void>;
  updateTodoDeadline: (id: number, newDeadline: string) => Promise<void>;
  saveTodoEdits: (id: number, newText: string, newDeadline: string) => Promise<void>;
  formatDeadlineTimer: (deadline: string) => string;
};

export default function TodoItem({ todo, toggleDone, remove, updateTodoText, updateTodoDeadline, saveTodoEdits, formatDeadlineTimer }: Props) {
  const [isToggling, setIsToggling] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDeadline, setEditDeadline] = useState(todo.deadline || '');

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

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
    setEditDeadline(todo.deadline || '');
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleEditSave = async () => {
    await saveTodoEdits(todo.id, editText.trim(), editDeadline);
    setIsEditing(false);
  };

  const handleEditKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      await handleEditSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditText(todo.text);
      setEditDeadline(todo.deadline || '');
    }
  };

  return (
    <li className={`grid grid-cols-[auto_1fr_auto] items-start gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-200`}>
      {/* Left: Toggle */}
      <div className="flex items-start">
        <button
          onClick={handleToggle}
          disabled={isToggling}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            todo.done
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 dark:border-gray-600 hover:border-green-400'
          } ${isToggling ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {todo.done && <span className="text-sm">✓</span>}
        </button>
      </div>

      {/* Center: Content */}
      <div className="min-w-0">
        {isEditing ? (
          <div className="space-y-2 min-w-0">
            <input
              className="w-full min-w-0 text-lg border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={editText}
              onChange={handleEditChange}
              onKeyDown={handleEditKeyDown}
              autoFocus
            />
            <div className="flex gap-2 min-w-0">
              <input
                type="datetime-local"
                value={editDeadline}
                onChange={(e) => setEditDeadline(e.target.value)}
                className="flex-1 min-w-0 text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 focus:outline-none focus:border-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              <button
                onClick={() => setEditDeadline('')}
                className={`px-2 py-1 text-xs rounded border transition-colors ${
                  editDeadline 
                    ? 'border-red-300 dark:border-red-600 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20' 
                    : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                disabled={!editDeadline}
              >
                {editDeadline ? 'Clear' : 'Cleared'}
              </button>
            </div>
            {!editDeadline && todo.deadline && (
              <div className="text-xs text-orange-600 dark:text-orange-400">
                ⚠️ Deadline will be removed when saved
              </div>
            )}
          </div>
        ) : (
          <div className="min-w-0">
            <span
              className={`text-lg transition-all duration-200 break-words ${
                todo.done ? 'line-through text-gray-500 dark:text-gray-500' : 'text-gray-800 dark:text-gray-100'
              }`}
            >
              {todo.text}
            </span>
            {todo.deadline && (
              <div className={`text-xs mt-1 ${
                formatDeadlineTimer(todo.deadline) === 'Overdue' 
                  ? 'text-red-500 dark:text-red-400 font-medium' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                ⏰ {formatDeadlineTimer(todo.deadline)}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right: Actions */}
      <div className={`flex flex-wrap gap-2 justify-end ${isEditing ? 'self-start mt-1' : 'items-center'}`}>
        {isEditing ? (
          <>
            <button
              onClick={handleEditSave}
              className="px-3 py-2 rounded-lg text-sm font-medium bg-green-500 hover:bg-green-600 text-white transition-all duration-200"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditText(todo.text);
                setEditDeadline(todo.deadline || '');
              }}
              className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-500 hover:bg-gray-600 text-white transition-all duration-200"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEdit}
            className="px-3 py-2 rounded-lg text-sm font-medium bg-yellow-400 hover:bg-yellow-500 text-white transition-all duration-200"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isDeleting
              ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-300 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600 text-white hover:scale-105'
          }`}
        >
          {isDeleting ? '...' : 'Delete'}
        </button>
      </div>
    </li>
  );
}