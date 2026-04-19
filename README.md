# Player Management API - DIO

## Overview
This project is a simple REST API for managing players. It was built as a learning exercise to practice backend development concepts using Node.js, Express, and TypeScript. The application demonstrates a layered architecture, basic CRUD operations, and standardized HTTP responses.

## Objectives
- Understand REST API design
- Practice backend development with TypeScript
- Apply separation of concerns
- Implement basic error handling
- Work with HTTP methods and status codes

## Technologies
- Node.js
- Express
- TypeScript

## Project Structure
src/
  controllers/
    player-controller.ts
  services/
    player-service.ts
  repositories/
    player-repository.ts
  models/
    player-model.ts
    http-response-model.ts
  utils/
    http-status-helper.ts
  app.ts

## Architecture
The project follows a layered architecture where each part has a clear responsibility:
- Controllers handle HTTP requests and responses
- Services contain business logic and validation
- Repositories handle data access and manipulation
- Utilities centralize reusable logic such as HTTP responses

## Data Model

Player:
{
  id: number,
  name: string,
  club: string,
  nationality: string,
  position: string
}

Update Player (partial update):
{
  id?: number,
  name?: string,
  club?: string,
  nationality?: string,
  position?: string
}

## Endpoints

GET /players  
Returns all players

GET /players/:id  
Returns a player by ID

POST /players  
Creates a new player

Request body:
{
  "id": number,
  "name": string,
  "club": string,
  "nationality": string,
  "position": string
}

PATCH /players/:id  
Updates an existing player (partial update)

Request body:
{
  "club": string,
  "position": string
}

DELETE /players/:id  
Deletes a player by ID

## HTTP Responses
The API uses the following status codes:
- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

## Error Handling
Error handling is implemented in the service layer using try/catch blocks. Responses are standardized through helper functions to ensure consistency across the application.

## Running the Project

Install dependencies:
npm install

Run in development:
npm run dev

Build the project:
npm run build

Run production build:
npm start

This project is for educational purposes only.
