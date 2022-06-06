import Head from 'next/head';
const HeadTag = () => {
  return (
    <Head>
      <title>Thesis title generator idea</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />{' '}
      <meta
        property="og:title"
        content="Thesis title generator idea"
        key="title"
      />
      <link rel="icon" href="/img/logo-favicon.png" />
    </Head>
  );
};

export default HeadTag;
