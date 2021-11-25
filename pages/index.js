import Head from 'next/head';
import ToReviewWrapper from '../components/app/ToReviewWrapper';
import TabNavigation from '../components/app/TabNavigation';

export default function Main() {
  return (
    <div>
      <Head>
        <title>Learn in space</title>
        <meta name='description' content='spaced repetition learning' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex'>
        <TabNavigation />
        <ToReviewWrapper />
      </main>
    </div>
  );
}
