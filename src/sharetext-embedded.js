/*!
* Copyright (c) 2018 W-Kentaro
* Released under the MIT license
* https://opensource.org/licenses/mit-license.php
*/

class ShareTextEmbedded{
  constructor(data = false) {
    this.GetOG = {
      url: '',
      description: '',
      get: function () {
        for(let i = 0; i < document.head.children.length; i++){
          if(document.head.children[i].getAttribute('property') === 'og:url'){
            this.url = document.head.children[i].getAttribute('content');
          }
          if(document.head.children[i].getAttribute('property') === 'og:description'){
            this.description = document.head.children[i].getAttribute('content');
          }
        }
      }
    };
    this.GetOG.get();

    this.isInit = data.init || false;

    this.url = data.url ? encodeURIComponent(data.url) : encodeURIComponent(this.GetOG.url) || location.href;
    this.text = data.text ? encodeURIComponent(data.text) : encodeURIComponent(this.GetOG.description);
    this.hash = data.hash ? encodeURIComponent(data.hash) : false;
    this.twitter = data.twitter || false;
    this.twitter = this.twitter === 'disable' ? false : {
      elem: this.twitter.elem === null ? null : this.twitter.elem || `[data-share="twitter"]`,
      url: this.twitter.url ? encodeURIComponent(this.twitter.url) : this.url,
      text: this.twitter.text === null ? null : this.twitter.text ? encodeURIComponent(this.twitter.text) : this.text,
      hash: this.twitter.hash ? encodeURIComponent(this.twitter.hash) : this.hash,
      via: this.twitter.via ? encodeURIComponent(this.twitter.via) : false,
      related: this.twitter.related ? encodeURIComponent(this.twitter.related) : false,
    };
    this.facebook = data.facebook || false;
    this.facebook = this.facebook === 'disable' ? false : {
      elem: this.facebook.elem === null ? null : this.facebook.elem || `[data-share="facebook"]`,
      url: this.facebook.url ? encodeURIComponent(this.facebook.url) : this.url,
    };
    this.line = data.line || false;
    this.line = this.line === 'disable' ? false : {
      elem: this.line.elem === null ? null : this.line.elem || `[data-share="line"]`,
      url: this.line.url === null ? null : this.line.url ? encodeURIComponent(this.line.url) : this.url,
    };
    this.URL = {
      twitter: `http://twitter.com/share?url=${this.twitter.url}${this.twitter.text === null ? '' : `&text=${this.twitter.text}`}${this.twitter.hash ? '&hashtags=' + this.twitter.hash : ''}${this.twitter.via ? '&via=' + this.twitter.via : ''}${this.twitter.related ? '&related=' + this.twitter.related : ''}`,
      facebook: `http://www.facebook.com/sharer.php?u=${this.facebook.url}`,
      line: `https://social-plugins.line.me/lineit/share?url=${this.line.url}`,
    };
    if(!this.isInit){
      this.init();
    }
  }
  push() {
    if(this.twitter){
      this.embed(this.twitter.elem, 'twitter');
    }
    if(this.facebook){
      this.embed(this.facebook.elem, 'facebook');
    }
    if(this.line){
      this.embed(this.line.elem, 'line');
    }
  }
  embed(e, sns) {
    const item = document.querySelectorAll(e);
    for(let i = 0; i < item.length; i++){
      if(sns === 'twitter'){
        item[i].setAttribute(`href`, this.URL.twitter);
      }
      if(sns === 'facebook'){
        item[i].setAttribute(`href`, this.URL.facebook);
      }
      if(sns === 'line'){
        item[i].setAttribute(`href`, this.URL.line);
      }
    }
  }
  init() {
    this.push();
  }
  update(data) {
    let before = {
      url: this.url,
      text: this.text,
      twitter: this.twitter,
      facebook: this.facebook,
      line: this.line,
    };
    this.url = data.url || before.url;

    this.text = data.text || before.text;

    this.twitter = data.twitter || before.twitter;
    this.twitter = {
      elem: this.twitter.elem || before.twitter.elem,
      url: this.twitter.url ? encodeURIComponent(this.twitter.url) : before.twitter.url,
      text: this.twitter.text === null ? null : this.twitter.text ? encodeURIComponent(this.twitter.text) : before.twitter.text,
      hash: this.twitter.hash ? encodeURIComponent(this.twitter.hash) : before.twitter.hash,
      via: this.twitter.via ? encodeURIComponent(this.twitter.via) : before.twitter.via,
      related: this.twitter.related ? encodeURIComponent(this.twitter.related) : before.twitter.related,
    };
    this.facebook = data.facebook || before.facebook;
    this.facebook = {
      elem: this.facebook.elem || before.facebook.elem,
      url: this.facebook.url ? encodeURIComponent(this.facebook.url) : before.facebook.url,
    };
    this.line = data.line || before.line;
    this.line = {
      elem: this.line.elem || before.line.elem,
      url: this.line.url === null ? null : this.line.url ? encodeURIComponent(this.line.url) : before.line.url,
    };

    this.URL = {
      twitter: `http://twitter.com/share?url=${this.twitter.url}${this.twitter.text === null ? '' : `&text=${this.twitter.text}`}${this.twitter.hash ? '&hashtags=' + this.twitter.hash : ''}${this.twitter.via ? '&via=' + this.twitter.via : ''}${this.twitter.related ? '&related=' + this.twitter.related : ''}`,
      facebook: `http://www.facebook.com/sharer.php?u=${this.facebook.url}`,
      line: `https://social-plugins.line.me/lineit/share?url=${this.line.url}`,
    };
  }
}

export default ShareTextEmbedded;

window.ShareTextEmbedded = ShareTextEmbedded;
