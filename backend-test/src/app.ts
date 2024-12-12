import express, { Request, Response, NextFunction } from "express";

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Define a simple route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Express server written in TypeScript!");
});

// Another route with parameters
app.get("/user/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
