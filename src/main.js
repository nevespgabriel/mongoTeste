const express = require("express");
const app = express();
const pet_router = require("./routers/pet_router.js");
const port = 5500;

app.use(express.json());

app.use("/pet", pet_router);

app.listen(port, () => {
    console.log(`Server running at ${port} port.`);
})