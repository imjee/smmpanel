import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        if (!res.ok) {
          throw new Error('Gagal mengambil data layanan');
        }
        const data = await res.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) return <div>Memuat layanan...</div>;
  if (error) return <div>Terjadi kesalahan: {error}</div>;

  return (
    <>
      <Head>
        <title>Layanan Kami | SMM Panel</title>
      </Head>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>Daftar Layanan</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Services;
