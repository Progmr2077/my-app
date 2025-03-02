import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from '@/components/Layout';
import { SWRConfig } from 'swr';

export default function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher: (...args) => fetch(...args).then(res => res.json()) }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}