import NewMeetupForm from '@/components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const handleAdd = (meetupData) => {
    //todo
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={handleAdd} />;
};

export default NewMeetupPage;
