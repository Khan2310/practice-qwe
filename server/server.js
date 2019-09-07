const express = require('express');
const app = express();
const port = process.env.PORT || 5008;

//show welcome message
app.get("/", (req, res) => {
  res.send("welcome server!");
});


//server open on port
app.listen(port, () => {
  console.log(`server started on port no: ${port}`);
});
