const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'public', 'static')));

app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// run server
app.listen(process.env.PORT || 3000, () => {console.log('listening at 3000')});

















app.use(express.json( {limit: '1mb'} ));


// connect to db
const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {

        family: 4,

        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

// connect to db
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
  } catch(error) {

    console.log('there was a problem connecting to the db!');
    console.log(error);
  }

    const testColl = client.db('testDB').collection("testColl");
    testColl.deleteMany();

}
run();


// CRUD Operations

app.post('/api', (request, response) => {

    const data = {
        image: request.body.data,
        date: new Date().toLocaleDateString()
    }
    
    const testColl = client.db('testDB').collection('testColl');
    testColl.insertOne(data);
    console.log('data added to db');
    console.log(data);

    response.json({
        status: 'success',
        data: data
    });

})
