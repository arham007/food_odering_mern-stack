const express = require('express')
const port = 4000;
const cors=require("cors")
const mongoose = require('mongoose');
const {MONGO_URI}=require("./key/keys")
const app = express();
app.use(cors("*"))
app.use(express.json())
require("./modals/user")
require("./modals/product")
require("./modals/order.js")

app.use(require("./router/auth"))


mongoose.connect(MONGO_URI)
.then(()=>{
  console.log("connected to database")
}).catch(err => console.log(err))







app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})