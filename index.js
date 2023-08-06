const express = require("express");
const userRouter = require("./routes/userRouter");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => console.log("server runs"));
