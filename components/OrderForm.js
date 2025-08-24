import { useState } from 'react';
import styles from '../styles/OrderForm.module.css';

const OrderForm = ({ serviceId }) => {
  const [link, setLink] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service: serviceId, link, quantity }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`Pesanan berhasil! ID Pesanan: ${data.orderId}`);
        setLink('');
        setQuantity(0);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('Terjadi kesalahan saat memproses pesanan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Link/Username:
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} required />
      </label>
      <label>
        Jumlah:
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Memproses...' : 'Buat Pesanan'}
      </button>
      {message && <p className={styles.message}>{message}</p>}
    </form>
  );
};

export default OrderForm;
