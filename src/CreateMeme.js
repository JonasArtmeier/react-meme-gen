import React, { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// const MemeStyle = css`
//   color: white;
// `;

// const memLink = "https://memegen.link/{picture}/{Line1}/{Line2}.jpg?watermark=none"

export default function CreateMeme() {
  const [picture, setPicture] = useState('');
  const [lineOne, setLineOne] = useState('');
  const [lineTwo, setLineTwo] = useState('');
  const [newUrl, setNewUrl] = useState(
    'https://memegen.link/' +
      picture +
      '/' +
      lineOne +
      '/' +
      lineTwo +
      '/.jpg?watermark=none',
  );

  return (
    <div>
      {newUrl} {picture}
      {lineOne}
      {lineTwo}
      <img
        src={
          newUrl
          // 'https://memegen.link/' +
          // { picture } +
          // '/' +
          // { lineOne } +
          // '/' +
          // { lineTwo } +
          // '/.jpg?watermark=none'
        }
        alt="new"
      />
      <form
      // value={newUrl} onSave={(event) => setNewUrl(event.target.value)}
      >
        <input
          type="text"
          name="picture"
          placeholder="your picture"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
        <input
          type="text"
          name="Line 1"
          placeholder="Line 1"
          value={lineOne}
          onChange={(e) => setLineOne(e.target.value)}
        />
        <input
          type="text"
          name="Line 2"
          placeholder="Line 2"
          value={lineTwo}
          onChange={(e) => setLineTwo(e.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setNewUrl(
              'https://memegen.link/' +
                picture +
                '/' +
                lineOne +
                '/' +
                lineTwo +
                '/.jpg?watermark=none',
            )
          }
        >
          Residence
        </button>
      </form>
    </div>
  );
}

// fetch("https://memegen.link/fry/uhhhh/shit.jpg?watermark=none", {
//   "referrer": "https://memegen.link/",
//   "referrerPolicy": "no-referrer-when-downgrade",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });

// onSubmit={function fetch('https://memegen.link/{picture}/{Line1}/{Line2}.jpg?watermark=none')
//     .then(data => console.log(data));}
