(function(){var e=this,t=e._,i={},o=Array.prototype,a=Object.prototype,r=Function.prototype,l=o.push,n=o.slice,s=o.concat,d=a.toString,_=a.hasOwnProperty,c=o.forEach,u=o.map,h=o.reduce,w=o.reduceRight,g=o.filter,v=o.every,y=o.some,I=o.indexOf,p=o.lastIndexOf,m=Array.isArray,f=Object.keys,T=r.bind,b=function(e){return e instanceof b?e:this instanceof b?void(this._wrapped=e):new b(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports._=b):e._=b,b.VERSION="1.4.4";var E=b.each=b.forEach=function(e,t,o){if(null!=e)if(c&&e.forEach===c)e.forEach(t,o);else if(e.length===+e.length){for(var a=0,r=e.length;r>a;a++)if(t.call(o,e[a],a,e)===i)return}else for(var l in e)if(b.has(e,l)&&t.call(o,e[l],l,e)===i)return};b.map=b.collect=function(e,t,i){var o=[];return null==e?o:u&&e.map===u?e.map(t,i):(E(e,function(e,a,r){o[o.length]=t.call(i,e,a,r)}),o)};var A="Reduce of empty array with no initial value";b.reduce=b.foldl=b.inject=function(e,t,i,o){var a=arguments.length>2;if(null==e&&(e=[]),h&&e.reduce===h)return o&&(t=b.bind(t,o)),a?e.reduce(t,i):e.reduce(t);if(E(e,function(e,r,l){a?i=t.call(o,i,e,r,l):(i=e,a=!0)}),!a)throw new TypeError(A);return i},b.reduceRight=b.foldr=function(e,t,i,o){var a=arguments.length>2;if(null==e&&(e=[]),w&&e.reduceRight===w)return o&&(t=b.bind(t,o)),a?e.reduceRight(t,i):e.reduceRight(t);var r=e.length;if(r!==+r){var l=b.keys(e);r=l.length}if(E(e,function(n,s,d){s=l?l[--r]:--r,a?i=t.call(o,i,e[s],s,d):(i=e[s],a=!0)}),!a)throw new TypeError(A);return i},b.find=b.detect=function(e,t,i){var o;return S(e,function(e,a,r){return t.call(i,e,a,r)?(o=e,!0):void 0}),o},b.filter=b.select=function(e,t,i){var o=[];return null==e?o:g&&e.filter===g?e.filter(t,i):(E(e,function(e,a,r){t.call(i,e,a,r)&&(o[o.length]=e)}),o)},b.reject=function(e,t,i){return b.filter(e,function(e,o,a){return!t.call(i,e,o,a)},i)},b.every=b.all=function(e,t,o){t||(t=b.identity);var a=!0;return null==e?a:v&&e.every===v?e.every(t,o):(E(e,function(e,r,l){return(a=a&&t.call(o,e,r,l))?void 0:i}),!!a)};var S=b.some=b.any=function(e,t,o){t||(t=b.identity);var a=!1;return null==e?a:y&&e.some===y?e.some(t,o):(E(e,function(e,r,l){return a||(a=t.call(o,e,r,l))?i:void 0}),!!a)};b.contains=b.include=function(e,t){return null==e?!1:I&&e.indexOf===I?-1!=e.indexOf(t):S(e,function(e){return e===t})},b.invoke=function(e,t){var i=n.call(arguments,2),o=b.isFunction(t);return b.map(e,function(e){return(o?t:e[t]).apply(e,i)})},b.pluck=function(e,t){return b.map(e,function(e){return e[t]})},b.where=function(e,t,i){return b.isEmpty(t)?i?null:[]:b[i?"find":"filter"](e,function(e){for(var i in t)if(t[i]!==e[i])return!1;return!0})},b.findWhere=function(e,t){return b.where(e,t,!0)},b.max=function(e,t,i){if(!t&&b.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&b.isEmpty(e))return-1/0;var o={computed:-1/0,value:-1/0};return E(e,function(e,a,r){var l=t?t.call(i,e,a,r):e;l>=o.computed&&(o={value:e,computed:l})}),o.value},b.min=function(e,t,i){if(!t&&b.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&b.isEmpty(e))return 1/0;var o={computed:1/0,value:1/0};return E(e,function(e,a,r){var l=t?t.call(i,e,a,r):e;l<o.computed&&(o={value:e,computed:l})}),o.value},b.shuffle=function(e){var t,i=0,o=[];return E(e,function(e){t=b.random(i++),o[i-1]=o[t],o[t]=e}),o};var U=function(e){return b.isFunction(e)?e:function(t){return t[e]}};b.sortBy=function(e,t,i){var o=U(t);return b.pluck(b.map(e,function(e,t,a){return{value:e,index:t,criteria:o.call(i,e,t,a)}}).sort(function(e,t){var i=e.criteria,o=t.criteria;if(i!==o){if(i>o||void 0===i)return 1;if(o>i||void 0===o)return-1}return e.index<t.index?-1:1}),"value")};var C=function(e,t,i,o){var a={},r=U(t||b.identity);return E(e,function(t,l){var n=r.call(i,t,l,e);o(a,n,t)}),a};b.groupBy=function(e,t,i){return C(e,t,i,function(e,t,i){(b.has(e,t)?e[t]:e[t]=[]).push(i)})},b.countBy=function(e,t,i){return C(e,t,i,function(e,t){b.has(e,t)||(e[t]=0),e[t]++})},b.sortedIndex=function(e,t,i,o){i=null==i?b.identity:U(i);for(var a=i.call(o,t),r=0,l=e.length;l>r;){var n=r+l>>>1;i.call(o,e[n])<a?r=n+1:l=n}return r},b.toArray=function(e){return e?b.isArray(e)?n.call(e):e.length===+e.length?b.map(e,b.identity):b.values(e):[]},b.size=function(e){return null==e?0:e.length===+e.length?e.length:b.keys(e).length},b.first=b.head=b.take=function(e,t,i){return null==e?void 0:null==t||i?e[0]:n.call(e,0,t)},b.initial=function(e,t,i){return n.call(e,0,e.length-(null==t||i?1:t))},b.last=function(e,t,i){return null==e?void 0:null==t||i?e[e.length-1]:n.call(e,Math.max(e.length-t,0))},b.rest=b.tail=b.drop=function(e,t,i){return n.call(e,null==t||i?1:t)},b.compact=function(e){return b.filter(e,b.identity)};var L=function(e,t,i){return E(e,function(e){b.isArray(e)?t?l.apply(i,e):L(e,t,i):i.push(e)}),i};b.flatten=function(e,t){return L(e,t,[])},b.without=function(e){return b.difference(e,n.call(arguments,1))},b.uniq=b.unique=function(e,t,i,o){b.isFunction(t)&&(o=i,i=t,t=!1);var a=i?b.map(e,i,o):e,r=[],l=[];return E(a,function(i,o){(t?o&&l[l.length-1]===i:b.contains(l,i))||(l.push(i),r.push(e[o]))}),r},b.union=function(){return b.uniq(s.apply(o,arguments))},b.intersection=function(e){var t=n.call(arguments,1);return b.filter(b.uniq(e),function(e){return b.every(t,function(t){return b.indexOf(t,e)>=0})})},b.difference=function(e){var t=s.apply(o,n.call(arguments,1));return b.filter(e,function(e){return!b.contains(t,e)})},b.zip=function(){for(var e=n.call(arguments),t=b.max(b.pluck(e,"length")),i=new Array(t),o=0;t>o;o++)i[o]=b.pluck(e,""+o);return i},b.object=function(e,t){if(null==e)return{};for(var i={},o=0,a=e.length;a>o;o++)t?i[e[o]]=t[o]:i[e[o][0]]=e[o][1];return i},b.indexOf=function(e,t,i){if(null==e)return-1;var o=0,a=e.length;if(i){if("number"!=typeof i)return o=b.sortedIndex(e,t),e[o]===t?o:-1;o=0>i?Math.max(0,a+i):i}if(I&&e.indexOf===I)return e.indexOf(t,i);for(;a>o;o++)if(e[o]===t)return o;return-1},b.lastIndexOf=function(e,t,i){if(null==e)return-1;var o=null!=i;if(p&&e.lastIndexOf===p)return o?e.lastIndexOf(t,i):e.lastIndexOf(t);for(var a=o?i:e.length;a--;)if(e[a]===t)return a;return-1},b.range=function(e,t,i){arguments.length<=1&&(t=e||0,e=0),i=arguments[2]||1;for(var o=Math.max(Math.ceil((t-e)/i),0),a=0,r=new Array(o);o>a;)r[a++]=e,e+=i;return r},b.bind=function(e,t){if(e.bind===T&&T)return T.apply(e,n.call(arguments,1));var i=n.call(arguments,2);return function(){return e.apply(t,i.concat(n.call(arguments)))}},b.partial=function(e){var t=n.call(arguments,1);return function(){return e.apply(this,t.concat(n.call(arguments)))}},b.bindAll=function(e){var t=n.call(arguments,1);return 0===t.length&&(t=b.functions(e)),E(t,function(t){e[t]=b.bind(e[t],e)}),e},b.memoize=function(e,t){var i={};return t||(t=b.identity),function(){var o=t.apply(this,arguments);return b.has(i,o)?i[o]:i[o]=e.apply(this,arguments)}},b.delay=function(e,t){var i=n.call(arguments,2);return setTimeout(function(){return e.apply(null,i)},t)},b.defer=function(e){return b.delay.apply(b,[e,1].concat(n.call(arguments,1)))},b.throttle=function(e,t){var i,o,a,r,l=0,n=function(){l=new Date,a=null,r=e.apply(i,o)};return function(){var s=new Date,d=t-(s-l);return i=this,o=arguments,0>=d?(clearTimeout(a),a=null,l=s,r=e.apply(i,o)):a||(a=setTimeout(n,d)),r}},b.debounce=function(e,t,i){var o,a;return function(){var r=this,l=arguments,n=function(){o=null,i||(a=e.apply(r,l))},s=i&&!o;return clearTimeout(o),o=setTimeout(n,t),s&&(a=e.apply(r,l)),a}},b.once=function(e){var t,i=!1;return function(){return i?t:(i=!0,t=e.apply(this,arguments),e=null,t)}},b.wrap=function(e,t){return function(){var i=[e];return l.apply(i,arguments),t.apply(this,i)}},b.compose=function(){var e=arguments;return function(){for(var t=arguments,i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},b.after=function(e,t){return 0>=e?t():function(){return--e<1?t.apply(this,arguments):void 0}},b.keys=f||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var i in e)b.has(e,i)&&(t[t.length]=i);return t},b.values=function(e){var t=[];for(var i in e)b.has(e,i)&&t.push(e[i]);return t},b.pairs=function(e){var t=[];for(var i in e)b.has(e,i)&&t.push([i,e[i]]);return t},b.invert=function(e){var t={};for(var i in e)b.has(e,i)&&(t[e[i]]=i);return t},b.functions=b.methods=function(e){var t=[];for(var i in e)b.isFunction(e[i])&&t.push(i);return t.sort()},b.extend=function(e){return E(n.call(arguments,1),function(t){if(t)for(var i in t)e[i]=t[i]}),e},b.pick=function(e){var t={},i=s.apply(o,n.call(arguments,1));return E(i,function(i){i in e&&(t[i]=e[i])}),t},b.omit=function(e){var t={},i=s.apply(o,n.call(arguments,1));for(var a in e)b.contains(i,a)||(t[a]=e[a]);return t},b.defaults=function(e){return E(n.call(arguments,1),function(t){if(t)for(var i in t)null==e[i]&&(e[i]=t[i])}),e},b.clone=function(e){return b.isObject(e)?b.isArray(e)?e.slice():b.extend({},e):e},b.tap=function(e,t){return t(e),e};var x=function(e,t,i,o){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof b&&(e=e._wrapped),t instanceof b&&(t=t._wrapped);var a=d.call(e);if(a!=d.call(t))return!1;switch(a){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var r=i.length;r--;)if(i[r]==e)return o[r]==t;i.push(e),o.push(t);var l=0,n=!0;if("[object Array]"==a){if(l=e.length,n=l==t.length)for(;l--&&(n=x(e[l],t[l],i,o)););}else{var s=e.constructor,_=t.constructor;if(s!==_&&!(b.isFunction(s)&&s instanceof s&&b.isFunction(_)&&_ instanceof _))return!1;for(var c in e)if(b.has(e,c)&&(l++,!(n=b.has(t,c)&&x(e[c],t[c],i,o))))break;if(n){for(c in t)if(b.has(t,c)&&!l--)break;n=!l}}return i.pop(),o.pop(),n};b.isEqual=function(e,t){return x(e,t,[],[])},b.isEmpty=function(e){if(null==e)return!0;if(b.isArray(e)||b.isString(e))return 0===e.length;for(var t in e)if(b.has(e,t))return!1;return!0},b.isElement=function(e){return!(!e||1!==e.nodeType)},b.isArray=m||function(e){return"[object Array]"==d.call(e)},b.isObject=function(e){return e===Object(e)},E(["Arguments","Function","String","Number","Date","RegExp"],function(e){b["is"+e]=function(t){return d.call(t)=="[object "+e+"]"}}),b.isArguments(arguments)||(b.isArguments=function(e){return!(!e||!b.has(e,"callee"))}),"function"!=typeof/./&&(b.isFunction=function(e){return"function"==typeof e}),b.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},b.isNaN=function(e){return b.isNumber(e)&&e!=+e},b.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==d.call(e)},b.isNull=function(e){return null===e},b.isUndefined=function(e){return void 0===e},b.has=function(e,t){return _.call(e,t)},b.noConflict=function(){return e._=t,this},b.identity=function(e){return e},b.times=function(e,t,i){for(var o=Array(e),a=0;e>a;a++)o[a]=t.call(i,a);return o},b.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var N={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};N.unescape=b.invert(N.escape);var k={escape:new RegExp("["+b.keys(N.escape).join("")+"]","g"),unescape:new RegExp("("+b.keys(N.unescape).join("|")+")","g")};b.each(["escape","unescape"],function(e){b[e]=function(t){return null==t?"":(""+t).replace(k[e],function(t){return N[e][t]})}}),b.result=function(e,t){if(null==e)return null;var i=e[t];return b.isFunction(i)?i.call(e):i},b.mixin=function(e){E(b.functions(e),function(t){var i=b[t]=e[t];b.prototype[t]=function(){var e=[this._wrapped];return l.apply(e,arguments),P.call(this,i.apply(b,e))}})};var B=0;b.uniqueId=function(e){var t=++B+"";return e?e+t:t},b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var V=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\t|\u2028|\u2029/g;b.template=function(e,t,i){var o;i=b.defaults({},i,b.templateSettings);var a=new RegExp([(i.escape||V).source,(i.interpolate||V).source,(i.evaluate||V).source].join("|")+"|$","g"),r=0,l="__p+='";e.replace(a,function(t,i,o,a,n){return l+=e.slice(r,n).replace(O,function(e){return"\\"+R[e]}),i&&(l+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),o&&(l+="'+\n((__t=("+o+"))==null?'':__t)+\n'"),a&&(l+="';\n"+a+"\n__p+='"),r=n+t.length,t}),l+="';\n",i.variable||(l="with(obj||{}){\n"+l+"}\n"),l="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+l+"return __p;\n";try{o=new Function(i.variable||"obj","_",l)}catch(n){throw n.source=l,n}if(t)return o(t,b);var s=function(e){return o.call(this,e,b)};return s.source="function("+(i.variable||"obj")+"){\n"+l+"}",s},b.chain=function(e){return b(e).chain()};var P=function(e){return this._chain?b(e).chain():e};b.mixin(b),E(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=o[e];b.prototype[e]=function(){var i=this._wrapped;return t.apply(i,arguments),"shift"!=e&&"splice"!=e||0!==i.length||delete i[0],P.call(this,i)}}),E(["concat","join","slice"],function(e){var t=o[e];b.prototype[e]=function(){return P.call(this,t.apply(this._wrapped,arguments))}}),b.extend(b.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);