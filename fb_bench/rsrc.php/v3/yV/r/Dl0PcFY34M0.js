if (self.CavalryLogger) { CavalryLogger.start_js(["iT21u"]); }

__d('LogoutMenu',['csx','DOMQuery','emptyFunction','Event','requireWeak'],(function a(b,c,d,e,f,g,h){var i;c('requireWeak')('MenuItem',function(k){i=k;});function j(k,l){var m;if(l)l.subscribe('confirm',function(){c('Event').fire(m,'submit');m.submit();});k.subscribe('itemclick',function(n,o){switch(o.item.getValue()){case 'logout':m=c('DOMQuery').find(k.getRoot(),"._w0d");break;case 'createnewaccount':m=c('DOMQuery').find(k.getRoot(),"._3eei");break;case 'switchaccount':m=c('DOMQuery').find(k.getRoot(),"._3eeq");break;case 'help':if(i)i.prototype.hasAction=c('emptyFunction').thatReturnsFalse;break;default:break;}if(m)if(l){l.show();}else{c('Event').fire(m,'submit');m.submit();}});}f.exports.init=j;}),null);
__d('ServiceWorkerLoginAndLogoutListener',['Event','ServiceWorkerLoginAndLogout'],(function a(b,c,d,e,f,g){var h={listen:function i(j,k){var l=function m(){if(k==='login'){c('ServiceWorkerLoginAndLogout').login();}else if(k==='logout'){c('ServiceWorkerLoginAndLogout').logout();}else throw new Error('bad login type given');};c('Event').listen(j,{click:l,submit:l});}};f.exports=h;}),null);