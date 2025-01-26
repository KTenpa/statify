# Statify

A simple Express.js app that performs statistical operations (mean, median, mode) on an array of numbers provided through query parameters.

## How to Run

### Clone the repo:

```bash
git clone https://github.com/KTenpa/statify.git
cd statify
```
### Install dependencies:
```bash
npm install 
```
### Start the server:
```bash
npm start
```
The server will run at http://localhost:3000.

## API Endpoints
### GET /mean
#### Description: Calculates the mean of a set of numbers.

* **Response:**
  ```json
  {
    "operation": "mean",
    "result": 2
  }

### GET /median

#### Description: Calculates the median of a set of numbers.

* **Response:**
  ```json
  {
  "operation": "median",
  "result": 1.5
  }

### GET /mode

#### Description: Calculates the mode of a set of numbers.

* **Response:**
  ```json
  {
  "operation": "mode",
  "result": 1
  }

#### Query Parameter:
   * ```nums``` - A comma-separated list of numbers (e.g., ?nums=1,2,3).

#### Error Responses:
   * Missing ```nums``` query parameter: 400

   * Invalid numbers in the list: 400

## Error Handling

Custom error handling is implemented using the ExpressError class. All errors are returned in the following JSON format:
```json
{
  "error": {},
  "message": "Error message here"
}
```

## Testing

Tests are written using Jest and Supertest. To run the tests:
``` bash
npm test
```

## Example Tests

* **Mean Endpoint**
    * Valid input: GET /mean?nums=1,2,3

    * Invalid input: GET /mean?nums=foo,2,3

* **Median Endpoint**

    * Valid input: GET /median?nums=1,2,3,4

* **Mode Endpoint**

    * Valid input: GET /mode?nums=1,1,2,3

## Dependencies

* Express - Web framework for Node.js

* Jest - Testing framework

* Supertest - HTTP assertions and testing