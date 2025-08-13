# 🚀 Fullstack Todo List App

A modern, responsive Todo List application built with **Next.js 14**, featuring a complete REST API backend and beautiful React frontend.

## ✨ Features

- ✅ **Add new tasks** with real-time validation
- 📝 **Display all tasks** with beautiful UI
- 🔄 **Toggle task completion** with smooth animations
- 🗑️ **Delete individual tasks** with confirmation
- 🧹 **Clear all tasks** with one click
- 📱 **Responsive design** for mobile and desktop
- ⚡ **Real-time updates** via API calls
- 🎨 **Modern UI/UX** with Tailwind CSS
- 🔒 **Error handling** and loading states

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **In-memory storage** - Fast data persistence (resets on server restart)
- **RESTful API** - Standard HTTP methods (GET, POST, PATCH, DELETE)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd todo-list-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
todo-list-app/
├── app/
│   ├── api/
│   │   └── todos/
│   │       ├── route.ts              # GET, POST, DELETE /api/todos
│   │       └── [id]/
│   │           └── route.ts          # PATCH, DELETE /api/todos/:id
│   ├── components/
│   │   └── TodoItem.tsx              # Individual todo item component
│   ├── lib/
│   │   └── todos.ts                  # Shared data store and helpers
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Main page component
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/todos` | Fetch all todos |
| `POST` | `/api/todos` | Create a new todo |
| `PATCH` | `/api/todos/:id` | Update todo completion status |
| `DELETE` | `/api/todos/:id` | Delete a specific todo |
| `DELETE` | `/api/todos` | Clear all todos |

### Example API Usage

```typescript
// Fetch all todos
const response = await fetch('/api/todos');
const todos = await response.json();

// Create a new todo
const newTodo = await fetch('/api/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'New task' })
});

// Toggle todo completion
await fetch(`/api/todos/${id}`, {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ done: true })
});
```

## 🎨 UI Components

### TodoItem Component
- **Checkbox toggle** for completion status
- **Smooth animations** and hover effects
- **Loading states** during API calls
- **Responsive design** for all screen sizes

### Main Page Features
- **Input form** with validation
- **Error handling** with user-friendly messages
- **Loading indicators** for better UX
- **Empty state** when no todos exist
- **Clear all functionality** with confirmation

## 🔄 State Management

The app uses React's built-in state management:
- `useState` for local component state
- `useEffect` for API calls and side effects
- **Optimistic updates** for better user experience
- **Error boundaries** for graceful failure handling

## 🎯 Learning Objectives

This project demonstrates:

1. **Fullstack Development** - Frontend + Backend integration
2. **API Design** - RESTful endpoints with proper HTTP methods
3. **React Patterns** - Hooks, async operations, error handling
4. **TypeScript** - Type safety and interfaces
5. **Modern CSS** - Tailwind utilities and responsive design
6. **Git Workflow** - Feature branches and collaboration

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify** - Static site hosting
- **Railway** - Fullstack deployment
- **Heroku** - Traditional hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📸 Screenshots

*Add screenshots of your app here*

## 🎥 Demo Video

*Add a link to your demo video here*

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Team

*Document who worked on what features*

- **Frontend**: UI components, styling, user experience
- **Backend**: API endpoints, data management
- **Fullstack**: Integration, testing, deployment

---

**Happy coding! 🎉**