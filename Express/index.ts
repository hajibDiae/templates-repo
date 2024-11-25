import Express from "express";
import cors from "cors";
import { Request, Response } from "express";
const app = Express();
app.use(cors());
app.use(Express.json());

let server: any;

function startServer(port: number): Promise<Express.Application> {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      resolve(app); // Resolve with the Express application instance
    });

    server.on("error", (err) => {
      if ((err as NodeJS.ErrnoException).code === "EADDRINUSE") {
        console.error(`Port ${port} is already in use`);
        reject(err);
      } else {
        reject(err);
      }
    });
  });
}

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.stack);
});

process.on("unhandledRejection", (reason: any, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason.stack);
});

startServer(3000)
  .catch(() => startServer(8081))
  .catch((err) => {
    console.error("Failed to start the server on both ports:", err);
    process.exit(1);
  });
