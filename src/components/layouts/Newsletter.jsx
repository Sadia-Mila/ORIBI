import { useState } from "react";
import Container from "../Container";
import Heading from "../Heading";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-[#F7F6FF]">
      <Container>
        <div className="rounded-[40px] bg-white p-10 shadow-[0_20px_60px_rgba(76,63,216,0.12)] sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
            <div>
              <Heading as="h2" text="Stay updated with premium offers" className="text-3xl font-bold text-[#1F1F1F]" />
              <p className="mt-4 max-w-xl text-base leading-7 text-[#5D5D5D]">
                Join our newsletter to receive exclusive sales, new product launches, and styling tips curated for the modern shopper.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-full border border-[#D9D9D9] bg-[#F7F7FF] py-4 px-5 text-base text-[#2A2A2A] outline-none transition focus:border-[#241B8E]"
              />
              <button type="submit" className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-[#241B8E] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1b1476]">
                Subscribe
              </button>
            </form>
            {submitted && (
              <p className="text-sm text-[#2F6F70]">Thanks for subscribing! You’ll receive our next promotion email soon.</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
