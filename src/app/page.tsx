import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center min-h-screen flex items-center justify-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto p-6">
        <div className="flex flex-col gap-6 p-8 rounded-xl bg-gray-900/90 w-4/5 sm:max-w-md mx-auto text-white text-lg sm:text-xl shadow-lg">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Computer <br /> Repair Shop
          </h1>
          <address className="not-italic text-base sm:text-lg">
            Av. Reforma 222 <br />
            Mexico City
          </address>
          <p className="text-base sm:text-lg">Open Daily: 10 a.m. to 5 p.m.</p>
          <span>Tel: </span>
          <Link
            href="tel:80090002000"
            className="text-blue-400 hover:text-blue-300 underline text-base sm:text-lg"
          >
            <span>Tel: </span>
            800 9000 2000
          </Link>
        </div>
        <div className="mt-6">
          <Link
            href="/login"
            className="text-blue-400 hover:text-blue-300 underline text-lg"
          >
            Login Page
          </Link>
        </div>
      </main>
    </div>
  );
}
