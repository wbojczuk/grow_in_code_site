const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb+srv://wbojczuk:Pq7MPoIAmKRcDMGa@cluster0.r2yrsm5.mongodb.net/?retryWrites=true&w=majority");

const db = {
    connect: async ()=>{client.connect(); return true},
    disconnect: async ()=>{client.close(); return true},
    blogDatabase: client.db("grow_in_code"),
}

module.exports = { db };