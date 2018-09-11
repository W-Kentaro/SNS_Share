let ogURL;
for(let i = 0; i < document.head.children.length; i++){
  if(document.head.children[i].getAttribute('property') === 'og:url'){
    ogURL = document.head.children[i].getAttribute('content');
  }
}

class ShareTextEmbedded{
  constructor(data) {
    this.url = data.url || ogURL;
    this.twitter = {
      elem: data.twitter.elem || `[data-share="twitter"]`,
      url: data.twitter.url || this.url,
      text: data.twitter.text,
      hash: data.twitter.hash || false,
    };
    this.facebook = {
      elem: data.facebook.elem || `[data-share="facebook"]`,
      url: data.facebook.url || this.url,
      text: data.facebook.text,
    };
    this.line = {
      elem: data.line.elem || `[data-share="line"]`,
      url: data.line.url || this.url,
      text: data.line.text,
      onlyText: data.line.onlyText || false,
    };

    this.shareText = {
      twitter: '',
      facebook: '',
      line: '',
    }
  }
  Encode() {
    this.url = encodeURIComponent(this.url);
    this.twitter.url = encodeURIComponent(this.twitter.url);
    this.twitter.text = encodeURIComponent(this.twitter.text);
    this.twitter.hash = this.twitter.hash ? encodeURIComponent(this.twitter.hash) : this.twitter.hash;
    this.facebook.url = encodeURIComponent(this.facebook.url);
    this.facebook.text = encodeURIComponent(this.facebook.text);
    this.line.url = encodeURIComponent(this.line.url);
    this.line.text = encodeURIComponent(this.line.text);

    this.Push();
  }
  Push() {
    this.shareText = {
      twitter: this.twitter.hash ? `http://twitter.com/share?url=${this.twitter.url}&text=${this.twitter.text}&hashtags=${this.twitter.hash}` : `http://twitter.com/share?url=${this.url}&text=${this.twitter.text}`,
      facebook: `http://www.facebook.com/sharer.php?u=${this.facebook.url}&t=${this.facebook.text}`,
      line: this.line.onlyText ? `http://line.me/R/msg/text/?${this.line.text}` : `http://line.me/R/msg/text/?${this.line.text}%20${this.line.url}`,
    };

    this.Embed(this.twitter.elem, 'twitter');
    this.Embed(this.facebook.elem, 'facebook');
    this.Embed(this.line.elem, 'line');
  }
  Embed(e, sns) {
    let item = document.querySelectorAll(e);
    for(let i = 0; i < item.length; i++){
      if(sns === 'twitter'){
        item[i].setAttribute(`href`, this.shareText.twitter);
      }
      if(sns === 'facebook'){
        item[i].setAttribute(`href`, this.shareText.facebook);
      }
      if(sns === 'line'){
        item[i].setAttribute(`href`, this.shareText.line);
      }
    }
  }
  Default() {
    this.Encode();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  var ShareText = new ShareTextEmbedded(share);
  ShareText.Default();
});

