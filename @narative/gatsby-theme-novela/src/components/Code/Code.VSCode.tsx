import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import styled from "@emotion/styled";

import Icons from "@icons";
import mediaqueries from "@styles/media";
import { copyToClipboard } from "@utils";

function CodePrism(props) {
  // const shouldHighlightLine = calculateLinesToHighlight(metastring);
  console.log(props);
  return <div {...props} />;
}

export default CodePrism;

function Copy({ toCopy }: { toCopy: string }) {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(toCopy);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <CopyButton onClick={copyToClipboardOnClick}>
      {hasCopied ? (
        <>
          Copied <Icons.Copied fill="#6f7177" />
        </>
      ) : (
        <>
          Copy <Icons.Copy fill="#6f7177" />
        </>
      )}
    </CopyButton>
  );
}

const CopyButton = styled.button`
  position: absolute;
  right: 22px;
  top: 24px;
  padding: 8px 12px 7px;
  border-radius: 5px;
  color: #6f7177;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  ${mediaqueries.tablet`
    display: none;
  `}
`;
