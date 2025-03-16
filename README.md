# Microservices Architecture Demo

This repository demonstrates a streamlined development environment featuring a Node.js-based web UI, a FastAPI backend, and an API gateway to route all requests uniformly.

## Architecture Overview

The project consists of three main services:

1. **Web UI (Node.js/Express)**: Serves the frontend application
2. **Backend (FastAPI)**: Provides API endpoints for data
3. **API Gateway (Node.js/Express)**: Routes requests to appropriate services

## Key Benefits

### Single Origin for All Requests

The API gateway serves as a single entry point for all requests, which:

- **Eliminates CORS Issues**: All requests come from the same origin, avoiding cross-origin resource sharing problems
- **Simplifies Frontend Development**: Frontend code can use relative URLs (e.g., `/api/data`) without hardcoding backend URLs
- **Enhances Portability**: The same code works in development and production environments

### Consistent API Endpoints

The API gateway provides clear and consistent endpoints:
- Web UI is served at the root path (`/`)
- API endpoints are prefixed with `/api`

### Separation of Concerns

Each service has a specific responsibility:
- Web UI handles user interface and interactions
- Backend focuses on business logic and data processing
- API Gateway manages routing and acts as a reverse proxy

## Getting Started

### Prerequisites

- Docker and Docker Compose

### Running the Application

```bash
# Start all services
docker compose up

# Rebuild and start all services
docker compose up --build
```

### Accessing the Application

- Web UI: http://localhost:8080
- API Endpoint: http://localhost:8080/api/data

## Project Structure

```
project-root/
├── api-gateway/       # API Gateway service
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
├── backend/           # FastAPI backend service
│   ├── Dockerfile
│   ├── requirements.txt
│   └── main.py
├── webui/             # Node.js frontend service
│   ├── Dockerfile
│   ├── package.json
│   ├── app.js
│   └── public/
│       └── index.html
└── compose.yml        # Docker Compose configuration
```

## Development Workflow

When developing new features:

1. Add new API endpoints to the backend service
2. Update the frontend to consume these endpoints using relative URLs (`/api/...`)
3. The API gateway will automatically route requests to the appropriate service

This architecture is particularly well-suited for LLM-assisted development workflows, as it provides a clear separation of concerns and consistent API patterns.
