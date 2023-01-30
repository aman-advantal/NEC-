import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";


const Jodit = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    autofocus: true,
    cursorAfterAutofocus: "end",
    uploader: {
      insertImageAsBase64URI: true,
    },
  };

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onChange={(newContent) => setContent(newContent)}
      />
    </>
  );
};

export default Jodit;