require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("./models/Square");

const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URI || `mongodb://localhost:27017/squarraday`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

require("./routes/squareRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("squarraday-client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "squarraday-client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server app running on port ${PORT}`);
});
