//const URI = 'pGDL4ndDtDrkFeuR'

//UawLWUxwOcM3wG2o
const { MongoClient } = require('mongodb');
const url  = 'mongodb+srv://namastedev:UawLWUxwOcM3wG2o@namastenode.f4v8jbg.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode'
const client = new MongoClient(url);
const dbName = 'HelloWorld';
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  const data = {
    FirstName: 'John',
    LastName: 'Doe',
    City: 'Pune',
    PhoneNumber: 1234567890
    }

 // the following code examples can be pasted here...
//   const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);

  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
const countResult = await collection.countDocuments({});
console.log('Total documents =>', countResult);
// Find the object by its name

const result = await collection.find({ FirstName: 'John' }).toArray();
console.log('Found document =>', result);

  return 'done.';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

