import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const url =
      'mongodb+srv://mkm:yhJWocs6kOceC2SH@netxjs.u24kdrf.mongodb.net/meetups?retryWrites=true&w=majority';
    //yhJWocs6kOceC2SH
    const client = await MongoClient.connect(url);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    await client.close();

    res.status(201).json({ message: 'Meetup inserted.' });
  }
};

export default handler;
