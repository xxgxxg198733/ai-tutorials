"use client";

import Link from "next/link";
import { useEffect, useCallback } from "react";
import { categories } from "@/data/categories";
import { SITE_NAME } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-bold text-lg">{SITE_NAME}</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          <Link
            href="/"
            onClick={onClose}
            className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            🏠 Home
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              onClick={onClose}
              className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <span className="font-medium">
                {cat.icon} {cat.title}
              </span>
              <span className="block text-sm text-muted-foreground mt-0.5">
                Browse tutorials
              </span>
            </Link>
          ))}
          <hr className="my-4 border-border" />
          <Link
            href="/about"
            onClick={onClose}
            className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
          >
            About
          </Link>
          <Link
            href="/privacy"
            onClick={onClose}
            className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
