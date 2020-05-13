import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const headerStyle = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default function Header() {
  return (
    <div className="Header">
      <header css={headerStyle}>Create your Meme</header>
    </div>
  );
}
