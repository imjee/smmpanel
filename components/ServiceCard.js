import styles from '../styles/ServiceCard.module.css';

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.card}>
      <h3>{service.name}</h3>
      <p>{service.category}</p>
      <p>Harga per 1000: **Rp. {service.rate * 1000}**</p>
      <p>Min: **{service.min}** / Max: **{service.max}**</p>
      <button className={styles.button}>Pesan Sekarang</button>
    </div>
  );
};

export default ServiceCard;
