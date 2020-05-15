import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import API from './API';
// import Downshift from 'downshift';
import axios from 'axios';

// const MemeStyle = css`
//   color: white;
// `;

// const memLink = "https://memegen.link/{picture}/{Line1}/{Line2}.jpg?watermark=none"

const flexStyle = css`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

export default function CreateMeme() {
  const [picture, setPicture] = useState('fry');
  const [lineOne, setLineOne] = useState('Do');
  const [lineTwo, setLineTwo] = useState('it');
  const [newUrl, setNewUrl] = useState(
    'https://memegen.link/' +
      picture +
      '/' +
      lineOne +
      '/' +
      lineTwo +
      '/.jpg?watermark=none',
  );
  const [select, setSelect] = useState([]);

  useEffect(() => {
    fetch('https://memegen.link/api/templates/', {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        const imgData = Object.keys(data);
        setSelect(imgData);
      });
  }, []);

  return (
    <flex css={flexStyle}>
      {/* <ul>
        {Object.value(data).map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul> */}
      {/* {newUrl} {picture}
      {lineOne}
      {lineTwo} */}
      <form
      // value={newUrl} onSave={(event) => setNewUrl(event.target.value)}
      >
        {/* <input
          type="text"
          name="picture"
          placeholder="your picture"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        /> */}
        <select>
          value={picture}
          {select.map((name, i) => {
            return (
              <option key={i} value={name}>
                {name}
              </option>
            );
          })}
          onChange={(e) => setPicture(e.target.value)}
        </select>
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
          Submit
        </button>
      </form>
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
        alt="Here will be your Meme"
      />
    </flex>
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
