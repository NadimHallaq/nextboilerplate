import Head from "next/head";

export default function Home() {
  return (
    <div className="flex h-screen bg-green-500 items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Next-js boilerplate with:</h1>
        <ul>
          <li>Tailwindcss</li>
          <li>React-aria</li>
        </ul>
      </div>
    </div>
  );
}
