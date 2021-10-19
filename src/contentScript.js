'use strict';

import _ from 'lodash'
import constant from './common/constant'

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

const unitEvent = () => {
  const originHTML = document.body.innerHTML
  let finalHTML = originHTML
  constant.map(key => {
    finalHTML = finalHTML.replaceAll(key, '\*')
  })
  if(finalHTML !== originHTML) {
    document.body.innerHTML = finalHTML
  }
}
console.log(
  'Filterring almost information about dota2 memory as a chinese player starts'
);

document.onload = (event => {
  return () => {
    event()
    unitEvent()
  }
})(document.onload)

