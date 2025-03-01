import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from '@/components/Layout';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;