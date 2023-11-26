# IoT---HTTP

# Temperature API

This simple Node.js API provides temperature-related endpoints. It supports both JSON and XML responses.

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/riqueGo/IoT---HTTP.git

2. Navigate to the project directory:

   ```bash
   cd temperature-api

3. Install dependencies:

   ```bash
   npm install

## Running the Server

Start the server by running:

   ```bash
   node app.js
  ```
The server will be running on http://localhost:3000.

### Endpoints

#### 1. Get Random Temperature

Endpoint
- /temperature

Parameters
- unit (optional): Specify the temperature unit ('C' for Celsius, 'F' for Fahrenheit).

Usage
- JSON Response:
  - curl http://localhost:3000/temperature
- XML Response:
  - curl -H "Accept: application/xml" http://localhost:3000/temperature

#### 2. Get Temperature from External Server

Endpoint
- /temperature-from-server

Usage
- Get temperature from an external server:
  - curl http://localhost:3000/temperature-from-server

## Notes
- The server generates random temperature data for the /temperature endpoint.
- The /temperature-from-server endpoint fetches temperature data from an external server.
