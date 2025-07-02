import Event from "./Event";
import styles from "./eventGrid.module.css";

function EventGrid({ events, onEventSize }) {
  return (
    <ul className={styles.grid}>
      {events.map((event) => (
        <Event key={event.id} {...event} onSize={onEventSize} />
      ))}
    </ul>
  );
}

export default EventGrid;
