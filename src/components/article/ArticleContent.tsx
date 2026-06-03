import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="article-content prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-foreground
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
      prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:my-4
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-img:rounded-xl prose-img:shadow-md prose-img:my-6
      prose-strong:text-foreground prose-strong:font-semibold
      prose-ul:my-4 prose-ol:my-4 prose-li:text-foreground/85
      prose-blockquote:border-l-primary prose-blockquote:bg-secondary/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
      prose-code:text-primary prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-pre:bg-secondary prose-pre:border prose-pre:border-border
      [&_table]:w-full [&_table]:border-collapse
      [&_th]:border [&_th]:border-border [&_th]:p-2 [&_th]:bg-secondary [&_th]:text-left
      [&_td]:border [&_td]:border-border [&_td]:p-2
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeHighlight]}
        components={{
          img: ({ src, alt, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt || ""}
              loading="lazy"
              className="rounded-xl shadow-md my-6 max-w-full h-auto"
              {...props}
            />
          ),
          a: ({ href, children, ...props }) => {
            const isExternal = href?.startsWith("http");
            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                {...props}
              >
                {children}
              </a>
            );
          },
          pre: ({ children, ...props }) => (
            <pre className="bg-secondary border border-border rounded-xl p-4 overflow-x-auto my-6" {...props}>
              {children}
            </pre>
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-secondary text-primary px-1.5 py-0.5 rounded text-sm" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border p-2 bg-secondary text-left font-semibold">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-border p-2">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
