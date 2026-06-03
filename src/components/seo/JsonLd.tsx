type JsonLdType = "WebSite" | "Article" | "CollectionPage" | "BreadcrumbList";

interface JsonLdProps {
  type: JsonLdType;
  data: Record<string, unknown>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  let schema: Record<string, unknown>;

  switch (type) {
    case "WebSite":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        ...data,
      };
      break;
    case "Article":
      schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        ...data,
      };
      break;
    case "CollectionPage":
      schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        ...data,
      };
      break;
    case "BreadcrumbList":
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        ...data,
      };
      break;
    default:
      schema = { "@context": "https://schema.org", ...data };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
