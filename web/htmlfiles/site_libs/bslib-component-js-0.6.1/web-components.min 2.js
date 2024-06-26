/*! bslib 0.6.1 | (c) 2012-2023 RStudio, PBC. | License: MIT + file LICENSE */
"use strict";(()=>{var Ce=Object.defineProperty,Be=Object.defineProperties,We=Object.getOwnPropertyDescriptor,Fe=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var Ge=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;var $e=(n,t,e)=>t in n?Ce(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_=(n,t)=>{for(var e in t||(t={}))Ge.call(t,e)&&$e(n,e,t[e]);if(_e)for(var e of _e(t))Je.call(t,e)&&$e(n,e,t[e]);return n},W=(n,t)=>Be(n,Fe(t));var C=(n,t,e,i)=>{for(var s=i>1?void 0:i?We(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Ce(t,e,s),s};var ie=(n,t,e)=>new Promise((i,s)=>{var r=a=>{try{h(e.next(a))}catch(l){s(l)}},o=a=>{try{h(e.throw(a))}catch(l){s(l)}},h=a=>a.done?i(a.value):Promise.resolve(a.value).then(r,o);h((e=e.apply(n,t)).next())});var Qe=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?W(_({},t),{finisher(e){e.createProperty(t.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}},Xe=(n,t,e)=>{t.constructor.createProperty(e,n)};function g(n){return(t,e)=>e!==void 0?Xe(n,t,e):Qe(n,t)}var se,At=((se=window.HTMLSlotElement)===null||se===void 0?void 0:se.prototype.assignedElements)!=null?(n,t)=>n.assignedElements(t):(n,t)=>n.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var F=window,G=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol(),Ae=new WeakMap,N=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(G&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Ae.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ae.set(e,t))}return t}toString(){return this.cssText}},Se=n=>new N(typeof n=="string"?n:n+"",void 0,ne),A=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new N(e,n,ne)},re=(n,t)=>{G?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),s=F.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},J=G?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Se(e)})(n):n;var oe,Q=window,Te=Q.trustedTypes,Ye=Te?Te.emptyScript:"",we=Q.reactiveElementPolyfillSupport,le={toAttribute(n,t){switch(t){case Boolean:n=n?Ye:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(i){e=null}}return e}},ke=(n,t)=>t!==n&&(t==t||n==n),ae={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:ke},he="finalized",f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=ae){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ae}static finalize(){if(this.hasOwnProperty(he))return!1;this[he]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return re(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ae){var s;let r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){let o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:le).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){let o=s.getPropertyOptions(r),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:le;this._$El=r,this[r]=h.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ke)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}_$Ej(){return ie(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};f[he]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},we==null||we({ReactiveElement:f}),((oe=Q.reactiveElementVersions)!==null&&oe!==void 0?oe:Q.reactiveElementVersions=[]).push("1.6.2");var de,X=window,L=X.trustedTypes,xe=L?L.createPolicy("lit-html",{createHTML:n=>n}):void 0,pe="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,Re="?"+S,Ze=`<${Re}>`,x=document,V=()=>x.createComment(""),q=n=>n===null||typeof n!="object"&&typeof n!="function",Ie=Array.isArray,et=n=>Ie(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ce=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,He=/>/g,w=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oe=/'/g,Le=/"/g,Ue=/^(?:script|style|textarea|title)$/i,Ne=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),R=Ne(1),Bt=Ne(2),M=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Pe=new WeakMap,k=x.createTreeWalker(x,129,null,!1);function De(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return xe!==void 0?xe.createHTML(t):t}var tt=(n,t)=>{let e=n.length-1,i=[],s,r=t===2?"<svg>":"",o=D;for(let h=0;h<e;h++){let a=n[h],l,d,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,d=o.exec(a),d!==null);)u=o.lastIndex,o===D?d[1]==="!--"?o=Me:d[1]!==void 0?o=He:d[2]!==void 0?(Ue.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=w):d[3]!==void 0&&(o=w):o===w?d[0]===">"?(o=s!=null?s:D,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,l=d[1],o=d[3]===void 0?w:d[3]==='"'?Le:Oe):o===Le||o===Oe?o=w:o===Me||o===He?o=D:(o=w,s=void 0);let m=o===w&&n[h+1].startsWith("/>")?" ":"";r+=o===D?a+Ze:c>=0?(i.push(l),a.slice(0,c)+pe+a.slice(c)+S+m):a+S+(c===-2?(i.push(void 0),h):m)}return[De(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),i]},H=class{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0,h=t.length-1,a=this.parts,[l,d]=tt(t,e);if(this.el=H.createElement(l,i),k.currentNode=this.el.content,e===2){let c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=k.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes()){let c=[];for(let u of s.getAttributeNames())if(u.endsWith(pe)||u.startsWith(S)){let m=d[o++];if(c.push(u),m!==void 0){let Ke=s.getAttribute(m.toLowerCase()+pe).split(S),B=/([.?@])?(.*)/.exec(m);a.push({type:1,index:r,name:B[2],strings:Ke,ctor:B[1]==="."?me:B[1]==="?"?ve:B[1]==="@"?ge:z})}else a.push({type:6,index:r})}for(let u of c)s.removeAttribute(u)}if(Ue.test(s.tagName)){let c=s.textContent.split(S),u=c.length-1;if(u>0){s.textContent=L?L.emptyScript:"";for(let m=0;m<u;m++)s.append(c[m],V()),k.nextNode(),a.push({type:2,index:++r});s.append(c[u],V())}}}else if(s.nodeType===8)if(s.data===Re)a.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(S,c+1))!==-1;)a.push({type:7,index:r}),c+=S.length-1}r++}}static createElement(t,e){let i=x.createElement("template");return i.innerHTML=t,i}};function P(n,t,e=n,i){var s,r,o,h;if(t===M)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl,l=q(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((o=(h=e)._$Co)!==null&&o!==void 0?o:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=P(n,a._$AS(n,t.values),a,i)),t}var ue=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:x).importNode(i,!0);k.currentNode=r;let o=k.nextNode(),h=0,a=0,l=s[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new O(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new fe(o,this,t)),this._$AV.push(d),l=s[++a]}h!==(l==null?void 0:l.index)&&(o=k.nextNode(),h++)}return k.currentNode=x,r}v(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},O=class{constructor(t,e,i,s){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),q(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):et(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&q(this._$AH)?this._$AA.nextSibling.data=t:this.$(x.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(De(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{let o=new ue(r,this),h=o.u(this.options);o.v(i),this.$(h),this._$AH=o}}_$AC(t){let e=Pe.get(t.strings);return e===void 0&&Pe.set(t.strings,e=new H(t)),e}T(t){Ie(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new O(this.k(V()),this.k(V()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},z=class{constructor(t,e,i,s,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let r=this.strings,o=!1;if(r===void 0)t=P(this,t,e,0),o=!q(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{let h=t,a,l;for(t=r[0],a=0;a<r.length-1;a++)l=P(this,h[i+a],e,a),l===M&&(l=this._$AH[a]),o||(o=!q(l)||l!==this._$AH[a]),l===p?t=p:t!==p&&(t+=(l!=null?l:"")+r[a+1]),this._$AH[a]=l}o&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},me=class extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},it=L?L.emptyScript:"",ve=class extends z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,it):this.element.removeAttribute(this.name)}},ge=class extends z{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=P(this,t,e,0))!==null&&i!==void 0?i:p)===M)return;let s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},fe=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}};var ze=X.litHtmlPolyfillSupport;ze==null||ze(H,O),((de=X.litHtmlVersions)!==null&&de!==void 0?de:X.litHtmlVersions=[]).push("2.7.5");var j=(n,t,e)=>{var i,s;let r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t,o=r._$litPart$;if(o===void 0){let h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new O(t.insertBefore(V(),h),h,void 0,e!=null?e:{})}return o._$AI(n),o};var be,ye;var v=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return M}};v.finalized=!0,v._$litElement$=!0,(be=globalThis.litElementHydrateSupport)===null||be===void 0||be.call(globalThis,{LitElement:v});var Ve=globalThis.litElementPolyfillSupport;Ve==null||Ve({LitElement:v});((ye=globalThis.litElementVersions)!==null&&ye!==void 0?ye:globalThis.litElementVersions=[]).push("3.3.2");var T=class extends v{connectedCallback(){this.maybeCarryFill(),super.connectedCallback()}render(){return R`<slot></slot>`}maybeCarryFill(){this.isFillCarrier?(this.classList.add("html-fill-container"),this.classList.add("html-fill-item")):(this.classList.remove("html-fill-container"),this.classList.remove("html-fill-item"))}get isFillCarrier(){if(!this.parentElement)return!1;let t=this.parentElement.classList.contains("html-fill-container"),e=Array.from(this.children).some(i=>i.classList.contains("html-fill-item"));return t&&e}};T.isShinyInput=!1,T.styles=A`
    :host {
      display: contents;
    }
  `;function Y(n){let t=n.querySelector(":scope > [data-bs-toggle='tooltip']");if(t)return t;let e=n.querySelector(":scope > [data-bs-toggle='popover']");if(e)return e;if(n.children.length>1)return n.children[n.children.length-1];if(n.childNodes.length>1){let i=document.createElement("span");return i.append(n.childNodes[n.childNodes.length-1]),n.appendChild(i),i}return n}function Z(n){var h;let{instance:t,trigger:e,content:i,type:s}=n,{tip:r}=t;if(!(r&&r.offsetParent!==null)){t.setContent(i);return}for(let[a,l]of Object.entries(i)){let d=r.querySelector(a);if(!d&&a===".popover-header"){let c=document.createElement("div");c.classList.add("popover-header"),(h=r.querySelector(".popover-body"))==null||h.before(c),d=c}if(!d){console.warn(`Could not find ${a} in ${s} content`);continue}d instanceof HTMLElement?d.replaceChildren(l):d.innerHTML=l}t.update(),e.addEventListener(`hidden.bs.${s}`,()=>t.setContent(i),{once:!0})}function K(n,t){let e=document.createElement("div");return e.style.display=t,n instanceof DocumentFragment?e.append(n):e.innerHTML=n,e}var I=class{constructor(){this.resizeObserverEntries=[],this.resizeObserver=new ResizeObserver(t=>{let e=new Event("resize");if(window.dispatchEvent(e),!window.Shiny)return;let i=[];for(let s of t)s.target instanceof HTMLElement&&s.target.querySelector(".shiny-bound-output")&&s.target.querySelectorAll(".shiny-bound-output").forEach(r=>{if(i.includes(r))return;let{binding:o,onResize:h}=$(r).data("shinyOutputBinding");if(!o||!o.resize)return;let a=r.shinyResizeObserver;if(a&&a!==this||(a||(r.shinyResizeObserver=this),h(r),i.push(r),!r.classList.contains("shiny-plot-output")))return;let l=r.querySelector('img:not([width="100%"])');l&&l.setAttribute("width","100%")})})}observe(t){this.resizeObserver.observe(t),this.resizeObserverEntries.push(t)}unobserve(t){let e=this.resizeObserverEntries.indexOf(t);e<0||(this.resizeObserver.unobserve(t),this.resizeObserverEntries.splice(e,1))}flush(){this.resizeObserverEntries.forEach(t=>{document.body.contains(t)||this.unobserve(t)})}};var st=window.bootstrap?window.bootstrap.Tooltip:class{},ee=class extends T{constructor(){super();this.placement="auto";this.bsOptions="{}";this.visible=!1;this.onChangeCallback=e=>{};this._onShown=this._onShown.bind(this),this._onInsert=this._onInsert.bind(this),this._onHidden=this._onHidden.bind(this)}get options(){let e=JSON.parse(this.bsOptions);return _({title:this.content,placement:this.placement,html:!0,sanitize:!1},e)}get content(){return this.children[0]}get triggerElement(){return Y(this)}get visibleTrigger(){let e=this.triggerElement;return e&&e.offsetParent!==null}connectedCallback(){super.connectedCallback();let e=this.querySelector("template");this.prepend(K(e.content,"none")),e.remove();let i=this.triggerElement;i.setAttribute("data-bs-toggle","tooltip"),i.setAttribute("tabindex","0"),this.bsTooltip=new st(i,this.options),i.addEventListener("shown.bs.tooltip",this._onShown),i.addEventListener("hidden.bs.tooltip",this._onHidden),i.addEventListener("inserted.bs.tooltip",this._onInsert),this.visibilityObserver=this._createVisibilityObserver()}disconnectedCallback(){let e=this.triggerElement;e.removeEventListener("shown.bs.tooltip",this._onShown),e.removeEventListener("hidden.bs.tooltip",this._onHidden),e.removeEventListener("inserted.bs.tooltip",this._onInsert),this.visibilityObserver.disconnect(),this.bsTooltip.dispose(),super.disconnectedCallback()}getValue(){return this.visible}_onShown(){this.visible=!0,this.onChangeCallback(!0),this.visibilityObserver.observe(this.triggerElement)}_onHidden(){this.visible=!1,this.onChangeCallback(!0),this._restoreContent(),this.visibilityObserver.unobserve(this.triggerElement),ee.shinyResizeObserver.flush()}_onInsert(){var s;let{tip:e}=this.bsTooltip;if(!e)throw new Error("Failed to find the tooltip's DOM element. Please report this bug.");ee.shinyResizeObserver.observe(e);let i=(s=e.querySelector(".tooltip-inner"))==null?void 0:s.firstChild;i instanceof HTMLElement&&(i.style.display="contents"),this.bsTooltipEl=e}_restoreContent(){var s;let e=this.bsTooltipEl;if(!e)return;let i=(s=e.querySelector(".tooltip-inner"))==null?void 0:s.firstChild;i instanceof HTMLElement&&(i.style.display="none",this.prepend(i)),this.bsTooltipEl=void 0}receiveMessage(e,i){let s=i.method;if(s==="toggle")this._toggle(i.value);else if(s==="update")this._updateTitle(i.title);else throw new Error(`Unknown method ${s}`)}_toggle(e){(e==="toggle"||e===void 0)&&(e=this.visible?"hide":"show"),e==="hide"&&this.bsTooltip.hide(),e==="show"&&this._show()}_show(){!this.visible&&this.visibleTrigger&&this.bsTooltip.show()}_updateTitle(e){e&&(Shiny.renderDependencies(e.deps),Z({instance:this.bsTooltip,trigger:this.triggerElement,content:{".tooltip-inner":e.html},type:"tooltip"}))}_createVisibilityObserver(){let e=i=>{this.visible&&i.forEach(s=>{s.isIntersecting||this.bsTooltip.hide()})};return new IntersectionObserver(e)}},b=ee;b.tagName="bslib-tooltip",b.shinyResizeObserver=new I,b.isShinyInput=!0,C([g({type:String})],b.prototype,"placement",2),C([g({type:String})],b.prototype,"bsOptions",2);var nt=window.bootstrap?window.bootstrap.Popover:class{},te=class extends T{constructor(){super();this.placement="auto";this.bsOptions="{}";this.visible=!1;this.onChangeCallback=e=>{};this._onShown=this._onShown.bind(this),this._onInsert=this._onInsert.bind(this),this._onHidden=this._onHidden.bind(this),this._handleTabKey=this._handleTabKey.bind(this),this._handleEscapeKey=this._handleEscapeKey.bind(this),this._closeButton=this._closeButton.bind(this)}get options(){let e=JSON.parse(this.bsOptions);return _({content:this.content,title:Ee(this.header)?this.header:"",placement:this.placement,html:!0,sanitize:!1,trigger:this.isHyperLink?"focus hover":"click"},e)}get content(){return this.contentContainer.children[0]}get header(){return this.contentContainer.children[1]}get contentContainer(){return this.children[0]}get triggerElement(){return Y(this)}get visibleTrigger(){let e=this.triggerElement;return e&&e.offsetParent!==null}get isButtonLike(){return this.options.trigger==="click"&&this.triggerElement.tagName!=="BUTTON"}get focusablePopover(){return!this.options.trigger.includes("focus")}get isHyperLink(){let e=this.triggerElement;return e.tagName==="A"&&e.hasAttribute("href")&&e.getAttribute("href")!=="#"&&e.getAttribute("href")!==""&&e.getAttribute("href")!=="javascript:void(0)"}connectedCallback(){super.connectedCallback();let e=this.querySelector("template");this.prepend(K(e.content,"none")),e.remove(),this.content&&j(this._closeButton(this.header),this.content);let i=this.triggerElement;i.setAttribute("data-bs-toggle","popover"),this.isButtonLike&&(i.setAttribute("role","button"),i.setAttribute("tabindex","0"),i.setAttribute("aria-pressed","false"),this.triggerElement.tagName!=="A"&&(i.onkeydown=s=>{(s.key==="Enter"||s.key===" ")&&this._toggle()}),i.style.cursor="pointer"),this.bsPopover=new nt(i,this.options),i.addEventListener("shown.bs.popover",this._onShown),i.addEventListener("hidden.bs.popover",this._onHidden),i.addEventListener("inserted.bs.popover",this._onInsert),this.visibilityObserver=this._createVisibilityObserver()}disconnectedCallback(){let e=this.triggerElement;e.removeEventListener("shown.bs.popover",this._onShown),e.removeEventListener("hidden.bs.popover",this._onHidden),e.removeEventListener("inserted.bs.popover",this._onInsert),this.visibilityObserver.disconnect(),this.bsPopover.dispose(),super.disconnectedCallback()}getValue(){return this.visible}_onShown(){this.visible=!0,this.onChangeCallback(!0),this.visibilityObserver.observe(this.triggerElement),this.focusablePopover&&(document.addEventListener("keydown",this._handleTabKey),document.addEventListener("keydown",this._handleEscapeKey)),this.isButtonLike&&this.triggerElement.setAttribute("aria-pressed","true")}_onHidden(){this.visible=!1,this.onChangeCallback(!0),this._restoreContent(),this.visibilityObserver.unobserve(this.triggerElement),te.shinyResizeObserver.flush(),this.focusablePopover&&(document.removeEventListener("keydown",this._handleTabKey),document.removeEventListener("keydown",this._handleEscapeKey)),this.isButtonLike&&this.triggerElement.setAttribute("aria-pressed","false")}_onInsert(){let{tip:e}=this.bsPopover;if(!e)throw new Error("Failed to find the popover's DOM element. Please report this bug.");te.shinyResizeObserver.observe(e),this.focusablePopover&&e.setAttribute("tabindex","0"),this.bsPopoverEl=e}_handleTabKey(e){if(e.key!=="Tab")return;let{tip:i}=this.bsPopover;if(!i)return;let s=()=>{e.preventDefault(),e.stopImmediatePropagation()},r=document.activeElement;r===this.triggerElement&&!e.shiftKey&&(s(),i.focus()),r===i&&e.shiftKey&&(s(),this.triggerElement.focus())}_handleEscapeKey(e){if(e.key!=="Escape")return;let{tip:i}=this.bsPopover;if(!i)return;let s=document.activeElement;(s===this.triggerElement||i.contains(s))&&(e.preventDefault(),e.stopImmediatePropagation(),this._hide(),this.triggerElement.focus())}_restoreContent(){let e=this.bsPopoverEl;if(!e)return;let i=e.querySelector(".popover-body");i&&this.contentContainer.append(i==null?void 0:i.firstChild);let s=e.querySelector(".popover-header");s&&this.contentContainer.append(s==null?void 0:s.firstChild),this.bsPopoverEl=void 0}receiveMessage(e,i){let s=i.method;if(s==="toggle")this._toggle(i.value);else if(s==="update")this._updatePopover(i);else throw new Error(`Unknown method ${s}`)}_toggle(e){(e==="toggle"||e===void 0)&&(e=this.visible?"hide":"show"),e==="hide"&&this._hide(),e==="show"&&this._show()}_hide(){this.bsPopover.hide()}_show(){!this.visible&&this.visibleTrigger&&this.bsPopover.show()}_updatePopover(e){let{content:i,header:s}=e,r=[];i&&r.push(...i.deps),s&&r.push(...s.deps),Shiny.renderDependencies(r);let o=(l,d,c)=>{var u;return l?K(l.html,"contents"):d||((u=this.bsPopover.tip)==null?void 0:u.querySelector(c))},h=o(s,this.header,".popover-header"),a=o(i,this.content,".popover-body");j(this._closeButton(h),a),Z({instance:this.bsPopover,trigger:this.triggerElement,content:{".popover-header":Ee(h)?h:"",".popover-body":a},type:"popover"})}_closeButton(e){if(!this.focusablePopover)return p;let i=()=>{this._hide(),this.focusablePopover&&this.triggerElement.focus()},s=Ee(e)?"0.6rem":"0.25rem";return R`<button
      type="button"
      aria-label="Close"
      class="btn-close"
      @click=${i}
      style="position:absolute; top:${s}; right:0.25rem; width:0.55rem; height:0.55rem; background-size:0.55rem;"
    ></button>`}_createVisibilityObserver(){let e=i=>{this.visible&&i.forEach(s=>{s.isIntersecting||this._hide()})};return new IntersectionObserver(e)}},y=te;y.tagName="bslib-popover",y.shinyResizeObserver=new I,y.isShinyInput=!0,C([g({type:String})],y.prototype,"placement",2),C([g({type:String})],y.prototype,"bsOptions",2);function Ee(n){return!!n&&n.childNodes.length>0}var E=class extends v{constructor(){super(...arguments);this.attribute="data-shinytheme";this.onChangeCallback=e=>{}}connectedCallback(){super.connectedCallback(),this.attribute=this.getAttribute("attribute")||this.attribute,typeof this.mode=="undefined"&&(this.mode=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),this.reflectPreference(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:e})=>{this.mode=e?"dark":"light",this.reflectPreference()}),this._observeDocumentThemeAttribute()}disconnectedCallback(){this.observer.disconnect(),super.disconnectedCallback()}_observeDocumentThemeAttribute(){this.observer=new MutationObserver(i=>{i.forEach(s=>{if(s.target!==document.documentElement||s.attributeName!==this.attribute)return;let r=document.documentElement.getAttribute(this.attribute);!r||r===this.mode||(this.mode=r)})});let e={attributes:!0,childList:!1,subtree:!1};this.observer.observe(document.documentElement,e)}getValue(){return this.mode}render(){let e=this.mode==="light"?"dark":"light",i=`Switch from ${this.mode} to ${e} mode`;return R`
      <button
        title="${i}"
        aria-label="${i}"
        aria-live="polite"
        data-theme="${this.mode}"
        @click="${this.onClick}"
      >
        <svg class="sun-and-moon" aria-hidden="true" viewBox="0 0 24 24">
          <mask class="moon" id="moon-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="25" cy="10" r="6" fill="black" />
          </mask>
          <circle
            class="sun"
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="currentColor"
          />
          <g class="sun-beams" stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </button>
    `}onClick(e){e.stopPropagation(),this.mode=this.mode==="light"?"dark":"light"}updated(e){e.has("mode")&&(this.reflectPreference(),this.onChangeCallback(!0))}reflectPreference(){document.documentElement.setAttribute(this.attribute,this.mode),window.dispatchEvent(new Event("resize"))}};E.isShinyInput=!0,E.tagName="bslib-input-dark-mode",E.shinyCustomMessageHandlers={"bslib.toggle-dark-mode":({method:e,value:i})=>{e==="toggle"&&((typeof i=="undefined"||i===null)&&(i=(document.documentElement.dataset.bsTheme||"light")==="light"?"dark":"light"),document.documentElement.dataset.bsTheme=i)}},E.styles=[A`
      :host {
        /* open-props.style via shinycomponent */
        --text-1: var(--text-1-light, var(--gray-8, #343a40));
        --text-2: var(--text-2-light, var(--gray-7, #495057));
        --size-xxs: var(--size-1, 0.25rem);
        --ease-in-out-1: cubic-bezier(0.1, 0, 0.9, 1);
        --ease-in-out-2: cubic-bezier(0.3, 0, 0.7, 1);
        --ease-out-1: cubic-bezier(0, 0, 0.75, 1);
        --ease-out-3: cubic-bezier(0, 0, 0.3, 1);
        --ease-out-4: cubic-bezier(0, 0, 0.1, 1);

        /* shinycomponent */
        --speed-fast: 0.15s;
        --speed-normal: 0.3s;

        /* Size of the icon, uses em units so it scales to font-size */
        --size: 1.3em;

        /* Because we are (most likely) bigger than one em we will need to move
        the button up or down to keep it looking right inline */
        --vertical-correction: calc((var(--size) - 1em) / 2);
      }
    `,A`
      .sun-and-moon > :is(.moon, .sun, .sun-beams) {
        transform-origin: center center;
      }

      .sun-and-moon > .sun {
        fill: none;
        stroke: var(--text-1);
        stroke-width: var(--stroke-w);
      }

      button:is(:hover, :focus-visible)
        > :is(.sun-and-moon > :is(.moon, .sun)) {
        fill: var(--text-2);
      }

      .sun-and-moon > .sun-beams {
        stroke: var(--text-1);
        stroke-width: var(--stroke-w);
      }

      button:is(:hover, :focus-visible) :is(.sun-and-moon > .sun-beams) {
        background-color: var(--text-2);
      }

      [data-theme="dark"] .sun-and-moon > .sun {
        fill: var(--text-1);
        stroke: none;
        stroke-width: 0;
        transform: scale(1.6);
      }

      [data-theme="dark"] .sun-and-moon > .sun-beams {
        opacity: 0;
      }

      [data-theme="dark"] .sun-and-moon > .moon > circle {
        transform: translateX(-10px);
      }

      @supports (cx: 1) {
        [data-theme="dark"] .sun-and-moon > .moon > circle {
          transform: translateX(0);
          cx: 15;
        }
      }
    `,A`
      .sun-and-moon > .sun {
        transition: transform var(--speed-fast) var(--ease-in-out-2)
            var(--speed-fast),
          fill var(--speed-fast) var(--ease-in-out-2) var(--speed-fast),
          stroke-width var(--speed-normal) var(--ease-in-out-2);
      }

      .sun-and-moon > .sun-beams {
        transition: transform var(--speed-fast) var(--ease-out-3),
          opacity var(--speed-fast) var(--ease-out-4);
        transition-delay: var(--speed-normal);
      }

      .sun-and-moon .moon > circle {
        transition: transform var(--speed-fast) var(--ease-in-out-2),
          fill var(--speed-fast) var(--ease-in-out-2);
        transition-delay: 0s;
      }

      @supports (cx: 1) {
        .sun-and-moon .moon > circle {
          transition: cx var(--speed-normal) var(--ease-in-out-2);
        }

        [data-theme="dark"] .sun-and-moon .moon > circle {
          transition: cx var(--speed-fast) var(--ease-in-out-2);
          transition-delay: var(--speed-fast);
        }
      }

      [data-theme="dark"] .sun-and-moon > .sun {
        transition-delay: 0s;
        transition-duration: var(--speed-normal);
        transition-timing-function: var(--ease-in-out-2);
      }

      [data-theme="dark"] .sun-and-moon > .sun-beams {
        transform: scale(0.3);
        transition: transform var(--speed-normal) var(--ease-in-out-2),
          opacity var(--speed-fast) var(--ease-out-1);
        transition-delay: 0s;
      }
    `,A`
      :host {
        display: inline-block;

        /* We control the stroke size manually here. We don't want it getting so
        small its not visible but also not so big it looks cartoonish */
        --stroke-w: clamp(1px, 0.1em, 6px);
      }

      button {
        /* This is needed to let the svg use the em sizes */
        font-size: inherit;

        /* Make sure the button is fully centered */
        display: grid;
        place-content: center;

        /* A little bit of padding to make it easier to press */
        padding: var(--size-xxs);
        background: none;
        border: none;
        aspect-ratio: 1;
        border-radius: 50%;
        cursor: pointer;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        outline-offset: var(--size-xxs);

        /* Move down to adjust for being larger than 1em */
        transform: translateY(var(--vertical-correction));
        margin-block-end: var(--vertical-correction);
      }

      /*
      button:is(:hover, :focus-visible) {
        background: var(--surface-4);
      }
      */

      button > svg {
        height: var(--size);
        width: var(--size);
        stroke-linecap: round;
        overflow: visible;
      }

      svg line,
      svg circle {
        vector-effect: non-scaling-stroke;
      }
    `],C([g({type:String,reflect:!0})],E.prototype,"mode",2);function qe(n,{type:t=null}={}){if(!window.Shiny)return;class e extends Shiny.InputBinding{constructor(){super()}find(s){return $(s).find(n)}getValue(s){return"getValue"in s?s.getValue():s.value}getType(s){return t}subscribe(s,r){s.onChangeCallback=r}unsubscribe(s){s.onChangeCallback=r=>{}}receiveMessage(s,r){s.receiveMessage(s,r)}}Shiny.inputBindings.register(new e,`${n}-Binding`)}function je(n){if(window.Shiny)for(let[t,e]of Object.entries(n))Shiny.addCustomMessageHandler(t,e)}[b,y,E].forEach(n=>{customElements.define(n.tagName,n),window.Shiny&&(n.isShinyInput&&qe(n.tagName),"shinyCustomMessageHandlers"in n&&je(n.shinyCustomMessageHandlers))});})();
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=web-components.min.js.map
