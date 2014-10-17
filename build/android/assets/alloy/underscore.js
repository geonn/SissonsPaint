(function(){var e=this,t=e._,i={},o=Array.prototype,r=Object.prototype,a=Function.prototype,n=o.push,l=o.slice,s=o.concat,d=r.toString,c=r.hasOwnProperty,_=o.forEach,u=o.map,h=o.reduce,p=o.reduceRight,y=o.filter,f=o.every,g=o.some,m=o.indexOf,w=o.lastIndexOf,v=Array.isArray,I=Object.keys,T=a.bind,b=function(e){return e instanceof b?e:this instanceof b?void(this._wrapped=e):new b(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports._=b):e._=b,b.VERSION="1.4.4";var E=b.each=b.forEach=function(e,t,o){if(null!=e)if(_&&e.forEach===_)e.forEach(t,o);else if(e.length===+e.length){for(var r=0,a=e.length;a>r;r++)if(t.call(o,e[r],r,e)===i)return}else for(var n in e)if(b.has(e,n)&&t.call(o,e[n],n,e)===i)return};b.map=b.collect=function(e,t,i){var o=[];return null==e?o:u&&e.map===u?e.map(t,i):(E(e,function(e,r,a){o[o.length]=t.call(i,e,r,a)}),o)};var A="Reduce of empty array with no initial value";b.reduce=b.foldl=b.inject=function(e,t,i,o){var r=arguments.length>2;if(null==e&&(e=[]),h&&e.reduce===h)return o&&(t=b.bind(t,o)),r?e.reduce(t,i):e.reduce(t);if(E(e,function(e,a,n){r?i=t.call(o,i,e,a,n):(i=e,r=!0)}),!r)throw new TypeError(A);return i},b.reduceRight=b.foldr=function(e,t,i,o){var r=arguments.length>2;if(null==e&&(e=[]),p&&e.reduceRight===p)return o&&(t=b.bind(t,o)),r?e.reduceRight(t,i):e.reduceRight(t);var a=e.length;if(a!==+a){var n=b.keys(e);a=n.length}if(E(e,function(l,s,d){s=n?n[--a]:--a,r?i=t.call(o,i,e[s],s,d):(i=e[s],r=!0)}),!r)throw new TypeError(A);return i},b.find=b.detect=function(e,t,i){var o;return S(e,function(e,r,a){return t.call(i,e,r,a)?(o=e,!0):void 0}),o},b.filter=b.select=function(e,t,i){var o=[];return null==e?o:y&&e.filter===y?e.filter(t,i):(E(e,function(e,r,a){t.call(i,e,r,a)&&(o[o.length]=e)}),o)},b.reject=function(e,t,i){return b.filter(e,function(e,o,r){return!t.call(i,e,o,r)},i)},b.every=b.all=function(e,t,o){t||(t=b.identity);var r=!0;return null==e?r:f&&e.every===f?e.every(t,o):(E(e,function(e,a,n){return(r=r&&t.call(o,e,a,n))?void 0:i}),!!r)};var S=b.some=b.any=function(e,t,o){t||(t=b.identity);var r=!1;return null==e?r:g&&e.some===g?e.some(t,o):(E(e,function(e,a,n){return r||(r=t.call(o,e,a,n))?i:void 0}),!!r)};b.contains=b.include=function(e,t){return null==e?!1:m&&e.indexOf===m?-1!=e.indexOf(t):S(e,function(e){return e===t})},b.invoke=function(e,t){var i=l.call(arguments,2),o=b.isFunction(t);return b.map(e,function(e){return(o?t:e[t]).apply(e,i)})},b.pluck=function(e,t){return b.map(e,function(e){return e[t]})},b.where=function(e,t,i){return b.isEmpty(t)?i?null:[]:b[i?"find":"filter"](e,function(e){for(var i in t)if(t[i]!==e[i])return!1;return!0})},b.findWhere=function(e,t){return b.where(e,t,!0)},b.max=function(e,t,i){if(!t&&b.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&b.isEmpty(e))return-1/0;var o={computed:-1/0,value:-1/0};return E(e,function(e,r,a){var n=t?t.call(i,e,r,a):e;n>=o.computed&&(o={value:e,computed:n})}),o.value},b.min=function(e,t,i){if(!t&&b.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&b.isEmpty(e))return 1/0;var o={computed:1/0,value:1/0};return E(e,function(e,r,a){var n=t?t.call(i,e,r,a):e;n<o.computed&&(o={value:e,computed:n})}),o.value},b.shuffle=function(e){var t,i=0,o=[];return E(e,function(e){t=b.random(i++),o[i-1]=o[t],o[t]=e}),o};var L=function(e){return b.isFunction(e)?e:function(t){return t[e]}};b.sortBy=function(e,t,i){var o=L(t);return b.pluck(b.map(e,function(e,t,r){return{value:e,index:t,criteria:o.call(i,e,t,r)}}).sort(function(e,t){var i=e.criteria,o=t.criteria;if(i!==o){if(i>o||void 0===i)return 1;if(o>i||void 0===o)return-1}return e.index<t.index?-1:1}),"value")};var x=function(e,t,i,o){var r={},a=L(t||b.identity);return E(e,function(t,n){var l=a.call(i,t,n,e);o(r,l,t)}),r};b.groupBy=function(e,t,i){return x(e,t,i,function(e,t,i){(b.has(e,t)?e[t]:e[t]=[]).push(i)})},b.countBy=function(e,t,i){return x(e,t,i,function(e,t){b.has(e,t)||(e[t]=0),e[t]++})},b.sortedIndex=function(e,t,i,o){i=null==i?b.identity:L(i);for(var r=i.call(o,t),a=0,n=e.length;n>a;){var l=a+n>>>1;i.call(o,e[l])<r?a=l+1:n=l}return a},b.toArray=function(e){return e?b.isArray(e)?l.call(e):e.length===+e.length?b.map(e,b.identity):b.values(e):[]},b.size=function(e){return null==e?0:e.length===+e.length?e.length:b.keys(e).length},b.first=b.head=b.take=function(e,t,i){return null==e?void 0:null==t||i?e[0]:l.call(e,0,t)},b.initial=function(e,t,i){return l.call(e,0,e.length-(null==t||i?1:t))},b.last=function(e,t,i){return null==e?void 0:null==t||i?e[e.length-1]:l.call(e,Math.max(e.length-t,0))},b.rest=b.tail=b.drop=function(e,t,i){return l.call(e,null==t||i?1:t)},b.compact=function(e){return b.filter(e,b.identity)};var C=function(e,t,i){return E(e,function(e){b.isArray(e)?t?n.apply(i,e):C(e,t,i):i.push(e)}),i};b.flatten=function(e,t){return C(e,t,[])},b.without=function(e){return b.difference(e,l.call(arguments,1))},b.uniq=b.unique=function(e,t,i,o){b.isFunction(t)&&(o=i,i=t,t=!1);var r=i?b.map(e,i,o):e,a=[],n=[];return E(r,function(i,o){(t?o&&n[n.length-1]===i:b.contains(n,i))||(n.push(i),a.push(e[o]))}),a},b.union=function(){return b.uniq(s.apply(o,arguments))},b.intersection=function(e){var t=l.call(arguments,1);return b.filter(b.uniq(e),function(e){return b.every(t,function(t){return b.indexOf(t,e)>=0})})},b.difference=function(e){var t=s.apply(o,l.call(arguments,1));return b.filter(e,function(e){return!b.contains(t,e)})},b.zip=function(){for(var e=l.call(arguments),t=b.max(b.pluck(e,"length")),i=new Array(t),o=0;t>o;o++)i[o]=b.pluck(e,""+o);return i},b.object=function(e,t){if(null==e)return{};for(var i={},o=0,r=e.length;r>o;o++)t?i[e[o]]=t[o]:i[e[o][0]]=e[o][1];return i},b.indexOf=function(e,t,i){if(null==e)return-1;var o=0,r=e.length;if(i){if("number"!=typeof i)return o=b.sortedIndex(e,t),e[o]===t?o:-1;o=0>i?Math.max(0,r+i):i}if(m&&e.indexOf===m)return e.indexOf(t,i);for(;r>o;o++)if(e[o]===t)return o;return-1},b.lastIndexOf=function(e,t,i){if(null==e)return-1;var o=null!=i;if(w&&e.lastIndexOf===w)return o?e.lastIndexOf(t,i):e.lastIndexOf(t);for(var r=o?i:e.length;r--;)if(e[r]===t)return r;return-1},b.range=function(e,t,i){arguments.length<=1&&(t=e||0,e=0),i=arguments[2]||1;for(var o=Math.max(Math.ceil((t-e)/i),0),r=0,a=new Array(o);o>r;)a[r++]=e,e+=i;return a},b.bind=function(e,t){if(e.bind===T&&T)return T.apply(e,l.call(arguments,1));var i=l.call(arguments,2);return function(){return e.apply(t,i.concat(l.call(arguments)))}},b.partial=function(e){var t=l.call(arguments,1);return function(){return e.apply(this,t.concat(l.call(arguments)))}},b.bindAll=function(e){var t=l.call(arguments,1);return 0===t.length&&(t=b.functions(e)),E(t,function(t){e[t]=b.bind(e[t],e)}),e},b.memoize=function(e,t){var i={};return t||(t=b.identity),function(){var o=t.apply(this,arguments);return b.has(i,o)?i[o]:i[o]=e.apply(this,arguments)}},b.delay=function(e,t){var i=l.call(arguments,2);return setTimeout(function(){return e.apply(null,i)},t)},b.defer=function(e){return b.delay.apply(b,[e,1].concat(l.call(arguments,1)))},b.throttle=function(e,t){var i,o,r,a,n=0,l=function(){n=new Date,r=null,a=e.apply(i,o)};return function(){var s=new Date,d=t-(s-n);return i=this,o=arguments,0>=d?(clearTimeout(r),r=null,n=s,a=e.apply(i,o)):r||(r=setTimeout(l,d)),a}},b.debounce=function(e,t,i){var o,r;return function(){var a=this,n=arguments,l=function(){o=null,i||(r=e.apply(a,n))},s=i&&!o;return clearTimeout(o),o=setTimeout(l,t),s&&(r=e.apply(a,n)),r}},b.once=function(e){var t,i=!1;return function(){return i?t:(i=!0,t=e.apply(this,arguments),e=null,t)}},b.wrap=function(e,t){return function(){var i=[e];return n.apply(i,arguments),t.apply(this,i)}},b.compose=function(){var e=arguments;return function(){for(var t=arguments,i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},b.after=function(e,t){return 0>=e?t():function(){return--e<1?t.apply(this,arguments):void 0}},b.keys=I||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var i in e)b.has(e,i)&&(t[t.length]=i);return t},b.values=function(e){var t=[];for(var i in e)b.has(e,i)&&t.push(e[i]);return t},b.pairs=function(e){var t=[];for(var i in e)b.has(e,i)&&t.push([i,e[i]]);return t},b.invert=function(e){var t={};for(var i in e)b.has(e,i)&&(t[e[i]]=i);return t},b.functions=b.methods=function(e){var t=[];for(var i in e)b.isFunction(e[i])&&t.push(i);return t.sort()},b.extend=function(e){return E(l.call(arguments,1),function(t){if(t)for(var i in t)e[i]=t[i]}),e},b.pick=function(e){var t={},i=s.apply(o,l.call(arguments,1));return E(i,function(i){i in e&&(t[i]=e[i])}),t},b.omit=function(e){var t={},i=s.apply(o,l.call(arguments,1));for(var r in e)b.contains(i,r)||(t[r]=e[r]);return t},b.defaults=function(e){return E(l.call(arguments,1),function(t){if(t)for(var i in t)null==e[i]&&(e[i]=t[i])}),e},b.clone=function(e){return b.isObject(e)?b.isArray(e)?e.slice():b.extend({},e):e},b.tap=function(e,t){return t(e),e};var U=function(e,t,i,o){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof b&&(e=e._wrapped),t instanceof b&&(t=t._wrapped);var r=d.call(e);if(r!=d.call(t))return!1;switch(r){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var a=i.length;a--;)if(i[a]==e)return o[a]==t;i.push(e),o.push(t);var n=0,l=!0;if("[object Array]"==r){if(n=e.length,l=n==t.length)for(;n--&&(l=U(e[n],t[n],i,o)););}else{var s=e.constructor,c=t.constructor;if(s!==c&&!(b.isFunction(s)&&s instanceof s&&b.isFunction(c)&&c instanceof c))return!1;for(var _ in e)if(b.has(e,_)&&(n++,!(l=b.has(t,_)&&U(e[_],t[_],i,o))))break;if(l){for(_ in t)if(b.has(t,_)&&!n--)break;l=!n}}return i.pop(),o.pop(),l};b.isEqual=function(e,t){return U(e,t,[],[])},b.isEmpty=function(e){if(null==e)return!0;if(b.isArray(e)||b.isString(e))return 0===e.length;for(var t in e)if(b.has(e,t))return!1;return!0},b.isElement=function(e){return!(!e||1!==e.nodeType)},b.isArray=v||function(e){return"[object Array]"==d.call(e)},b.isObject=function(e){return e===Object(e)},E(["Arguments","Function","String","Number","Date","RegExp"],function(e){b["is"+e]=function(t){return d.call(t)=="[object "+e+"]"}}),b.isArguments(arguments)||(b.isArguments=function(e){return!(!e||!b.has(e,"callee"))}),"function"!=typeof/./&&(b.isFunction=function(e){return"function"==typeof e}),b.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},b.isNaN=function(e){return b.isNumber(e)&&e!=+e},b.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==d.call(e)},b.isNull=function(e){return null===e},b.isUndefined=function(e){return void 0===e},b.has=function(e,t){return c.call(e,t)},b.noConflict=function(){return e._=t,this},b.identity=function(e){return e},b.times=function(e,t,i){for(var o=Array(e),r=0;e>r;r++)o[r]=t.call(i,r);return o},b.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var N={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};N.unescape=b.invert(N.escape);var k={escape:new RegExp("["+b.keys(N.escape).join("")+"]","g"),unescape:new RegExp("("+b.keys(N.unescape).join("|")+")","g")};b.each(["escape","unescape"],function(e){b[e]=function(t){return null==t?"":(""+t).replace(k[e],function(t){return N[e][t]})}}),b.result=function(e,t){if(null==e)return null;var i=e[t];return b.isFunction(i)?i.call(e):i},b.mixin=function(e){E(b.functions(e),function(t){var i=b[t]=e[t];b.prototype[t]=function(){var e=[this._wrapped];return n.apply(e,arguments),D.call(this,i.apply(b,e))}})};var O=0;b.uniqueId=function(e){var t=++O+"";return e?e+t:t},b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var R=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},P=/\\|'|\r|\n|\t|\u2028|\u2029/g;b.template=function(e,t,i){var o;i=b.defaults({},i,b.templateSettings);var r=new RegExp([(i.escape||R).source,(i.interpolate||R).source,(i.evaluate||R).source].join("|")+"|$","g"),a=0,n="__p+='";e.replace(r,function(t,i,o,r,l){return n+=e.slice(a,l).replace(P,function(e){return"\\"+B[e]}),i&&(n+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),o&&(n+="'+\n((__t=("+o+"))==null?'':__t)+\n'"),r&&(n+="';\n"+r+"\n__p+='"),a=l+t.length,t}),n+="';\n",i.variable||(n="with(obj||{}){\n"+n+"}\n"),n="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+n+"return __p;\n";try{o=new Function(i.variable||"obj","_",n)}catch(l){throw l.source=n,l}if(t)return o(t,b);var s=function(e){return o.call(this,e,b)};return s.source="function("+(i.variable||"obj")+"){\n"+n+"}",s},b.chain=function(e){return b(e).chain()};var D=function(e){return this._chain?b(e).chain():e};b.mixin(b),E(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=o[e];b.prototype[e]=function(){var i=this._wrapped;return t.apply(i,arguments),"shift"!=e&&"splice"!=e||0!==i.length||delete i[0],D.call(this,i)}}),E(["concat","join","slice"],function(e){var t=o[e];b.prototype[e]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),b.extend(b.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);