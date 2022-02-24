import '../styles/globals.css';
import '../public/Resource/Stylesheets/reset.css';
import '../public/Resource/Stylesheets/config.css';
import '../public/Resource/Stylesheets/fontiran.css';
import '../public/Resource/Stylesheets/responsive.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Resource from '../public/Resource';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return router.pathname === Resource.Routes.AUTH ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
