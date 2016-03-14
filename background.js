"use strict";

browser.browserAction.onClicked.addListener(() => {
  browser.downloads.showDefaultFolder();
});

/*
let all = [];
chrome.downloads.onChanged.addListener(change => {
  console.log(change);
  all.push(change);
});

chrome.runtime.onMessage.addListener((msg, sender, reply) => {
  reply(all);
});
*/
