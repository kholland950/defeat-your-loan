var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function s(t,e,n){t.$$.on_destroy.push(u(e,n))}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function p(){return m(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function b(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let $;function v(t){$=t}const x=[],_=[],M=[],w=[],S=Promise.resolve();let I=!1;function C(t){M.push(t)}let k=!1;const P=new Set;function T(){if(!k){k=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];v(e),O(e.$$)}for(v(null),x.length=0;_.length;)_.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];P.has(e)||(P.add(e),e())}M.length=0}while(x.length);for(;w.length;)w.pop()();I=!1,k=!1,P.clear()}}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const Y=new Set;let D;function N(){D={r:0,c:[],p:D}}function B(){D.r||o(D.c),D=D.p}function E(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function A(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),D.c.push((()=>{Y.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function R(t){t&&t.c()}function L(t,n,a,u){const{fragment:s,on_mount:c,on_destroy:l,after_update:i}=t.$$;s&&s.m(n,a),u||C((()=>{const n=c.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(C)}function j(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(x.push(t),I||(I=!0,S.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,r,a,u,s,c,l=[-1]){const f=$;v(e);const m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:r.context||[]),callbacks:n(),dirty:l,skip_bound:!1};let p=!1;if(m.ctx=a?a(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&F(e,t)),n})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!u&&u(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();r.intro&&E(e.$$.fragment),L(e,r.target,r.anchor,r.customElement),T()}v(f)}class U{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const H=[];function z(e,n=t){let o;const r=[];function u(t){if(a(e,t)&&(e=t,o)){const t=!H.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),H.push(n,e)}if(t){for(let t=0;t<H.length;t+=2)H[t][0](H[t+1]);H.length=0}}}return{set:u,update:function(t){u(t(e))},subscribe:function(a,s=t){const c=[a,s];return r.push(c),1===r.length&&(o=n(u)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function G(t){let e,n=new Date(t),o=new Date;return e=12*(o.getFullYear()-n.getFullYear()),e-=n.getMonth(),e+=o.getMonth(),e<=0?0:e}function J(t,e){return"Years"===e?12*t:t}function K({startMonth:t,rate:e,amount:n,term:o},r){let a=0,u=n,s=tt({rate:e,amount:n,term:o});for(let t=0;t<r;t++){let t=u*e/12;a+=t,u-=s-t}return a}function Q({startMonth:t,rate:e,amount:n,term:o}){return K({rate:e,amount:n,term:o},G(t))}function V({rate:t,amount:e,term:n}){return K({rate:t,amount:e,term:n},n)}function W({startMonth:t,rate:e,amount:n,term:o}){return V({startMonth:t,rate:e,amount:n,term:o})-Q({startMonth:t,rate:e,amount:n,term:o})}function X({startMonth:t,rate:e,amount:n,term:o}){return n-(G(t)*tt({rate:e,amount:n,term:o})-Q({startMonth:t,rate:e,amount:n,term:o}))}function Z(t){return t/100}function tt({rate:t,amount:e,term:n}){let o=t/12;return e/((Math.pow(1+o,n)-1)/(o*Math.pow(1+o,n)))}const et=z(localStorage.getItem("startMonth")||""),nt=z(localStorage.getItem("amount")||""),ot=z(localStorage.getItem("rate")||""),rt=z(localStorage.getItem("term")||""),at=z(localStorage.getItem("termType")||"Years"),ut=z(localStorage.getItem("strategy")||""),st=z(localStorage.getItem("payOffBy")||"");et.subscribe((t=>localStorage.setItem("startMonth",t))),nt.subscribe((t=>localStorage.setItem("amount",t))),ot.subscribe((t=>localStorage.setItem("rate",t))),rt.subscribe((t=>localStorage.setItem("term",t))),at.subscribe((t=>localStorage.setItem("termType",t))),ut.subscribe((t=>localStorage.setItem("strategy",t))),st.subscribe((t=>localStorage.setItem("payOffBy",t)));const ct=function(e,n,a){const s=!Array.isArray(e),c=s?[e]:e,l=n.length<2;return{subscribe:z(a,(e=>{let a=!1;const i=[];let f=0,m=t;const p=()=>{if(f)return;m();const o=n(s?i[0]:i,e);l?e(o):m=r(o)?o:t},h=c.map(((t,e)=>u(t,(t=>{i[e]=t,f&=~(1<<e),a&&p()}),(()=>{f|=1<<e}))));return a=!0,p(),function(){o(h),m()}})).subscribe}}([et,nt,ot,rt,at],(([t,e,n,o,r])=>function(t){if(t.startMonth&&t.rate&&t.amount&&t.term&&t.termType){const e={startMonth:t.startMonth,rate:Z(Number(t.rate)),amount:Number(t.amount.replace(/,/g,"")),term:Number(J(t.term,t.termType))};return{interestPaid:Q(e),interestToPay:W(e),interestTotal:V(e),monthlyPayment:tt(e),principalRemaining:X(e)}}}({startMonth:t,amount:e,rate:n,term:o,termType:r})));function lt(e){let n,o,r,a,u,s;return{c(){n=f("label"),n.textContent="I want to pay off my loan by",o=p(),r=f("div"),a=f("input"),d(n,"for","payOffBy"),d(a,"type","month"),d(a,"placeholder",""),d(a,"id","payOffBy"),d(a,"autocomplete","off")},m(t,i){l(t,n,i),l(t,o,i),l(t,r,i),c(r,a),y(a,e[0]),u||(s=h(a,"input",e[1]),u=!0)},p(t,[e]){1&e&&y(a,t[0])},i:t,o:t,d(t){t&&i(n),t&&i(o),t&&i(r),u=!1,s()}}}function it(t,e,n){let o;return s(t,st,(t=>n(0,o=t))),[o,function(){o=this.value,st.set(o)}]}class ft extends U{constructor(t){super(),q(this,t,it,lt,a,{})}}function mt(e){let n;return{c(){n=f("span"),n.textContent="save money"},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&i(n)}}}class pt extends U{constructor(t){super(),q(this,t,null,mt,a,{})}}function ht(t){let e,n,r,a,u,s,y,b,$,v,x,_,M,w,S,I,C,k,P,T,O,Y,D,R,L,j,F,q,U,H,z,G,J,K,Q,V,W=t[8].format(t[5].monthlyPayment)+"",X=t[8].format(t[5].interestPaid)+"",Z=t[8].format(t[5].interestToPay)+"",tt=t[8].format(t[5].principalRemaining)+"",et="payOffByDate"===t[6]&&dt(),nt="saveMoney"===t[6]&&gt();return{c(){e=f("div"),n=f("h3"),r=m("You pay "),a=f("strong"),u=m(W),s=m(" per month"),y=p(),b=f("h3"),$=m("You have paid "),v=f("strong"),x=m(X),_=m(" in interest so far."),M=p(),w=f("h3"),S=m("You will pay "),I=f("strong"),C=m(Z),k=m(" more interest for\n          the rest of the loan."),P=p(),T=f("h3"),O=m("Principal Remaining: "),Y=f("strong"),D=m(tt),R=p(),L=f("div"),j=f("h3"),j.textContent='"I want to"',F=p(),q=f("button"),q.textContent="pay off by a date",U=p(),H=f("button"),H.textContent="save money on my loan",z=p(),et&&et.c(),G=p(),nt&&nt.c(),J=m(""),d(b,"class","positive-text"),d(w,"class","negative-text"),d(e,"class","stats"),d(L,"class","mt-2")},m(o,i){l(o,e,i),c(e,n),c(n,r),c(n,a),c(a,u),c(n,s),c(e,y),c(e,b),c(b,$),c(b,v),c(v,x),c(b,_),c(e,M),c(e,w),c(w,S),c(w,I),c(I,C),c(w,k),c(e,P),c(e,T),c(T,O),c(T,Y),c(Y,D),l(o,R,i),l(o,L,i),c(L,j),c(L,F),c(L,q),c(L,U),c(L,H),l(o,z,i),et&&et.m(o,i),l(o,G,i),nt&&nt.m(o,i),l(o,J,i),K=!0,Q||(V=[h(q,"click",t[7]("payOffByDate")),h(H,"click",t[7]("saveMoney"))],Q=!0)},p(t,e){(!K||32&e)&&W!==(W=t[8].format(t[5].monthlyPayment)+"")&&g(u,W),(!K||32&e)&&X!==(X=t[8].format(t[5].interestPaid)+"")&&g(x,X),(!K||32&e)&&Z!==(Z=t[8].format(t[5].interestToPay)+"")&&g(C,Z),(!K||32&e)&&tt!==(tt=t[8].format(t[5].principalRemaining)+"")&&g(D,tt),"payOffByDate"===t[6]?et?64&e&&E(et,1):(et=dt(),et.c(),E(et,1),et.m(G.parentNode,G)):et&&(N(),A(et,1,1,(()=>{et=null})),B()),"saveMoney"===t[6]?nt?64&e&&E(nt,1):(nt=gt(),nt.c(),E(nt,1),nt.m(J.parentNode,J)):nt&&(N(),A(nt,1,1,(()=>{nt=null})),B())},i(t){K||(E(et),E(nt),K=!0)},o(t){A(et),A(nt),K=!1},d(t){t&&i(e),t&&i(R),t&&i(L),t&&i(z),et&&et.d(t),t&&i(G),nt&&nt.d(t),t&&i(J),Q=!1,o(V)}}}function dt(t){let e,n;return e=new ft({}),{c(){R(e.$$.fragment)},m(t,o){L(e,t,o),n=!0},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function gt(t){let e,n;return e=new pt({}),{c(){R(e.$$.fragment)},m(t,o){L(e,t,o),n=!0},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function yt(t){let e,n,r,a,u,s,m,g,$,v,x,_,M,w,S,I,k,P,T,O,Y,D,R,L,j,F,q,U,H,z,G,J,K,Q,V=t[5]&&ht(t);return{c(){e=f("form"),n=f("fieldset"),r=f("div"),a=f("a"),a.textContent="Reset",u=p(),s=f("label"),s.textContent="My loan started in",m=p(),g=f("div"),$=f("input"),v=p(),x=f("label"),x.textContent="with the amount",_=p(),M=f("div"),w=f("input"),S=p(),I=f("label"),I.textContent="at the interest rate",k=p(),P=f("div"),T=f("input"),O=p(),Y=f("label"),Y.textContent="and has the term:",D=p(),R=f("div"),L=f("div"),j=f("input"),F=p(),q=f("div"),U=f("select"),H=f("option"),H.textContent="Years",z=f("option"),z.textContent="Months",G=p(),V&&V.c(),d(a,"href","/"),d(r,"class","reset svelte-1h6930u"),d(s,"for","startMonth"),d($,"type","month"),d($,"placeholder","Loan Start Date"),d($,"id","startMonth"),d($,"autocomplete","off"),d(x,"for","amount"),d(w,"type","text"),d(w,"placeholder","Loan Amount"),d(w,"id","amount"),d(w,"autocomplete","off"),d(M,"class","dollars"),d(I,"for","rate"),d(T,"type","text"),d(T,"placeholder","Interest Rate"),d(T,"id","rate"),d(T,"autocomplete","off"),d(P,"class","rate"),d(Y,"for","term"),d(j,"type","text"),d(j,"placeholder","Months/Years"),d(j,"id","term"),d(j,"autocomplete","off"),d(L,"class","column"),H.__value="Years",H.value=H.__value,z.__value="Months",z.value=z.__value,d(U,"id","term-unit"),d(U,"autocomplete","off"),void 0===t[4]&&C((()=>t[14].call(U))),d(q,"class","column column-25"),d(R,"class","row")},m(o,i){l(o,e,i),c(e,n),c(n,r),c(r,a),c(n,u),c(n,s),c(n,m),c(n,g),c(g,$),y($,t[0]),c(n,v),c(n,x),c(n,_),c(n,M),c(M,w),y(w,t[1]),c(n,S),c(n,I),c(n,k),c(n,P),c(P,T),y(T,t[2]),c(n,O),c(n,Y),c(n,D),c(n,R),c(R,L),c(L,j),y(j,t[3]),c(R,F),c(R,q),c(q,U),c(U,H),c(U,z),b(U,t[4]),c(n,G),V&&V.m(n,null),J=!0,K||(Q=[h(a,"click",t[9]),h($,"input",t[10]),h(w,"input",t[11]),h(T,"input",t[12]),h(j,"input",t[13]),h(U,"change",t[14]),h(e,"submit",bt)],K=!0)},p(t,[e]){1&e&&y($,t[0]),2&e&&w.value!==t[1]&&y(w,t[1]),4&e&&T.value!==t[2]&&y(T,t[2]),8&e&&j.value!==t[3]&&y(j,t[3]),16&e&&b(U,t[4]),t[5]?V?(V.p(t,e),32&e&&E(V,1)):(V=ht(t),V.c(),E(V,1),V.m(n,null)):V&&(N(),A(V,1,1,(()=>{V=null})),B())},i(t){J||(E(V),J=!0)},o(t){A(V),J=!1},d(t){t&&i(e),V&&V.d(),K=!1,o(Q)}}}function bt(t){t.preventDefault()}function $t(t,e,n){let o,r,a,u,c,l,i;s(t,et,(t=>n(0,o=t))),s(t,nt,(t=>n(1,r=t))),s(t,ot,(t=>n(2,a=t))),s(t,rt,(t=>n(3,u=t))),s(t,at,(t=>n(4,c=t))),s(t,ct,(t=>n(5,l=t))),s(t,ut,(t=>n(6,i=t)));const f=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return[o,r,a,u,c,l,i,function(t){return function(){ut.set(t)}},f,function(t){t.preventDefault(),et.set(""),nt.set(""),ot.set(""),rt.set(""),at.set("Years"),ut.set(""),st.set("")},function(){o=this.value,et.set(o)},function(){r=this.value,nt.set(r)},function(){a=this.value,ot.set(a)},function(){u=this.value,rt.set(u)},function(){c=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),at.set(c)}]}class vt extends U{constructor(t){super(),q(this,t,$t,yt,a,{})}}function xt(e){let n,o,r,a,u,s,m,h,g,y;return g=new vt({}),{c(){n=f("link"),o=f("link"),r=p(),a=f("main"),u=f("h1"),u.textContent="Defeat your loan",s=p(),m=f("h2"),m.innerHTML="Pay off your loans early<br/> \n    <strong>and save money</strong>",h=p(),R(g.$$.fragment),d(n,"rel","preconnect"),d(n,"href","https://fonts.gstatic.com"),d(o,"href","https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600&display=swap"),d(o,"rel","stylesheet")},m(t,e){c(document.head,n),c(document.head,o),l(t,r,e),l(t,a,e),c(a,u),c(a,s),c(a,m),c(a,h),L(g,a,null),y=!0},p:t,i(t){y||(E(g.$$.fragment,t),y=!0)},o(t){A(g.$$.fragment,t),y=!1},d(t){i(n),i(o),t&&i(r),t&&i(a),j(g)}}}return new class extends U{constructor(t){super(),q(this,t,null,xt,a,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map