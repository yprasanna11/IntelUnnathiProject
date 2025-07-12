# AI Learning Assistant Backend

A Flask-based API server for processing educational materials and providing AI-powered interactions.

## Features

- **File Upload & Processing**: Support for PDF and PowerPoint files
- **AI-Powered Q&A**: Answer questions based on uploaded materials
- **Quiz Generation**: Automatically generate quizzes with explanations
- **Vector Search**: Semantic search through document content
- **RESTful API**: Clean API endpoints for frontend integration

## Setup Instructions

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Environment Variables

Create a `.env` file in the backend directory:

```bash
OPENAI_API_KEY=your_openai_api_key_here
FLASK_ENV=development
```

### 3. Run the Server

```bash
python app.py
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```

### Upload Material
```
POST /api/upload
Content-Type: multipart/form-data
Body: file (PDF or PowerPoint)
```

### Get Materials
```
GET /api/materials
```

### Chat/Q&A
```
POST /api/chat
Content-Type: application/json
Body: {
  "question": "Your question here",
  "material_id": "material_uuid"
}
```

### Generate Quiz
```
POST /api/quiz
Content-Type: application/json
Body: {
  "material_id": "material_uuid",
  "num_questions": 10
}
```

## Production Deployment

### Requirements
- Python 3.8+
- OpenAI API key
- Sufficient storage for uploaded files
- Database for production use (PostgreSQL recommended)

### Configuration
1. Set environment variables for production
2. Configure file storage (AWS S3, Google Cloud Storage, etc.)
3. Set up proper database connection
4. Configure CORS for your frontend domain
5. Set up proper logging and monitoring

### Security Considerations
- Implement proper authentication
- Validate file types and sizes
- Sanitize user inputs
- Use HTTPS in production
- Set up rate limiting
- Implement proper error handling

## Architecture

```
Frontend (React) → Backend (Flask) → AI Services (OpenAI)
                                  → Vector Store (FAISS)
                                  → File Storage
```

## Key Components

- **MaterialProcessor**: Handles PDF and PowerPoint processing
- **AIAssistant**: Manages AI interactions and quiz generation
- **Vector Store**: Enables semantic search through content
- **API Layer**: RESTful endpoints for frontend integration

## Development Notes

The current implementation includes mock responses for demo purposes. In production:

1. Uncomment the real implementations in `app.py`
2. Set up proper OpenAI API integration
3. Configure vector storage and embeddings
4. Implement proper database storage
5. Add comprehensive error handling and logging