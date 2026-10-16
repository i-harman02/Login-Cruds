const express = require("express");
const mongoose = require("mongoose");
const user = require('./model/user.js');
const dns = require('node:dns');
const routes = require('./routes/Routes.js');
const cors = require("cors");
const  dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors(
//   {
//     credentials: true,
//     origin:'http://localhost:5173'
// }
));
dns.setServers(['1.1.1.1', '8.8.8.8']);


mongoose.connect(process.env.Mongodb)
  .then(() => {
    console.log("MongoDB Connected");
    console.log("Database:", mongoose.connection.db.databaseName);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", routes);
app.use("/", routes);

app.listen( "9090" , () => {
console.log("server start at http://localhost:9090/")
})
