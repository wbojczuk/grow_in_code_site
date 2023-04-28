const { MongoClient } = require("mongodb");
const client = new MongoClient("URI HERE");

const db = {
    connect: async ()=>{client.connect(); return true},
    disconnect: async ()=>{client.close(); return true},
    blogDatabase: client.db("grow_in_code"),
}

module.exports = { db };