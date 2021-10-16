const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.sendfile("./index.html");
});

app.listen(PORT, () => {
  console.log(`app is listen on PORT: ${PORT}`);
});
