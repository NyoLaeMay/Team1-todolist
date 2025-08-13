# 🧪 API Testing Guide

## 📋 Overview
This guide shows you how to test the Todo List API endpoints using different tools and methods.

## 🛠️ Testing Tools

### 1. **Thunder Client** (VS Code Extension) - Recommended
- Free VS Code extension
- Lightweight alternative to Postman
- Built-in request templates

### 2. **Postman**
- Popular API testing tool
- Rich features and collaboration
- Free tier available

### 3. **cURL** (Command Line)
- Built into most systems
- Good for quick tests
- Scriptable

### 4. **Browser DevTools**
- Built into browsers
- Good for GET requests
- Network tab for debugging

## 🔌 API Endpoints to Test

### Base URL
```
http://localhost:3000/api
```

### 1. **GET /todos** - Fetch All Todos
```http
GET http://localhost:3000/api/todos
```

**Expected Response:**
```json
[
  {
    "id": 1,
    "text": "Try Next.js 🚀",
    "done": false
  },
  {
    "id": 2,
    "text": "Build API endpoints",
    "done": false
  }
]
```

### 2. **POST /todos** - Create New Todo
```http
POST http://localhost:3000/api/todos
Content-Type: application/json

{
  "text": "Test new todo"
}
```

**Expected Response:**
```json
{
  "id": 1234567890,
  "text": "Test new todo",
  "done": false
}
```

### 3. **PATCH /todos/:id** - Update Todo
```http
PATCH http://localhost:3000/api/todos/1
Content-Type: application/json

{
  "done": true
}
```

**Expected Response:**
```json
{
  "id": 1,
  "text": "Try Next.js 🚀",
  "done": true
}
```

### 4. **DELETE /todos/:id** - Delete Todo
```http
DELETE http://localhost:3000/api/todos/1
```

**Expected Response:**
```json
{
  "message": "Todo deleted successfully",
  "deletedTodo": {
    "id": 1,
    "text": "Try Next.js 🚀",
    "done": true
  }
}
```

### 5. **DELETE /todos** - Clear All Todos
```http
DELETE http://localhost:3000/api/todos
```

**Expected Response:**
```json
{
  "message": "All todos cleared successfully"
}
```

## 🧪 Testing Scenarios

### Scenario 1: Happy Path
1. **GET** all todos (should return initial list)
2. **POST** new todo (should create and return new todo)
3. **GET** all todos (should include new todo)
4. **PATCH** todo to mark as done
5. **GET** all todos (should show updated status)
6. **DELETE** specific todo
7. **GET** all todos (should not include deleted todo)

### Scenario 2: Error Handling
1. **POST** empty text (should return 400 error)
2. **PATCH** non-existent todo (should return 404 error)
3. **DELETE** non-existent todo (should return 404 error)
4. **POST** invalid JSON (should return 500 error)

### Scenario 3: Edge Cases
1. **POST** very long text
2. **POST** special characters
3. **PATCH** with invalid done value
4. **GET** after clearing all todos

## 🚀 Using Thunder Client

### Setup
1. Install Thunder Client extension in VS Code
2. Open Command Palette (`Ctrl+Shift+P`)
3. Type "Thunder Client: New Request"

### Testing Steps
1. **Create Collection**: Right-click → "New Collection" → Name it "Todo API"
2. **Add Requests**: Right-click collection → "New Request"
3. **Test Each Endpoint**: Use the examples above

### Example Request in Thunder Client
```
Method: POST
URL: http://localhost:3000/api/todos
Headers: Content-Type: application/json
Body: {"text": "Test todo"}
```

## 🖥️ Using cURL

### GET All Todos
```bash
curl http://localhost:3000/api/todos
```

### POST New Todo
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"text": "Test todo"}'
```

### PATCH Todo
```bash
curl -X PATCH http://localhost:3000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"done": true}'
```

### DELETE Todo
```bash
curl -X DELETE http://localhost:3000/api/todos/1
```

### Clear All Todos
```bash
curl -X DELETE http://localhost:3000/api/todos
```

## 🌐 Using Browser DevTools

### Test GET Endpoint
1. Open browser
2. Navigate to `http://localhost:3000/api/todos`
3. Should see JSON response

### Monitor Network Requests
1. Open DevTools (`F12`)
2. Go to Network tab
3. Use the app to see API calls
4. Click on requests to see details

## ✅ Expected Test Results

### Success Responses
- **200 OK**: GET, PATCH, DELETE operations
- **201 Created**: POST operations
- **204 No Content**: DELETE operations (optional)

### Error Responses
- **400 Bad Request**: Invalid input data
- **404 Not Found**: Resource doesn't exist
- **500 Internal Server Error**: Server errors

### Response Headers
- `Content-Type: application/json`
- `Access-Control-Allow-Origin: *` (if CORS enabled)

## 🐛 Common Issues & Solutions

### Issue: "Cannot GET /api/todos"
**Solution**: Make sure the development server is running (`npm run dev`)

### Issue: "Network Error"
**Solution**: Check if the API route files are in the correct location

### Issue: "500 Internal Server Error"
**Solution**: Check the terminal for error logs

### Issue: "CORS Error"
**Solution**: This shouldn't happen with Next.js API routes

## 📊 Performance Testing

### Response Time
- **Target**: < 200ms for all endpoints
- **Test**: Use browser DevTools Network tab
- **Monitor**: Response time and payload size

### Load Testing
- **Simple**: Refresh page multiple times
- **Advanced**: Use tools like Apache Bench or Artillery

## 🔍 Debugging Tips

1. **Check Terminal**: Next.js shows API errors in the terminal
2. **Console Logs**: Add `console.log` in API routes
3. **Network Tab**: Use browser DevTools to see requests
4. **Status Codes**: Verify HTTP status codes match expectations

## 📝 Testing Checklist

- [ ] All endpoints respond correctly
- [ ] Error handling works as expected
- [ ] Response format is consistent
- [ ] Performance is acceptable
- [ ] Edge cases are handled
- [ ] Data persistence works (in-memory)

---

**Happy Testing! 🧪✨**
