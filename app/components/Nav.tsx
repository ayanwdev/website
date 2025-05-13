import { silkScreen } from "@/app/lib/fonts";
import Link from "next/link";

const navLinks = ["about", "projects", "contact", "blog"];

export default function Nav() {
  return (
    <nav className="flex w-screen pl-8 pr-8 pt-2">
      <section className="flex w-full flex-row justify-between border-b-2 border-b-slate-500 p-2 ">
        <div className="flex flex-row items-center">
          <div>
            <Link
              href="/"
              className={`${silkScreen.className} text-4xl text-yellow-400 hover:underline`}
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
            className={`${silkScreen.className} text-xl cursor-pointer flex items-center justify-center rounded-sm bg-blue-500 text-white p-1 pl-2 pr-2 hover:bg-white hover:text-blue-500 transition duration-100`}
          >
            {"HIRE ME"}
          </span>
        </div>
      </section>
    </nav>
  );
}
