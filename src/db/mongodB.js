const mongoose = require("mongoose");
const uri = "link here";
async function connect() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
}
connect();
