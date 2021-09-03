import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificatiosRoutes } from "./routes/specifications.routes";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.json({ msg: "relo" }));

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificatiosRoutes);

app.listen(3333, () => console.log("Server is running!"));
