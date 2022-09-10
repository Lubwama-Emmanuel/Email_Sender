const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;
const DB = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then((con) => {
    console.log(`DATABASE CONNECTED SUCCESSFULLY...`);
  })
  .catch((err) => {
    console.log(`Oooops DATABASE NOT CONNECTED...`, err);
  });
app.listen(port, () => {
  console.log(`App is listening to port: ${port}`);
});
