import React, { useState } from "react";
import RichTextEditor, { BaseKit } from "reactjs-tiptap-editor";
import {
  History,
  Blockquote,
  Bold,
  BulletList,
  Clear,
  Code,
  CodeBlock,
  Color,
  // Document,
} from "reactjs-tiptap-editor";
// import  Document  from 'reactjs-tiptap-editor';
// Import CSS
import "reactjs-tiptap-editor/style.css";

const extensions = [
  BaseKit.configure({
    // Show placeholder
    placeholder: {
      showOnlyCurrent: true,
    },

    // Character count
    characterCount: {
      limit: 50_000,
    },
  }),
  CodeBlock.configure({ defaultTheme: "dracula" }),
  History,
  BaseKit,
  Blockquote,
  Bold,
  BulletList,
  Clear,
  Code,
  Color,
  // Document,
];

const Payment = () => {
  // const DEFAULT = '';
  const [content, setContent] = useState("DEFAULT");

  const onChangeContent = (value: any) => {
    setContent(value);
  };
  return (
    <div className="">
      <RichTextEditor
        output="html"
        content={content}
        onChangeContent={onChangeContent}
        extensions={extensions}
      />
    </div>
  );
};

export default Payment;
