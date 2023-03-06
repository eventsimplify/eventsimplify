import React from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

import "react-quill/dist/quill.bubble.css";

const ShowRichText = ({ text }: { text: string }) => {
  return (
    <ReactQuill
      value={text}
      readOnly={true}
      theme={"bubble"}
      style={{
        border: "none",
        boxShadow: "none",
      }}
    />
  );
};

export default ShowRichText;
