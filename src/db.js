const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://nevespgabriel:95135759@cluster0.kykoa.mongodb.net/";

async function main () {
    await mongoose.connect(mongoDB);
}

main()
    .then(() => console.log("Conexão realizada com sucesso"))
    .catch(err => console.log(err));

module.exports = mongoose;