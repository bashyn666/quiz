(function(e){function t(t){for(var n,o,i=t[0],u=t[1],a=t[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,a||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],n=!0,i=1;i<s.length;i++){var u=s[i];0!==r[u]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},r={app:0},c=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=u;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),r={class:"ctr"};function c(e,t,s,c,o,i){var u=Object(n["h"])("questions"),a=Object(n["h"])("result");return Object(n["f"])(),Object(n["c"])("div",r,[o.questionsAnswered<o.questions.length?(Object(n["f"])(),Object(n["c"])(u,{key:0,questions:o.questions,questionsAnswered:o.questionsAnswered,onQuestionAnswered:i.questionAnswered},null,8,["questions","questionsAnswered","onQuestionAnswered"])):(Object(n["f"])(),Object(n["c"])(a,{key:1,results:o.results,totalCorrect:o.totalCorrect},null,8,["results","totalCorrect"])),this.questionsAnswered===o.questions.length?(Object(n["f"])(),Object(n["c"])("button",{key:2,type:"button",class:"reset-btn",onClick:t[1]||(t[1]=Object(n["l"])((function(){return i.reset&&i.reset.apply(i,arguments)}),["prevent"]))},"Reset")):Object(n["d"])("",!0)])}var o={class:"questions-ctr"},i={class:"progress"},u={class:"status"},a={class:"question"},l={class:"answers"};function d(e,t,s,r,c,d){return Object(n["f"])(),Object(n["c"])("div",o,[Object(n["e"])("div",i,[Object(n["e"])("div",{class:"bar",style:{width:"".concat(s.questionsAnswered/s.questions.length*100,"%")}},null,4),Object(n["e"])("div",u,Object(n["i"])(s.questionsAnswered)+" out of "+Object(n["i"])(s.questions.length)+"questions answered",1)]),(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(s.questions,(function(e,t){return Object(n["k"])((Object(n["f"])(),Object(n["c"])("div",{class:"single-question",key:e.q},[Object(n["e"])("div",a,Object(n["i"])(e.q),1),Object(n["e"])("div",l,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(e.answers,(function(e){return Object(n["f"])(),Object(n["c"])("div",{class:"answer",key:e.text,onClick:Object(n["l"])((function(t){return d.selectAnswer(e.is_correct)}),["prevent"])},Object(n["i"])(e.text),9,["onClick"])})),128))])],512)),[[n["j"],s.questionsAnswered===t]])})),128))])}var b={props:["questions","questionsAnswered"],emits:["question-answered"],methods:{selectAnswer:function(e){this.$emit("question-answered",e)}}};b.render=d;var f=b,p={class:"result"},O={class:"title"},j={class:"desc"};function w(e,t,s,r,c,o){return Object(n["f"])(),Object(n["c"])("div",p,[Object(n["e"])("div",O,Object(n["i"])(s.results[o.resultIndex].title),1),Object(n["e"])("div",j,Object(n["i"])(s.results[o.resultIndex].desc),1)])}s("159b");var h={props:["results","totalCorrect"],computed:{resultIndex:function(){var e=this,t=0;return this.results.forEach((function(s,n){s.min<=e.totalCorrect&&s.max>=e.totalCorrect&&(t=n)})),t}}};h.render=w;var v=h,q={name:"App",components:{Questions:f,Result:v},data:function(){return{questionsAnswered:0,totalCorrect:0,questions:[{q:"What is 2 + 2?",answers:[{text:"4",is_correct:!0},{text:"3",is_correct:!1},{text:"Fish",is_correct:!1},{text:"5",is_correct:!1}]},{q:'How many letters are in the word "Banana"?',answers:[{text:"5",is_correct:!1},{text:"7",is_correct:!1},{text:"6",is_correct:!0},{text:"12",is_correct:!1}]},{q:"Find the missing letter: C_ke",answers:[{text:"e",is_correct:!1},{text:"a",is_correct:!0},{text:"i",is_correct:!1}]}],results:[{min:0,max:2,title:"Try again!",desc:"Do a little more studying and you may succeed!"},{min:3,max:3,title:"Wow, you're a genius!",desc:"Studying has definitely paid off for you!"}]}},methods:{questionAnswered:function(e){e&&this.totalCorrect++,this.questionsAnswered++},reset:function(){this.questionsAnswered=0,this.totalCorrect=0}}};q.render=c;var y=q;Object(n["b"])(y).mount("#app")}});
//# sourceMappingURL=app.5c5807c5.js.map