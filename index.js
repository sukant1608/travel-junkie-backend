const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
const routes = require("./routes");
const handle = require("./handlers");

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

app.use("/api/auth", routes.auth);
app.use("/api/blog", routes.blog);
app.use("/api/user", routes.user);
app.use("/api/explore", routes.explore);
app.use("/api/review", routes.review);

app.use(handle.notFound);
app.use(handle.errors);
