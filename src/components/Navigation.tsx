"use client";

import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/data/profile";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-black/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-[1520px] items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Domovská stránka portfólia Jakuba Trnku"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-11 w-11 place-items-center overflow-hidden bg-white p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:-translate-y-0.5">
            <Image
              src="/logo-jt-2.png"
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="hidden text-xs font-black uppercase tracking-normal text-white sm:block">Jakub Trnka</span>
        </a>

        <div className="hidden items-center gap-0 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-l border-white/12 px-4 py-2 text-xs font-bold uppercase text-white/70 transition-colors hover:bg-white hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/Jakub-Trnka-CV.pdf"
            download
            className="hidden items-center gap-2 bg-white px-4 py-2 text-xs font-black uppercase text-black transition-colors hover:bg-[var(--accent)] hover:text-white sm:inline-flex"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            CV
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/15 text-white transition-colors hover:bg-white hover:text-black lg:hidden"
            aria-label="Otvoriť navigačné menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-[1520px] gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-white/12 px-3 py-3 text-sm font-bold uppercase text-white/80 hover:bg-white hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Jakub-Trnka-CV.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[var(--accent)] px-4 py-3 text-sm font-black uppercase text-white"
              onClick={() => setIsOpen(false)}
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Stiahnuť CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
