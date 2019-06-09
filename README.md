
# SNS_Share


[![Build Status](https://travis-ci.org/W-Kentaro/ShareTextEmbedded.svg?branch=master)](https://travis-ci.org/W-Kentaro/ShareTextEmbedded) [![npm version](https://badge.fury.io/js/sns_share.svg)](https://www.npmjs.com/package/sns_share) [![GitHub issues](https://img.shields.io/github/issues/W-Kentaro/ShareTextEmbedded.svg)](https://github.com/W-Kentaro/ShareTextEmbedded/issues)  [![GitHub license](https://img.shields.io/github/license/W-Kentaro/ShareTextEmbedded.svg)](https://github.com/W-Kentaro/ShareTextEmbedded/blob/master/LICENSE) 

---

Twiitter facebook LINEのシェアURLを自動で埋め込みます。  
エンコード処理の削減で、
視認性・メンテナンス性を向上させます。  
  
※update※  
LINEのシェアURL変更に合わせ  
facebookとLINEからtextを削除いたしました。
文言はog:descriptionから自動取得されます。


## Share Text Generator

https://w-kentaro.github.io/SNS_Share/convert/


---

## Get Start

download link => https://github.com/W-Kentaro/SNS_Share/archive/master.zip  
  
  
### npm  

npm page => https://www.npmjs.com/package/sns_share  

```
//npm install
npm i sharetext-embedded
```

```javascript
// import
import 'sharetext-embedded';
```

### Script Tags

```html
<script src="../dist/sharetext-embedded.min.js"></script>
```

---
## DEMOS

sample page => https://github.com/W-Kentaro/SNS_Share/sample/  
  
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
  text: 'シェア文を入れてください。',
  hash: 'ハッシュタグ',
});
```

HTMLとJSに分けて管理

```
// HTMLに記述
<script>
  var share ={
      url: 'URL',
      text: 'シェア文を入れてください。',
      hash: 'ハッシュタグ',
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
    url: 'URL',
    text:'share text',
    hash: 'hash', 
    twitter: {
      url : 'URL',
      via: 'sample',
      related: 'sample' 
    },
    facebook: {
      elem: 'element',
    },
    line: {
      elem: 'element',
    }
  };
```

#### COMMON

| プロパティ | デフォルト | 説明 |
|:-----------|:-----------|:------------------------|
| init | true | trueで自動的に挿入  falseの場合init()時に挿入      |
| url | og:url | シェアに埋め込まれるURL  指定がない場合はog:urlを使用  |
| text | og:description | シェア文言、指定がない場合og:descriptionを使用 |
| hash |false | ハッシュタグ 現在はTwitterのみ使用 twitter.hashに上書きされる |

#### Twitter

| プロパティ | デフォルト | 説明 |
|:-----------|:-----------|:------------------------|
| twitter | <object> | 'disable'でtwitterシェア文は生成されない |
| elem | [data-share="twitter"] | 挿入箇所  class/id/data属性で指定 |
| url | common url | シェアに埋め込まれるURL  指定がない場合はcommon urlを使用 nullでURL空に(TEXTが空の場合はエラー)|
| via | false |  アカウント指定 指定がない場合は表示しない |
| related | false | おすすめユーザー表示 指定がない場合は表示しない |

#### Facebook

| プロパティ | デフォルト | 説明 |
|:-----------|:-----------|:------------------------|
| facebook | <object> | 'disable'でfacebookシェア文は生成されない |
| elem | [data-share="facebook"] | 挿入箇所  class/id/data属性で指定 |


#### LINE

| プロパティ | デフォルト | 説明 |
|:-----------|:-----------|:------------------------|
| line | <object> | 'disable'でLINEシェア文は生成されない |
| elem | [data-share="line"] | 挿入箇所  class/id/data属性で指定 |

---

## Parameters

| パラメータ |  説明 |
|:--------|:-----------|
| ShareText.URL.twitter | TwitterのシェアURL |
| ShareText.URL.facebook | facebookのシェアURL |
| ShareText.URL.line | LINEのシェアURL |

---

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
[DEMO](https://github.com/W-Kentaro/SNS_Share/sample/#update)    

シェアの内容をdataの中身で上書き、  
init()しないとurlの変更はされません。  
  
---
