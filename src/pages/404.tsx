import Link from "next/link";

const Error = () => {
  return (
    <main className="flex h-screen items-center justify-center px-5">
      <div className="card w-128 gap-6 border-x-4 border-indigo-500 p-10 text-center shadow-xl md:bg-base-100">
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>
    </main>
  );
};

export default Error;
