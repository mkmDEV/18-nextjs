import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJS Meetups by &copy;mkmDEV</title>
        <meta name='author' content='mkmDEV' />
        <meta
          name={'description'}
          content={'Browse a huge list of highly active React meetups!'}
        />
        <meta
          name='keywords'
          content='React, NextJS, SSR, Frontend, JavaScript'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
