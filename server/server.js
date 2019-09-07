const express = require("express");
const app = express();
const port = process.env.PORT || 5008;

//show welcome message
app.get("/", (req, res) => {
  res.send("welcome server!");
});

app.get("profile", jwtmw, (req, res) => {
  // let user = req.user;
  
  let userData = await  User.find({id:user.id}); 

});

//server open on port
app.listen(port, () => {
  console.log(`server started on port no: ${port}`);
});
