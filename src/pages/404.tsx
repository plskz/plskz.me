import Head from "next/head";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <Head>
        <title>Zai Santillan</title>
        <meta name="author" content="Zai Santillan (Palskie)" />
        <meta name="twitter:site" content="@xiaskii" />
        <meta name="twitter:creator" content="@xiaskii" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="Software Engineer, Changing the world, one project at a time."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Zai Santillan" />
        <meta property="og:site_name" content="Zai Santillan" />
        <meta
          property="og:description"
          content="Software Engineer, Changing the world, one project at a time."
        />
        <meta property="og:url" content="https://plskz.me" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://imgur.com/DFTQXmy.png" />
      </Head>

      <main className="flex h-screen items-center justify-center px-5">
        <div className="card w-128 gap-6 border-x-4 border-indigo-500 p-10 text-center shadow-xl md:bg-base-100">
          <h1 className="bg-gradient-to-r from-[#cba6f7] to-[#f2cdcd] bg-clip-text text-2xl font-extrabold text-transparent">
            404 - Page Not Found
          </h1>
          <Link className="hover:text-blue" href="/">
            Go back home
          </Link>
        </div>
      </main>
    </>
  );
};

export default Error;
