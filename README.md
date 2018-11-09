---

# Share Text Embedded


[![npm version](https://badge.fury.io/js/sharetext-embedded.svg)](https://badge.fury.io/js/sharetext-embedded) [![GitHub issues](https://img.shields.io/github/issues/W-Kentaro/ShareTextEmbedded.svg)](https://github.com/W-Kentaro/ShareTextEmbedded/issues)  [![GitHub license](https://img.shields.io/github/license/W-Kentaro/ShareTextEmbedded.svg)](https://github.com/W-Kentaro/ShareTextEmbedded/blob/master/LICENSE) 

---

Twiitter facebook LINEのシェアURLを自動で埋め込みます。  
エンコード処理の削減で、
視認性・メンテナンス性を向上させます。  

---

## Get Start

download link => https://github.com/W-Kentaro/ShareTextEmbedded/archive/master.zip  
  
  
### npm  

npm page => https://www.npmjs.com/package/sharetext-embedded  

```
//npm install
npm i sharetext-embedded
```

```javascript
// import
import ShareTextEmbedded from 'sharetext-embedded';
```

### Script Tags

```html
<script src="../dist/sharetext-embedded.min.js"></script>
```

---
## DEMOS

sample page => https://w-kentaro.github.io/ShareTextEmbedded/sample/  
  
---

## Overview  
  
  
SNSシェア文を自動エンコードして挿入します  

```html
 <a href="" target="_blank" data-share="twitter">Twitterシェアテキスト</a>
 <a href="" target="_blank" data-share="facebook">facebookシェアテキスト</a>
 <a href="" target="_blank" data-share="line">LINEシェアテキスト</a>
 ```

### Template

基本テンプレート  

```javascript
var ShareText = new ShareTextEmbedded({
  url: 'URLを入れてください。',
  twitter: {
    text: 'シェア文を入れてください。',
    hash: 'ハッシュタグ',
  },
  facebook: {
    text: 'シェア文を入れてください。',
  },
  line: {
    text: 'シェア文を入れてください。',
  }
});
```

HTMLとJSに分けて管理

```
// HTMLに記述
<script>
  var share ={
      url: '',
      twitter: {
        text: 'シェア文を入れてください。',
        hash: 'ハッシュタグ',
      },
      facebook: {
        text: 'シェア文を入れてください。',
      },
      line: {
        text: 'シェア文を入れてください。',
      }
    }
</script>

var ShareText = new ShareTextEmbedded(share);
```

最小テンプレート

```javascript
var ShareText = new ShareTextEmbedded();
```

data-shareに入れたSNSに対応するhrefを吐き出します    

---

## Properties  

```javascript
  var share = {
    init: true,
    url: '',
    text:'',
    twitter: {
      elem: '.twitter',
      url : 'sample',
      text: 'Twitterのシェア文です。\nTwitterのシェア文です。改行も可能です。',
      hash: 'サンプル', // 複数の場合はカンマで区切る
      via: 'sample',
      related: 'sample' 
    },
    facebook: {
      elem: '.facebook',
      url : 'sample',
      text: 'facebookのシェア文です。',
    },
    line: {
      elem: '.line',
      url : 'sample',
      text: 'LINEの\nシェア文です。',
    }
  };
```


## Methods
  
- init()

```javascript
ShareText.init();
```

宣言時にhrefに書き込み  
  
- update()

```javascript
Sharetext.update({data});
```
[DEMO](https://w-kentaro.github.io/ShareTextEmbedded/sample/#update)    

シェアの内容をdataの中身で上書き、  
init()しないとurlの変更はされません。  
  
---
