import styles from "./styles/Card.module.css";
import React from "react";

function Card({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
  googleMapsIcon,
}) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={imageUrl} alt={title} />
      <div className={styles.cardContent}>
        <p className={styles.location}>
          <img src={googleMapsIcon} alt="pin" />
          {location}
          <a className={styles.map} href={googleMapsUrl}>
            View on Google Maps
          </a>
        </p>
        <h2 className={styles.place}>{title}</h2>
        <h3 className={styles.date}>
          {startDate} - {endDate}
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
