import ReactMarkdown from "react-markdown";

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-6xl text-[#282828]">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-5xl text-[#282828]">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-4xl text-[#282828]">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-3xl text-[#282828]">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-2xl text-[#282828]">{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-xl text-[#282828]">{children}</h6>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
