// Server-rendered JSON-LD. Renders a plain <script type="application/ld+json">
// so structured data is present in the initial HTML (next/script injects it
// only after hydration). No "use client" – usable from any Server Component.
type JsonLdProps = {
  data: Record<string, unknown>;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so a string value can never close the script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
