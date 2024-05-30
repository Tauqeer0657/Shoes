const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shoes").then(() => {
    console.log("Connection is successful");
}).catch((e) => {
    console.log(`the error is ${e}`);
})
