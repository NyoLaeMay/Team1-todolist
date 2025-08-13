# Supabase Setup Guide

## 1. Install Dependencies
```bash
npm install
```

## 2. Create Environment File
Create a `.env.local` file in your project root with:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

## 3. Get Supabase Credentials
1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your project dashboard, go to Settings > API
3. Copy the "Project URL" to `NEXT_PUBLIC_SUPABASE_URL`
4. Copy the "service_role" key to `SUPABASE_SERVICE_ROLE_KEY`

## 4. Create Database Table
In your Supabase SQL editor, run:
```sql
CREATE TABLE todos (
  id BIGSERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  done BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 5. Run the App
```bash
npm run dev
```

## Database Schema
- `id`: Auto-incrementing primary key
- `text`: Todo text content
- `done`: Completion status (boolean)
- `created_at`: Timestamp when todo was created
