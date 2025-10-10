"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/setting", label: "Setting" },
  ];

  return (
    <header className="w-full flex bg-transparent text-color-text gap-60 p-8">
      <div className="text-3xl w-1/3 flex items-center font-bold">BRH Weather</div>
      <div className="w-1/3 flex justify-center items-center">
        <ul className="flex text-xl gap-10 text-color-text">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-all duration-200 ${
                  pathname === link.href ? "font-bold" : "font-normal"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/3 flex justify-end gap-4">
        <button className="px-10 py-4">Sign up</button>
      </div>
    </header>
  );
}