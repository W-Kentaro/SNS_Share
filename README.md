---

# ShareTextEmbedded

---

## 概要
  
[sample page](https://w-kentaro.github.io/ShareTextEmbedded/sample/)
  
SNSシェア文を自動エンコードして挿入します  

```html
<a href="" target="_blank" data-share="twitter">Twitterシェアテキスト</a>
```

基本テンプレート  

```javascript
  var share = {
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
  };

var ShareText = new ShareTextEmbedded(share);

```

最小テンプレート

```javascript
var ShareText = new ShareTextEmbedded();
```


data-shareに入れたSNSに対応するhrefを吐き出します  

---

## プロパティ  

```javascript
  var share = {
    url: '',
    init: true,
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

#### COMMON

| プロパティ | デフォルト | 説明 |
|:-----------|:-----------|:------------------------|
| init | true | trueで自動的に挿入  falseの場合init()時に挿入      |
| url | og:url | シェアに埋め込まれるURL  指定がない場合はog:urlを使用  |
| text | og:description | シェア文言、指定がない場合og:descriptionを使用 |

#### Twitter

| プロパティ | デフォルト | 説明 |
|:-----------|:-----------|:------------------------|
| elem | [data-share="twitter"] | 挿入箇所、複数可  class/id/data属性で指定 |
| url | common url | シェアに埋め込まれるURL  指定がない場合はcommon urlを使用  |
| text | common text | シェア文言、指定がない場合common textを使用  nullでテキストを空に |
| hash | false | ハッシュタグ 指定がない場合は表示しない  カンマで複数 |
| via | false |  アカウント指定 指定がない場合は表示しない |
| related | false | おすすめユーザー表示 指定がない場合は表示しない |

#### Facebook

| プロパティ | デフォルト | 説明 |
|:-----------|:-----------|:------------------------|
| elem | [data-share="facebook"] | 挿入箇所、複数可  class/id/data属性で指定 |
| url | common url | シェアに埋め込まれるURL  指定がない場合はcommon urlを使用  |
| text | common text | シェア文言、指定がない場合common textを使用 |


#### LINE

| プロパティ | デフォルト | 説明 |
|:-----------|:-----------|:------------------------|
| elem | [data-share="line"] | 挿入箇所、複数可  class/id/data属性で指定 |
| url | common url | シェアに埋め込まれるURL  指定がない場合はcommon urlを使用 nullでURLを空に |
| text | common text | シェア文言、指定がない場合common textを使用 |

---

## メソッド
  
- init()

init : false の場合のみ使用可能。  
宣言時に挿入  
  
  
  





