"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import xendIcon from "@/assets/icons/XEND_icon.png";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Sobre el proyecto" },
    { href: "/design", label: "Interfaz (UX/UI)" },
    { label: "Base de datos", href: "/database" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#152c75] to-[#1e40af] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-all duration-200 hover:scale-105"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src={xendIcon}
                alt="Xend logo"
                fill
                className="object-contain transition-transform duration-200 group-hover:scale-110"
                priority
              />
            </div>
            <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              XEND
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive
                      ? "text-white bg-blue-600/20 shadow-inner"
                      : "text-blue-100 hover:text-white hover:bg-white/10"}
                    hover:scale-105 active:scale-95
                  `}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

            <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none group"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
            <span
                className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                isOpen
                    ? "rotate-45 translate-y-0"
                    : "-translate-y-2 group-hover:bg-blue-200"
                }`}
            />
            <span
                className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100 group-hover:bg-blue-200"
                }`}
            />
            <span
                className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                isOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-2 group-hover:bg-blue-200"
                }`}
            />
            </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-blue-500/30 pt-4 animate-slide-down">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
