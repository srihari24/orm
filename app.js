const express = require("express");
const app = express();
 
const user = require('./routes/user');

const emp = require('./routes/empoly');

const login = require('./routes/login')
app.use(express.json());




app.use('/user',user)  
app.use('/employ' ,emp)


app.use('/',login)

app.listen(5000, () => {
  console.log("server running");
});
