import express from "express";
import logger from "morgan";

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(logger("dev"));

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));

export default app;
