import express from "express";
import bodyParser from "body-parser";

import { day, date, month } from "./public/dates.cjs";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let locals = {
  array1: [],
  array2: [],
  day,
  date,
  month,
};

app.get("/", (req, res) => {
  res.render("index.ejs", locals);
});
app.post("/", (req, res) => {
  let items = req.body.item;
  locals.array1.push(items);
  res.render("index.ejs", locals);
});

app.get("/work", (req, res) => {
  res.render("work.ejs", locals);
});
app.post("/work", (req, res) => {
  let items = req.body.item;
  locals.array2.push(items);
  res.render("work.ejs", locals);
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
