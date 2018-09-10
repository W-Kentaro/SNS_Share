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
      url: data.twitter.url || this.url,
      text: data.twitter.text,
      hash: data.twitter.hash || false,
    };
    this.facebook = {
      url: data.facebook.url || this.url,
      text: data.facebook.text,
    };
    this.line = {
      url: data.line.url || this.url,
      text: data.line.text,
      onlyText: data.onlyText || false,
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
    this.twitter.hash = encodeURIComponent(this.twitter.hash);
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

    this.Embed();
  }
  Embed() {
    let item = document.querySelectorAll(`[data-share]`);
    for(let i = 0; i < item.length; i++){
      let data = item[i].getAttribute(`data-share`);
      if(data === 'twitter'){
        item[i].setAttribute(`href`, this.shareText.twitter);
      }
      if(data === 'facebook'){
        item[i].setAttribute(`href`, this.shareText.facebook);
      }
      if(data === 'line'){
        item[i].setAttribute(`href`, this.shareText.line);
      }
    }
  }
  Default() {
    this.Encode();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  ShareText.Default();
});
