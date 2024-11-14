
# Express.js Server

This is an Express.js server that simulates fetching data from different source in efficient way. 

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the Repository**
   ```bash
   git clone git@github.com:teckmk/multi-source-data-fetching-simulation.git
   cd multi-source-data-fetching-simulation
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory. Include environment-specific variables such as database URLs and API keys.

   ```plaintext
   PORT=3000
   ```

## Configuration

### Environment Variables

The server requires some environment variables to run properly. Add the following variables in the `.env` file:

- `PORT`: Port on which the server will run.


## Usage

### Running the Server

To start the server in development mode:

```bash
npm run dev
```

For production:

```bash
npm start
```


## Folder Structure

```
├── src
│   ├── controllers      # Controller functions to handle requests
│   ├── middleware       # Custom middleware functions
│   ├── routes           # API route definitions
│   ├── services         # Services for business logic
│   ├── utils            # Utility functions
│   └── app.js           # Initializes and configures Express app
├── tests                # Unit and integration tests
└── server.js            # Entry point to start the server
```

## API Endpoints

### Foods

- **GET** `/api/goa` - Get the information about food in goa

## Error Handling

This server includes centralized error handling with appropriate HTTP status codes and error messages. All errors are caught by a global error-handling middleware in `src/middleware/error.handler.js`.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Open a pull request once you are ready.

## License

This project is licensed under the MIT License.
