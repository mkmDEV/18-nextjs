import classes from './MeetupDetail.module.css';

const MeetupDetail = ({ address, description, image, title }) => {
  return (
    <section className={classes.detail}>
      <img className={classes.alma} src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
