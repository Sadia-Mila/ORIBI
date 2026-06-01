import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#FBFBFF] px-4 py-20 text-center">
      <div className="max-w-xl rounded-[32px] border border-[#E9E9F0] bg-white p-12 shadow-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#241B8E]">404 Error</p>
        <h1 className="mt-6 text-5xl font-bold text-[#1F1F1F]">Page not found</h1>
        <p className="mt-6 text-base leading-8 text-[#6B6B6B]">
          The page you’re looking for doesn’t exist or has been moved. Let’s take you back to shopping.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-[#241B8E] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#1b1476]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Error
