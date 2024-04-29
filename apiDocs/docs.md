# Swing Notes API Documentation

## Description

This API allows the client to manage their notes, such as creating, reading, updating and deleting them.
The client can also log in to access previously saved notes.

## Authentication

Endpoints require authentication. This authentication is handled via JSON Web Tokens (JWT)

## Endpoints

### BaseURL: http://localhost:5000

### User Management

- **POST /api/user/signup**

  - **Description**: Register a new user.
  - **Body**:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

- **POST /api/user/login**
  - **Description**: Authenticate a user and return a JWT.
  - **Body**:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

###

### Notes Management

- **GET /api/notes**

  - **Description**: Retrieve all notes for the logged-in user.

- **POST /api/notes**

  - **Description**: Create a new note.
  - **Body**:
    ```json
    {
      "title": "string",
      "text": "string"
    }
    ```

- **PUT /api/notes**

  - **Description**: Update an existing note.
  - **Body**:
    ```json
    {
      "id": "string",
      "title": "string",
      "text": "string"
    }
    ```

- **DELETE /api/notes**

  - **Description**: Delete a specific note by ID.
  - **Body**:
    ```json
    {
      "id": "string"
    }
    ```

- **GET /api/notes/search**
  - **Description**: Search among notes by title.
  - **Query Parameter**:
    - `title`: string

## Error Handling

Responses will include appropriate HTTP status codes:

- `200 OK`: The request was successful.
- `400 Bad Request`: The request could not be understood by the server.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: Something went wrong on the server.

## Status Codes

TBA
