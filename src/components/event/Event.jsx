import { useEffect, useRef } from "react";
import "./event.css";

function Event(props) {
  const ref = useRef();

  const { onSize } = props;

  useEffect(() => {
    const width = ref.current.offsetWidth;
    const height = ref.current.offsetHeight;
    if (onSize) {
      onSize({ width, height });
    }
  });

  return (
    <li ref={ref} className={"event" + (props.slim ? " event_slim" : "")}>
      <button className="event__button">
        <span
          className={`event__icon event__icon_${props.icon}`}
          role="img"
          aria-label={props.iconLabel}
        ></span>
        <h4 className="event__title">{props.title}</h4>
        {props.subtitle && (
          <span className="event__subtitle">{props.subtitle}</span>
        )}
      </button>
    </li>
  );
}
export default Event;
// import { useEffect, useRef } from "react";
// import styles from "./Event.module.css";

// function Event(props) {
//   const ref = useRef();
//   const { onSize, slim, icon, iconLabel, title, subtitle } = props;

//   useEffect(() => {
//     if (ref.current && onSize) {
//       const { offsetWidth: width, offsetHeight: height } = ref.current;
//       onSize({ width, height });
//     }
//   }, [onSize]);

//   // Определяем класс иконки на основе пропса
//   const getIconClass = () => {
//     switch (icon) {
//       case "temp":
//         return styles.iconTemp;
//       case "temp2":
//         return styles.iconTemp2;
//       case "light":
//         return styles.iconLight;
//       case "light2":
//         return styles.iconLight2;
//       case "schedule":
//         return styles.iconSchedule;
//       default:
//         return "";
//     }
//   };

//   return (
//     <li ref={ref} className={slim ? styles.slim : ""}>
//       <button className={styles.button}>
//         <span
//           className={`${styles.icon} ${getIconClass()}`}
//           role="img"
//           aria-label={iconLabel}
//         />
//         <h4 className={styles.title}>{title}</h4>
//         {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
//       </button>
//     </li>
//   );
// }

// export default Event;
