import express from "express";

const app = express();

app.get("/", (reuqest, response) => {
  return response.json({ message: "hello world" });
});

app.listen(4545, () => console.log("sever is running"));
