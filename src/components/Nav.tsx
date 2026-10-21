"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Mark } from "./Mark";
import { site } from "@/data/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const targets = site.nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-row">
        <Link href="/" className="brand" aria-label="WIEXORA home" onClick={close}>
          <Mark />
          <span>{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="nav-links">
          {site.nav.map((n) => (
            <Link key={n.id} href={n.href} aria-current={active === n.id ? "true" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="nav-right">
          <Link href="/resume" className="nav-btn nav-btn-outline">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3.5 1.5h5l3 3v8h-8a1 1 0 01-1-1v-9a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M8.5 1.5v3h3" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Resume
          </Link>
          <Link href="/#contact" className="nav-btn nav-btn-glow">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1L1 5v7a1 1 0 001 1h10a1 1 0 001-1V5L7 1z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M1 5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Start a Project
          </Link>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" fill="none" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" fill="none" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-panel" ref={panelRef} className="panel" role="dialog" aria-label="Site menu">
          {site.nav.map((n) => (
            <Link key={n.id} href={n.href} onClick={close}>{n.label}</Link>
          ))}
          <Link href="/resume" onClick={close}>Resume</Link>
          <Link href="/#contact" className="btn btn-primary" onClick={close}>Start a Project</Link>
        </div>
      )}
    </header>
  );
}
