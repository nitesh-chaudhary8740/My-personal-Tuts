import express from 'express';


const app = express();
const PORT = 3000;



app.get("/hello",(req,res)=>{
  res.send("Hi")
})
app.route("/").get((req,res)=>{
  console.log("req recived")
  res.send("hi")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });




// import express from 'express';
// import { createServer as createViteServer } from 'vite';
// import fs from 'fs';
// import path from 'path';

// const app = express();
// const PORT = 3000;

// async function startServer() {
//   const vite = await createViteServer({
//     server: { middlewareMode: true },
//   });

//   app.use(vite.middlewares);

//   const indexHtmlPath = path.join('./', 'index.html');

//   app.get('/', async (req, res) => {
//     try {
//       const indexHtmlContent = await fs.promises.readFile(indexHtmlPath, 'utf8');
//       res.status(200).set({ 'Content-Type': 'text/html' }).end(indexHtmlContent);
//     } catch (e) {
//       console.error(e);
//       res.status(500).end(e.message);
//     }
//   });

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }

// startServer();