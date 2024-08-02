const app = require('express')()
const {MongoClient} = require('mongodb')

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const PORT = 8080
app.get('/', async (req, res) => {
    await client.connect()
    const db = client.db("ritesh").collection("todo")
    const result =await db.insertOne({id: 1, name: "eat food"})
    await client.close()
    res.send(result)
})
app.listen(PORT,()=> console.log('listening on port: ' + PORT))