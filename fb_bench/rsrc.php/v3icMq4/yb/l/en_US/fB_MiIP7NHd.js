if (self.CavalryLogger) { CavalryLogger.start_js(["Y4joJ"]); }

__d("memoizeWithArgs",[],(function a(b,c,d,e,f,g){var h=Object.prototype.hasOwnProperty;function i(j,k){var l=void 0;return function(){if(!l)l={};var m=k.apply(this,arguments);if(!h.call(l,m))l[m]=j.apply(this,arguments);return l[m];};}f.exports=i;}),null);
__d('AbstractFBEmoji.react',['cx','Image.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i=function j(k){var l=k.children,m=k.size,n=k.src,o=k.title;return (c('React').createElement('span',{className:"_47e3 _5mfr",title:o},c('React').createElement(c('Image.react'),{'aria-hidden':true,height:m,src:n,width:m}),c('React').createElement('span',{'aria-hidden':!!o||null,className:"_7oe"},l)));};f.exports=i;}),null);
__d('FBEmoji.react',['cx','AbstractFBEmoji.react','EmojiImageURL','FBEmojiUtils','React'],(function a(b,c,d,e,f,g,h){'use strict';var i=function j(k){var l=k.codepoints,m=k.size,n=c('FBEmojiUtils').getSupportedKey(l),o=l.join('');if(!n)return (c('React').createElement('span',{'class':"_4ay8"+(m===16?' '+"_3kkw":'')+(m===18?' '+"_366d":'')+(m===20?' '+"_366e":'')+(m===24?' '+"_48cb":'')+(m===28?' '+"_5-0n":'')+(m===30?' '+"_5-0o":'')+(m===32?' '+"_5-0p":'')+(m===36?' '+"_2oah":'')},o));return (c('React').createElement(c('AbstractFBEmoji.react'),{size:m,src:c('EmojiImageURL').getFBEmojiURL(n,m)},o));};f.exports=i;}),null);
__d('FBEmoticon.react',['fbt','AbstractFBEmoji.react','EmojiImageURL','EmoticonsList','React','SupportedFBEmoji'],(function a(b,c,d,e,f,g,h){'use strict';var i=function j(k){var l=k.emoticon,m=k.name,n=k.size,o=c('EmoticonsList').emoji[m];if(!o)return (c('React').createElement('span',null,l));var p=h._("{emoticonName} emoticon",[h.param('emoticonName',m)]);return (c('React').createElement(c('AbstractFBEmoji.react'),{size:n,src:c('SupportedFBEmoji')[o]?c('EmojiImageURL').getFBEmojiURL(o,n):c('EmojiImageURL').getFBEmojiExtendedURL(o,n),title:p},l));};f.exports=i;}),null);
__d('iterateEmoji',['EmojiRenderer'],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k){var l=0,m=c('EmojiRenderer').parse(i);m.forEach(function(n){var o=n.offset;if(o>l)k(i.substr(l,o-l));j(n.emoji);l=o+n.length;});k(i.substr(l,i.length-l));}f.exports=h;}),null);
__d('iterateEmoticons',['EmoticonsList'],(function a(b,c,d,e,f,g){function h(i,j,k){var l,m,n,o;while(i){var p=c('EmoticonsList').regexp.exec(i);if(p){l=p.index+p[1].length;m=i.substr(0,l);n=p[2];o=i.substr(l+n.length);k(m);j(n,c('EmoticonsList').emotes[n]);i=o;}else break;}k(i);}f.exports=h;}),null);
__d('TextWithEmoticonsCore.react',['BaseTextWithDecoration.react','FBEmoji.react','FBEmoticon.react','React','iterateEmoji','iterateEmoticons','memoizeWithArgs'],(function a(b,c,d,e,f,g){'use strict';var h,i;function j(p,q){return (c('React').createElement(c('FBEmoji.react'),{codepoints:p,size:q}));}function k(p,q,r){return (c('React').createElement(c('FBEmoticon.react'),{emoticon:p,name:q,size:r}));}function l(p){return (function(q,r,s){c('iterateEmoji')(q,function(t){return (r(j(t,p)));},s);});}function m(p){return (function(q,r,s){c('iterateEmoticons')(q,function(t,u){return (r(k(t,u,p)));},s);});}var n=c('memoizeWithArgs')(function(p,q,r){if(p&&q){return [l(r),m(r)];}else if(q){return [m(r)];}else return [l(r)];},function(p,q,r){return p.toString()+'_'+q.toString()+'_'+r;});h=babelHelpers.inherits(o,c('React').Component);i=h&&h.prototype;o.prototype.shouldComponentUpdate=function(p){return p.text!==this.props.text;};o.prototype.render=function(){return (c('React').createElement(c('BaseTextWithDecoration.react'),babelHelpers['extends']({},this.props,{text:this.props.text,decorators:n(this.props.renderEmoji,this.props.renderEmoticons,this.props.size)})));};function o(){h.apply(this,arguments);}o.defaultProps={renderEmoji:true,renderEmoticons:true,size:16};f.exports=o;}),null);