"use client";

interface DownloadPDFButtonProps {
  articleTitle: string;
}

export function DownloadPDFButton({ articleTitle }: DownloadPDFButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
        </svg>
        Download PDF
      </button>
      <p className="text-xs text-muted-foreground">
        Opens your browser&rsquo;s print dialog — choose &ldquo;Save as PDF&rdquo; to download.
      </p>
    </div>
  );
}
