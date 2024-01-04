import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Lorem Ipsum Dolor Sit Amet',
    image: 'https://placekitten.com/640/320',
    address: '14924 Nicole Rapid, Lake Carter, HI 47673-5294',
    description: 'This is the first meetup',
  },
  {
    id: 'm2',
    title: 'Consectetur Adipiscing Elit',
    image: 'https://placekitten.com/640/321',
    address: '2378 Julia Lane, Port Johnson, CA 90210-1234',
    description: 'Join us for an exciting gathering!',
  },
  {
    id: 'm3',
    title: 'Sed Do Eiusmod Tempor',
    image: 'https://placekitten.com/640/322',
    address: '4589 Alexander Street, Springdale, TX 75001-5678',
    description: 'A wonderful meetup awaits you!',
  },
  {
    id: 'm4',
    title: 'Incididunt Ut Labore Et',
    image: 'https://placekitten.com/640/323',
    address: '621 Oak Street, Riverside, FL 32003-9876',
    description: "Don't miss this fantastic event!",
  },
  {
    id: 'm5',
    title: 'Voluptate Cillum Dolore',
    image: 'https://placekitten.com/640/324',
    address: '891 Pine Avenue, Mountain View, CA 94040-4321',
    description: 'Experience an unforgettable gathering!',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
