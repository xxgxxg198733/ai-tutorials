"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import type { Article } from "@/types/content";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [fuseModule, setFuseModule] = useState<unknown>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Load Fuse.js and articles on first open
  useEffect(() => {
    if (open && !loaded) {
      Promise.all([
        import("fuse.js"),
        fetch("/api/search-index").then((r) => r.json()),
      ]).then(([Fuse, articles]) => {
        setFuseModule(Fuse.default);
        setAllArticles(articles);
        setLoaded(true);
      });
    }
  }, [open, loaded]);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [open]);

  // Search
  useEffect(() => {
    if (!query.trim() || !fuseModule || allArticles.length === 0) {
      setResults([]);
      return;
    }

    const Fuse = fuseModule as new (
      list: Article[],
      opts: Record<string, unknown>
    ) => { search: (q: string) => { item: Article }[] };

    const fuse = new Fuse(allArticles, {
      keys: ["title", "description", "keywords", "tags", "content"],
      threshold: 0.4,
      includeScore: true,
    });

    const searchResults = fuse.search(query).slice(0, 10).map((r) => r.item);
    setResults(searchResults);
  }, [query, fuseModule, allArticles]);

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
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div className="fixed inset-x-0 top-[20%] max-w-xl mx-auto px-4">
        <div className="bg-background rounded-xl shadow-2xl border border-border overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 border-b border-border">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-muted-foreground shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 200+ AI tutorials..."
              className="flex-1 py-4 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto">
            {query.trim() === "" ? (
              <div className="p-6 text-center text-muted-foreground text-sm">
                Type to search across all 200+ AI tutorials...
              </div>
            ) : results.length === 0 ? (
              <div className="p-6 text-center text-muted-foreground text-sm">
                No articles found for &quot;{query}&quot;
              </div>
            ) : (
              <ul className="py-2">
                {results.map((article) => (
                  <li key={`${article.category}/${article.slug}`}>
                    <Link
                      href={`/${article.category}/${article.slug}`}
                      onClick={onClose}
                      className="block px-4 py-3 hover:bg-secondary transition-colors"
                    >
                      <div className="font-medium text-sm">{article.title}</div>
                      <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                        {article.description}
                      </div>
                      <div className="flex gap-2 mt-1">
                        {article.tags?.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-border bg-muted/50">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Press <kbd className="px-1 py-0.5 rounded border border-border bg-background text-[10px]">ESC</kbd> to close</span>
              {results.length > 0 && <span>{results.length} results</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
