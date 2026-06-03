import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="text-6xl mb-6">🔍</div>
      <h1 className="text-4xl font-bold tracking-tight mb-4">Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
        Browse our AI tutorials from the homepage or use the search bar to find what you need.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          ← Back to Home
        </Link>
        <Link
          href="/ai-tools"
          className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
        >
          Browse AI Tools →
        </Link>
      </div>
    </div>
  );
}
