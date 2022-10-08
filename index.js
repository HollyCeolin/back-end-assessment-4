const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/dogs", )
app.listen(4050, () => console.log("Server running on 4050"));
