import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children, title = 'SMM Panel Terbaik' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Navbar />
    <main>{children}</main>
  </div>
);

export default Layout;
