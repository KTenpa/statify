const request = require('supertest');
const { app, server } = require('./app');

afterAll(() => {
  // Close the server after the tests are done
  server.close();
});

describe('GET /mean', () => {
  it("returns the mean of an array of numbers", async () => {
    const response = await request(app).get('/mean?nums=1,2,3');
    expect(response.status).toBe(200);
    expect(response.body.operation).toBe("mean");
    expect(response.body.result).toBe(2);
  });

  it("returns 400 for invalid number input", async () => {
    const response = await request(app).get('/mean?nums=foo,2,3');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("The value 'foo' at index 0 is not a valid number.");
  });

  it("returns 400 for missing nums query", async () => {
    const response = await request(app).get('/mean');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("You must pass a query key of nums with a comma-separated list of numbers.");
  });
});

describe('GET /median', () => {
  it("returns the median of an array of numbers", async () => {
    const response = await request(app).get('/median?nums=1,-1,4,2');
    expect(response.status).toBe(200);
    expect(response.body.operation).toBe("median");
    expect(response.body.result).toBe(1.5);
  });
});

describe('GET /mode', () => {
  it("returns the mode of an array of numbers", async () => {
    const response = await request(app).get('/mode?nums=1,1,1,2,2,3');
    expect(response.status).toBe(200);
    expect(response.body.operation).toBe("mode");
    expect(response.body.result).toBe(1);
  });
});
