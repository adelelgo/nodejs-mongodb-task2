// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/lec-10");

// const Car = mongoose.model("Car", { type: String });

// const car1 = new Car({ type: "audi" });

// car1.save().then(() => console.log("Car Added"));

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

require("./db/mongoos");

app.use(express.json());

const userRouter = require("./routers/user");

app.use(userRouter);

app.listen(port, () => {
  console.log("Done");
});

// Task
// post 5 doc
// get all data
// get first 2
// patch first 3
//  delete 2

// post 5
// get all // get 1 2
// patch first 3 3
// del 2
