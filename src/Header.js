/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const headerStyle = css`
  height: 40px;
  display: flex;
  flex-direction: top;
  align-items: top;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;

export default function Header() {
  return (
    <div className="Header">
      <header css={headerStyle}>Create your Meme</header>
    </div>
  );
}
