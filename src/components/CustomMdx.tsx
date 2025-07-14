import { roboto } from "@/lib/fonts/fonts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Explanation } from "./programming-problem/Explanation";
import { highlight } from "sugar-high";
function Code({
  children,
  ...props
}: {
  children: string;
  [key: string]: unknown;
}) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}
const components = {
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-4 text-[16px] text-blog-text-foreground" {...props} />
  ),
  h1: (props: React.ComponentProps<"p">) => (
    <p className={`text-[32px] font-bold ${roboto}`} {...props} />
  ),
  h2: (props: React.ComponentProps<"p">) => (
    <p className={`text-[24x] font-bold mb-[12px] ${roboto}`} {...props} />
  ),
  h3: (props: React.ComponentProps<"p">) => (
    <p className={`text-[18px] font-bold ${roboto}`} {...props} />
  ),
  h4: (props: React.ComponentProps<"p">) => (
    <p className={`text-[16px] font-bold ${roboto}`} {...props} />
  ),
  h5: (props: React.ComponentProps<"p">) => (
    <p className={`text-[13px] font-bold ${roboto}`} {...props} />
  ),
  h6: (props: React.ComponentProps<"p">) => (
    <p className={`text-[12px] font-bold ${roboto}`} {...props} />
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Explanation: (props: any) => <Explanation {...props} />,
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc ml-10 mb-[12px] list-inside" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="list-decimal mb-[12px] list-inside" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a {...props} className="underline"></a>
  ),
  code: Code,
  pre: (props: React.ComponentProps<"pre">) => (
    <pre
      className="w-full h-full p-[15.3px] overflow-x-scroll border rounded-2xl "
      {...props}
    />
  ),
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CustomMdx(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
