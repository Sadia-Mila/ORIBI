import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";

const Footer = () => {
  return (
    <footer className="bg-[#F7F5FF] py-20 text-[#343434]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Link to="/">
              <Image imgSrc={Logo} imgAlt="Orebi logo" className="h-12 w-auto" />
            </Link>
            <p className="max-w-sm text-sm leading-7 text-[#5C5C5C]">
              Orebi offers premium products, fast delivery, and a polished shopping experience that feels modern and intuitive.
            </p>
            <div className="flex items-center gap-3 text-sm text-[#5C5C5C]">
              <FaFacebookF className="h-9 w-9 rounded-full border border-[#D9D9F0] bg-white p-2 text-[#241B8E]" />
              <FaLinkedinIn className="h-9 w-9 rounded-full border border-[#D9D9F0] bg-white p-2 text-[#241B8E]" />
              <FaInstagram className="h-9 w-9 rounded-full border border-[#D9D9F0] bg-white p-2 text-[#241B8E]" />
            </div>
          </div>
          <div>
            <Heading as="h3" text="Navigate" className="mb-5 text-lg font-semibold text-[#1F1F1F]" />
            <ul className="space-y-3 text-sm text-[#5C5C5C]">
              <li>
                <Link to="/" className="transition hover:text-[#241B8E]">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="transition hover:text-[#241B8E]">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-[#241B8E]">About</Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-[#241B8E]">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <Heading as="h3" text="Support" className="mb-5 text-lg font-semibold text-[#1F1F1F]" />
            <ul className="space-y-3 text-sm text-[#5C5C5C]">
              <li className="transition hover:text-[#241B8E]">Privacy Policy</li>
              <li className="transition hover:text-[#241B8E]">Terms & Conditions</li>
              <li className="transition hover:text-[#241B8E]">Shipping Info</li>
              <li className="transition hover:text-[#241B8E]">Secure Payments</li>
            </ul>
          </div>
          <div className="space-y-4">
            <Heading as="h3" text="Contact" className="text-lg font-semibold text-[#1F1F1F]" />
            <p className="text-sm leading-7 text-[#5C5C5C]">support@orebi.com</p>
            <p className="text-sm leading-7 text-[#5C5C5C]">+1 (555) 123-4567</p>
            <p className="text-sm leading-7 text-[#5C5C5C]">575 Crescent Ave, Quakertown PA</p>
          </div>
        </div>

        <div className="mt-16 border-t border-[#E9E9F0] pt-8 text-sm text-[#6B6B6B]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Orebi. Designed for premium ecommerce.</p>
            <p>Built with modern UI patterns, consistency, and delightful interactions.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
