// import { Application } from "express";

import express, { Application, Request, Response } from "express";
// import fetch from "node-fetch";
// import fetch from "node-fetch";

const app: Application = express();
const data = require("../data.json");

app.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => res.json(json));
  } catch (error) {
    console.log(`error ${error}`);
  }
});

// app.post("/data", (req, res) => {
//   const add = req.body;
//   data.users.push(add);
//   res.send(data.users);
// });

app.put("/update/:id/:name", (req, res) => {
  const findID = req.params.id;
  const takeName = req.params.name;

  data.users.filter((x: any) =>
    x.id == findID ? (x.name = takeName) : x.name
  );
  res.send(data.users);
});

// app.delete("/delete/:id", async (req, res) => {
//   const find = req.params.id;
//   data.users.filter((x, i) => (x.id == find ? data.users.splice(i, 1) : x.id));

//   res.send(data.users);
// });

app.listen(3000, () => console.log("server is up"));
