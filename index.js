const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getDogs,
    postDogs,
    editDogs,
    deleteDogs
} = require('./controller')

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/dogs", getDogs );
app.post("/api/dogs", postDogs);
app.put("/api/dogs/:id", editDogs);
app.delete("/api/dogs/:id", deleteDogs);


app.listen(4050, () => console.log("Server running on 4050"));
