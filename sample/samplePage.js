'use strict';

var ShareText01 = new ShareTextEmbedded(share);

var ShareText02 = new ShareTextEmbedded({
  url: 'https://github.com/W-Kentaro/ShareTextEmbedded',
  text: 'ShareTextEmbeddedはシェア文を自動でエンコードしてリンクを埋め込む関数です。',
  twitter: {
    elem: '.js-share-twitter',
    hash: 'ShareTextEmbedded',
    via: 'twitterjp',
  },
  facebook: {
    elem: '.js-share-facebook',
  },
  line: {
    elem: '.js-share-line',
  }
});

var randomText = 'あなたはボタンを0回押しました';
var ShareText03 = new ShareTextEmbedded({
  twitter: {
    elem: '[data-share="random-twitter"]',
    text: randomText,
  },
  facebook: 'disable',
  line: 'disable',
});

var count = 0;

document.querySelector('#random-button').addEventListener('click', function () {
  count++;
  randomText = 'あなたはボタンを' + count + '回押しました';

  document.querySelector('.random-twitter').innerHTML = randomText;

  ShareText03.update({
    twitter: {
      text: randomText,
    }
  });
  ShareText03.init();
});


var ShareText04 = new ShareTextEmbedded({
  twitter: {
    elem: null,
    text: 'テキストを入力していません',
  },
  facebook: 'disable',
  line: 'disable',
});

document.querySelector('#textarea-button').addEventListener('click', function () {
  ShareText04.update({
    twitter: {
      text: document.querySelector('.textarea').value,
    }
  });
  window.open(ShareText04.URL.twitter, '_blank');
});