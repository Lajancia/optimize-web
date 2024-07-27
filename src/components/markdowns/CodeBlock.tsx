import React from "react";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function CodeBlock(props: any) {
  const { language, value } = props;
  return (
    <SyntaxHighlighter
      language={language}
      style={Object.assign(materialLight, {
        'pre[class*="language-"]': {
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "10px",
        },
      })}
    >
      {value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
