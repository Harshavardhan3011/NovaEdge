"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ChevronDownIcon, CloseIcon, MenuIcon, SparklesIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const programItems = [
    { label: "Technical", href: "/programs/technical" },
    { label: "Soft Skills", href: "/programs/soft-skills" },
    { label: "Aptitude", href: "/programs/aptitude" },
  ];

  const closeMenus = () => {
    setMobileOpen(false);
    setProgramsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-gray-900 text-gray-200">
        <Container>
          <div className="flex items-center justify-between gap-4 py-2 text-xs sm:text-sm">
            <div className="flex min-w-0 items-center gap-3 sm:gap-6">
              <a href="tel:+1222349987" className="truncate transition-colors hover:text-white">
                +1 (22) 234-9987
              </a>
              <a
                href="mailto:info@gmail.com"
                className="hidden truncate transition-colors hover:text-white sm:inline"
              >
                info@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <span className="hidden text-gray-300 md:inline">Welcome to Nova Edge Academy</span>
              <span className="hidden text-gray-500 md:inline">|</span>
              <Link href="/contact" className="transition-colors hover:text-white">
                Login
              </Link>
              <Link href="/contact" className="transition-colors hover:text-white">
                Register
              </Link>
            </div>
          </div>
        </Container>

        <nav className="absolute left-1/2 top-full z-50 mt-1 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border border-gray-200 bg-white/80 shadow-md backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="w-56">
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <SparklesIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                    Nova Edge
                  </span>
                  <span className="text-base font-semibold text-slate-900">Academy</span>
                </span>
              </Link>
            </div>

            <div className="hidden flex-1 items-center justify-center lg:flex">
              <div className="flex items-center justify-center gap-8">
                <Link
                  href="/"
                  onClick={closeMenus}
                  className={cn(
                    "text-sm font-medium text-gray-600 transition-all duration-200 hover:text-blue-500",
                    pathname === "/" ? "text-blue-600" : "",
                  )}
                >
                  Home
                </Link>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setProgramsOpen((current) => !current)}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:text-blue-500",
                      pathname.startsWith("/programs") ? "text-blue-600" : "",
                    )}
                  >
                    Our Programs
                    <ChevronDownIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>

                  {programsOpen ? (
                    <div className="absolute left-0 top-full mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-md">
                      {programItems.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenus}
                          className="block rounded-xl px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>

                <Link
                  href="/online-training"
                  onClick={closeMenus}
                  className={cn(
                    "text-sm font-medium text-gray-600 transition-all duration-200 hover:text-blue-500",
                    pathname === "/online-training" ? "text-blue-600" : "",
                  )}
                >
                  Online Training
                </Link>

                <Link
                  href="/institutional"
                  onClick={closeMenus}
                  className={cn(
                    "text-sm font-medium text-gray-600 transition-all duration-200 hover:text-blue-500",
                    pathname === "/institutional" ? "text-blue-600" : "",
                  )}
                >
                  Institutional
                </Link>

                <Link
                  href="/about"
                  onClick={closeMenus}
                  className={cn(
                    "text-sm font-medium text-gray-600 transition-all duration-200 hover:text-blue-500",
                    pathname === "/about" ? "text-blue-600" : "",
                  )}
                >
                  About
                </Link>

                <Link
                  href="/gallery"
                  onClick={closeMenus}
                  className={cn(
                    "text-sm font-medium text-gray-600 transition-all duration-200 hover:text-blue-500",
                    pathname === "/gallery" ? "text-blue-600" : "",
                  )}
                >
                  Gallery
                </Link>
              </div>
            </div>

            <div className="hidden w-56 justify-end lg:flex">
              <ButtonLink href="/contact" className="rounded-full px-5 py-2 shadow-sm">
                Contact Us
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen ? (
            <div className="px-4 pb-4 lg:hidden sm:px-6">
              <div className="space-y-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <Link
                  href="/"
                  onClick={closeMenus}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-slate-100",
                    pathname === "/" ? "text-blue-700" : "text-slate-700",
                  )}
                >
                  Home
                </Link>

                <div className="rounded-2xl bg-slate-50 p-2">
                  <button
                    type="button"
                    onClick={() => setProgramsOpen((current) => !current)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800"
                  >
                    Our Programs
                    <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {programsOpen ? (
                    <div className="space-y-1 pb-1 pl-2 pr-1">
                      {programItems.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenus}
                          className="block rounded-xl px-3 py-3 text-sm text-slate-600 transition-colors hover:bg-white hover:text-blue-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>

                <Link
                  href="/about"
                  onClick={closeMenus}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-slate-100",
                    pathname === "/about" ? "text-blue-700" : "text-slate-700",
                  )}
                >
                  About
                </Link>

                <Link
                  href="/online-training"
                  onClick={closeMenus}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-slate-100",
                    pathname === "/online-training" ? "text-blue-700" : "text-slate-700",
                  )}
                >
                  Online Training
                </Link>

                <Link
                  href="/institutional"
                  onClick={closeMenus}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-slate-100",
                    pathname === "/institutional" ? "text-blue-700" : "text-slate-700",
                  )}
                >
                  Institutional
                </Link>

                <Link
                  href="/gallery"
                  onClick={closeMenus}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-slate-100",
                    pathname === "/gallery" ? "text-blue-700" : "text-slate-700",
                  )}
                >
                  Gallery
                </Link>

                <ButtonLink href="/contact" className="mt-2 w-full rounded-full">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}