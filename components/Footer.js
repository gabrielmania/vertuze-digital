import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const navLinks = [
    ["Home", "/"],
    ["Movies", "/movies"],
    ["TV Series", "/series"],
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
  ].map(([link, url], i) => (
    <Link
      key={i}
      href={url}
      className={`active:bg-secondary active:text-primary ${
        router.pathname === url && "bg-secondary text-primary"
      }`}
    >
      {link}
    </Link>
  ));

  return (
    <footer className="footer p-10 bg-secondary text-primary flex justify-between flex-col items-center lg:items-start lg:flex-row xl:justify-evenly">
      <div className="flex flex-col items-center">
        <Image
          src="/logos/dark-nobg.png"
          className="w-48"
          alt="vertuze digital logo"
          width={500}
          height={500}
        />
        <p>Providing reliable tech since 2018</p>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        {navLinks}
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <a className="link link-hover">Company Policy</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
        <a className="link link-hover">Terms and Conditions</a>
        <a className="link link-hover">Social Responsibility</a>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h5 className="text-lg">Join us on our social media pages!</h5>
        <div className="flex mt-3">
          <i className="fa-brands fa-square-facebook fa-2xl mr-2"></i>
          <i className="fa-brands fa-square-instagram fa-2xl mr-2"></i>
          <i className="fa-brands fa-linkedin fa-2xl mr-2"></i>
          <i className="fa-brands fa-square-twitter fa-2xl mr-2"></i>
          <i className="fa-brands fa-youtube fa-2xl mr-2"></i>
        </div>
      </div>
    </footer>
  );
}
