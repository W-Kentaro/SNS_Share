'use strict';

var ShareText01 = new ShareTextEmbedded(share);


ShareText01.update({
  twitter: {
    text: 'hogehoge',
  }
});

console.log(ShareText01);
ShareText01.init();

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
