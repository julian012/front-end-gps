import express from "express";
import { connect } from "./database";

const app = express();
connect();

app.listen(3000, () => {
  console.log("Server run 3000");
});

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});
