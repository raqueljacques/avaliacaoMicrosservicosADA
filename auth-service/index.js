require("dotenv").config();
const express = require("express");
const routes = require("./src/routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3003;

const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("::: Mongo DB connected :::");
    app.listen(PORT, () =>
        console.log(`Auth Service running on PORT:::${PORT}`)
    );
});
