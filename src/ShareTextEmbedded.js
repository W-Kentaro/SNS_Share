'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShareTextEmbedded = function () {
  function ShareTextEmbedded(data) {
    _classCallCheck(this, ShareTextEmbedded);

    this.GetOG = {
      url: '',
      description: '',
      Get: function Get() {
        for (var i = 0; i < document.head.children.length; i++) {
          if (document.head.children[i].getAttribute('property') === 'og:url') {
            this.url = document.head.children[i].getAttribute('content');
          }
          if (document.head.children[i].getAttribute('property') === 'og:description') {
            this.description = document.head.children[i].getAttribute('content');
          }
        }
      }
    };
    this.GetOG.Get();

    this.url = data.url || this.GetOG.url;
    this.text = data.text || this.GetOG.description;
    this.twitter = {
      elem: data.twitter.elem || '[data-share="twitter"]',
      url: data.twitter.url || this.url,
      text: data.twitter.text || this.text,
      hash: data.twitter.hash || false
    };
    this.facebook = {
      elem: data.facebook.elem || '[data-share="facebook"]',
      url: data.facebook.url || this.url,
      text: data.facebook.text || this.text
    };
    this.line = {
      elem: data.line.elem || '[data-share="line"]',
      url: data.line.url || this.url,
      text: data.line.text || this.text,
      onlyText: data.line.onlyText || false
    };

    this.shareText = {
      twitter: '',
      facebook: '',
      line: ''
    };
    this.Encode();
  }

  _createClass(ShareTextEmbedded, [{
    key: 'Encode',
    value: function Encode() {
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
  }, {
    key: 'Push',
    value: function Push() {
      this.shareText = {
        twitter: this.twitter.hash ? 'http://twitter.com/share?url=' + this.twitter.url + '&text=' + this.twitter.text + '&hashtags=' + this.twitter.hash : 'http://twitter.com/share?url=' + this.url + '&text=' + this.twitter.text,
        facebook: 'http://www.facebook.com/sharer.php?u=' + this.facebook.url + '&t=' + this.facebook.text,
        line: this.line.onlyText ? 'http://line.me/R/msg/text/?' + this.line.text : 'http://line.me/R/msg/text/?' + this.line.text + '%20' + this.line.url
      };

      this.Embed(this.twitter.elem, 'twitter');
      this.Embed(this.facebook.elem, 'facebook');
      this.Embed(this.line.elem, 'line');
    }
  }, {
    key: 'Embed',
    value: function Embed(e, sns) {
      var item = document.querySelectorAll(e);
      for (var i = 0; i < item.length; i++) {
        if (sns === 'twitter') {
          item[i].setAttribute('href', this.shareText.twitter);
        }
        if (sns === 'facebook') {
          item[i].setAttribute('href', this.shareText.facebook);
        }
        if (sns === 'line') {
          item[i].setAttribute('href', this.shareText.line);
        }
      }
    }
  }]);

  return ShareTextEmbedded;
}();