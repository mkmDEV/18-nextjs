import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '@/components/meetups/MeetupDetail';

const MeetupDetailsPage = ({ meetup }) => {
  const title = `${meetup.title} | NextJS Meetups by ©mkmDEV`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={'description'} content={meetup.description} />
      </Head>
      <MeetupDetail {...meetup} />
    </>
  );
};

export const getStaticPaths = async () => {
  const url =
    'mongodb+srv://mkm:yhJWocs6kOceC2SH@netxjs.u24kdrf.mongodb.net/meetups?retryWrites=true&w=majority';

  const client = await MongoClient.connect(url);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: meetups.map((m) => ({ params: { meetupId: m._id.toString() } })),
  };
};

export const getStaticProps = async ({ params }) => {
  const { meetupId } = params;

  const url =
    'mongodb+srv://mkm:yhJWocs6kOceC2SH@netxjs.u24kdrf.mongodb.net/meetups?retryWrites=true&w=majority';

  const client = await MongoClient.connect(url);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  await client.close();

  return {
    props: {
      meetup: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};
export default MeetupDetailsPage;
