import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Hello world</h1>
        <Link href="posts/first-post">
          <a>Clique</a>
        </Link>
      </main>
    </div>
  );
}
