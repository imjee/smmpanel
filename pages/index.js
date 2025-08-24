import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SMM Panel Terbaik di Indonesia</title>
        <meta name="description" content="Layanan SMM Panel termurah dan tercepat untuk Instagram, TikTok, YouTube, dan lainnya." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Mulai Tingkatkan Kehadiran Digital Anda!</h1>
        <p className={styles.description}>Dapatkan pengikut, likes, views, dan komentar dengan harga terbaik.</p>

        <div className={styles.grid}>
          <a href="/services" className={styles.card}>
            <h2>Daftar Layanan &rarr;</h2>
            <p>Lihat semua layanan media sosial yang kami tawarkan.</p>
          </a>
          <a href="#" className={styles.card}>
            <h2>Top-Up Saldo &rarr;</h2>
            <p>Isi ulang saldo Anda dengan mudah dan aman.</p>
          </a>
          <a href="#" className={styles.card}>
            <h2>Login &rarr;</h2>
            <p>Masuk ke akun Anda dan kelola pesanan.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 SMM Panel. All rights reserved.</p>
      </footer>
    </div>
  );
}
