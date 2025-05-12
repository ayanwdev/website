import Link from "next/link";
import { luckiestGuy } from "../layout";

const navLinks = ["about", "projects", "contact", "blog"];

export default function Nav() {
  return (
    <nav className="flex w-screen p-8">
      <section className="flex w-full flex-row justify-between border-b-2 border-b-slate-500 p-2">
        <div className="flex flex-row">
          <div>
            <Link
              href="/"
              className={`${luckiestGuy.className} text-4xl text-yellow-400 hover:underline`}
            >
              {"AYANW"}
            </Link>
          </div>
          <div className="flex pl-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link}`}
                className={
                  "mr-4 text-lg font-semibold text-slate-500 transition duration-100 hover:text-slate-100 hover:underline"
                }
              >
                {link.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-baseline">
          <span
            className={`${luckiestGuy.className} flex items-center justify-center rounded-sm bg-blue-500 p-2 pb-1`}
          >
            {"HIRE ME"}
          </span>
        </div>
      </section>
    </nav>
  );
}
