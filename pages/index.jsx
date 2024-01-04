import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '@/components/meetups/MeetupList';

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps = async () => {
  const URL =
    'mongodb+srv://mkm:yhJWocs6kOceC2SH@netxjs.u24kdrf.mongodb.net/meetups?retryWrites=true&w=majority';
  const client = await MongoClient.connect(URL);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  await client.close();

  return {
    props: {
      meetups: meetups.map(({ address, description, _id, image, title }) => ({
        id: _id.toString(),
        address,
        description,
        image,
        title,
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
