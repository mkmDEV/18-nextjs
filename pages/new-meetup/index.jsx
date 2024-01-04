import { useRouter } from 'next/router';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import Head from 'next/head';

const NewMeetupPage = () => {
  const router = useRouter();
  const handleAdd = async (meetupData) => {
    const resp = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meetupData),
    });

    const data = await resp.json();
    console.log(data);
    await router.push('/');
  };

  return (
    <>
      <Head>
        <title>New meetup | NextJS Meetups by &copy;mkmDEV</title>
      </Head>
      <NewMeetupForm onAddMeetup={handleAdd} />
    </>
  );
};

export default NewMeetupPage;
