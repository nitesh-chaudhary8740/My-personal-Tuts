import express from "express";
import cors from "cors";
const app = express();
const corsOptions = {
//   origin: ["http://localhost:5173"],
  optionsSuccessStatus: 200,
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true, // Allow sending cookies/authorization headers
};
app.use(cors(corsOptions))
app.use(express.static("dist"))
app.get("/api", (req, res) => {
 const jokes = [
    {
      id: 1,
      title: "joke-1",
      joke: "this is joke-1",
    },
    {
      id: 2,
      title: "joke-2",
      joke: "this is joke-2",
    },
    {
      id: 3,
      title: "joke-3",
      joke: "this is joke-3",
    },
  ];
  res.send(jokes);
});
app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke-1",
      joke: "this is joke-1",
    },
    {
      id: 2,
      title: "joke-2",
      joke: "this is joke-2",
    },
    {
      id: 3,
      title: "joke-3",
      joke: "this is joke-3",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
