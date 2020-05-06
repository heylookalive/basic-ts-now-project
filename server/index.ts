import express, { Request, Response } from "express";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

(async () => {
  try {
    const server = express();
    server.all("*", (req: Request, res: Response) => {
      res.send("balls");
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
