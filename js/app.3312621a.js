(function(e){function t(t){for(var s,a,c=t[0],r=t[1],o=t[2],d=0,v=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&v.push(i[a][0]),i[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);u&&u(t);while(v.length)v.shift()();return l.push.apply(l,o||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],s=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(s=!1)}s&&(l.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},i={app:0},l=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/familial-hyperlipidemia-calculator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=r;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("85ec"),i=n.n(s);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=n("289d"),l=(n("5abe"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[1==e.activeSlide?n("section",{staticClass:"section"},[n("Slide1",{on:{next:e.slide1Next}})],1):e._e(),2==e.activeSlide?n("section",{staticClass:"section"},[n("Slide2",{on:{next:e.slide2Next}})],1):e._e(),3==e.activeSlide?n("section",{staticClass:"section"},[n("Slide34",{on:{next:e.slide3Next}})],1):e._e(),5==e.activeSlide?n("section",{staticClass:"section"},[n("Slide5",{on:{next:e.slide5Next}})],1):e._e(),6==e.activeSlide?n("section",{staticClass:"section"},[n("Slide6",{on:{next:e.slide6Next}})],1):e._e(),7==e.activeSlide?n("section",{staticClass:"section"},[n("Slide7",{on:{next:e.slide7Next}})],1):e._e(),0==e.activeSlide?n("section",{staticClass:"section"},[n("Conclusion",{attrs:{answers:e.answers}})],1):e._e()])}),a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-4"},[e._v("Отметьте наличие у больного следующих состояний")]),n("b-table",{attrs:{data:e.data,columns:e.columns,"checked-rows":e.checkedRows,checkable:"","header-checkable":e.headerCheckable,"checkbox-position":"right"},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}}}),n("hr"),n("b-button",{attrs:{size:"is-medium",type:"is-primary",expanded:""},on:{click:function(t){return e.$emit("next",e.numChecked)}}},[e._v("Далее")])],1)},r=[],o={name:"Slide1",data:function(){return{data:[{id:1,label:"Уровень холестерина ≥8 ммоль/л или ЛНП выше 4,9 ммоль/л"},{id:2,label:"Наличие ИБС, развившейся в возрасте до 55 лет для муж или до 60 лет для женщин, у обследуемого или в его родственников"},{id:3,label:"Наличие ксантом на сухожилиях (у обследуемого или у членов его семьи)"},{id:4,label:"внезапная сердечная смерть у членов семьи (в раннем возрасте – до 55 лет муж, до 60 лет жен).уровень холестерина ≥8 ммоль/л или ЛНП выше 4,9 ммоль/л"}],checkboxPosition:"left",headerCheckable:!1,checkedRows:[],columns:[{field:"id",label:"№",width:"40",numeric:!0},{field:"label",label:"Вопрос"}]}},computed:{numChecked:function(){return this.checkedRows.length}}},u=o,d=n("2877"),v=Object(d["a"])(u,c,r,!1,null,null,null),p=v.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b-button",{attrs:{type:"is-primary is-medium",outlined:"",expanded:""},on:{click:function(t){return e.$emit("next",!1)}}},[e._v("Нет")])],1),n("div",{staticClass:"column"},[n("b-button",{attrs:{type:"is-primary is-medium",outlined:"",expanded:""},on:{click:function(t){return e.$emit("next",!0)}}},[e._v("Да")])],1)])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-full"},[n("p",[e._v(" Вероятность семейной дислипидемии у больного низкая. Планируется ли назнаение больному высоких доз статинов? ")])])])}],b={name:"Slide2",data:function(){return{answer:null}}},h=b,C=Object(d["a"])(h,f,m,!1,null,null,null),_=C.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-4"},[e._v("Критерии Голландской сети липидных клиник")]),n("h2",{staticClass:"subtitle"},[e._v("Отметьте наличие у больного следующих состояний")]),n("table",{staticClass:"table is-striped is-narrow"},[e._m(0),e.isAnyClicked?n("tfoot",[n("tr",[n("th",{staticClass:"is-centered is-info",attrs:{colspan:"2"}},[n("p",[e._v(" Сумма баллов: "+e._s(e.totalScore)+". "+e._s(e.totalScoreText)+" ")])])])]):e._e(),n("tbody",e._l(e.questions,(function(t,s){return n("tr",{key:s},[n("td",[e._v(e._s(t.label))]),n("td",[n("b-field",{attrs:{"group-multiline":t.choices.length>2,addons:2==t.choices.length}},e._l(t.choices,(function(i,l){return n("b-radio-button",{key:s+l,attrs:{"native-value":i.score},model:{value:t.answerScore,callback:function(n){e.$set(t,"answerScore",n)},expression:"question.answerScore"}},[n("p",[e._v(e._s(i.label)+" "),n("span",{staticClass:"tag is-dark"},[e._v(e._s(i.score))])])])})),1)],1)])})),0)]),n("hr"),n("b-button",{directives:[{name:"show",rawName:"v-show",value:e.isAnyClicked,expression:"isAnyClicked"}],attrs:{size:"is-medium",type:"is-primary",expanded:""},on:{click:function(t){return e.$emit("next",e.totalScore)}}},[e._v("Далее")])],1)},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Критерий")]),n("th",[e._v("Балл")])])])}],w=(n("a623"),n("d81d"),n("13d5"),n("e25e"),{name:"Slide34",data:function(){return{questions:[{label:"Есть ли у больного родственники первой линии родства (родители, родные братья и сестры) с ранней ИБС?",choices:[{label:"Нет",score:0},{label:"Да",score:1}],answerScore:NaN},{label:"Есть ли у больного родственники первой линии родства с ЛНП> 95 персентиля (с учетом возраста, пола и страны) (ЛНП> 4,9 ммоль/л для взрослых)?",choices:[{label:"Нет",score:0},{label:"Да",score:1}],answerScore:NaN},{label:"Есть ли у больного родственники первой линии родства с сухожильными ксантомами?",choices:[{label:"Нет",score:0},{label:"Да",score:2}],answerScore:NaN},{label:"Есть ли у больного дета, до 18 лет с повышенным уровнем ЛНП?",choices:[{label:"Нет",score:0},{label:"Да",score:2}],answerScore:NaN},{label:"Есть ли у больного ИБС, дебютировавшая в возрасте до 55 лет (муж) или до 60 лет (жен)?",choices:[{label:"Нет",score:0},{label:"Да",score:2}],answerScore:NaN},{label:"Есть ли у больного ЦВБ или периферический атеросклероз, выявленный до 55 лет (муж) или до 60 лет (жен) ?",choices:[{label:"Нет",score:0},{label:"Да",score:1}],answerScore:NaN},{label:"Есть ли у больного сухожильные ксантомы?",choices:[{label:"Нет",score:0},{label:"Да",score:6}],answerScore:NaN},{label:"Есть ли у больного липоидная дуга роговицы, выявленная в возрасте моложе 45 лет?",choices:[{label:"Нет",score:0},{label:"Да",score:4}],answerScore:NaN},{label:"Каков у больного уровень холестерина ЛНП?",choices:[{label:"4,0 – 4,9 ммоль/л",score:1},{label:"5,0 – 6,4 ммоль/л",score:3},{label:"6,5 – 8,4 ммоль/л",score:5},{label:"    > 8,5 ммоль/л",score:8}],answerScore:NaN},{label:"Выявлена мутации гена LDLR, APOB или PCSK9?",choices:[{label:"Нет",score:0},{label:"Да",score:8}],answerScore:NaN}]}},computed:{answers:function(){return this.questions.map((function(e){return e.answerScore}))},isAnyClicked:function(){return!this.answers.every(isNaN)},totalScore:function(){return this.isAnyClicked?this.answers.reduce((function(e,t){return isNaN(parseInt(t))?e:e+parseInt(t)}),0):NaN},totalScoreText:function(){var e=this.totalScore;return isNaN(e)?NaN:e>8?"У больного определенная СГ":e>=6?"У больного возможная СГ":e>=3?"У больного вероятная СГ":"У больного диагноз СГ мало вероятен"}}}),g=w,y=(n("6535"),Object(d["a"])(g,x,S,!1,null,"70a69446",null)),A=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("p",{staticClass:"title is-4"},[e._v(" При наличии 6 и более баллов по системе критериев Голландской сети липидных клиник больному может быть рекомендовано проведение NGS для выявления причинной мутации, а также обследование родственников ")]),n("p",{staticClass:"subtitle"},[e._v(" При обследовании может быть рекомендовано тестирование по панели «ЛИПО-скрин-Б» ")]),e._m(0),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-third is-offset-one-third"},[n("b-field",[n("b-radio-button",{attrs:{"native-value":"AA"},model:{value:e.geneApoB,callback:function(t){e.geneApoB=t},expression:"geneApoB"}},[e._v("AA")]),n("b-radio-button",{attrs:{"native-value":"AG"},model:{value:e.geneApoB,callback:function(t){e.geneApoB=t},expression:"geneApoB"}},[e._v("AG")]),n("b-radio-button",{attrs:{"native-value":"GG"},model:{value:e.geneApoB,callback:function(t){e.geneApoB=t},expression:"geneApoB"}},[e._v("GG")])],1)],1)]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b-button",{attrs:{type:"is-light is-medium",expanded:""},on:{click:function(t){return e.$emit("next",null)}}},[e._v("Пропустить")])],1),n("div",{staticClass:"column"},[n("b-button",{attrs:{type:"is-primary is-medium",outlined:"",expanded:""},on:{click:function(t){return e.$emit("next",e.geneApoB)}}},[e._v("Далее")])],1)])])},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column has-text-justified"},[e._v("Внесите результаты тестирования маркер rs5742904 в гене АроВ:")])])}],N={name:"Slide5",data:function(){return{answer:null,geneApoB:null}}},O=N,$=Object(d["a"])(O,k,B,!1,null,null,null),G=$.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-4"},[e._v("Оценка риска")]),e._m(0),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b-button",{attrs:{type:"is-primary is-medium",outlined:"",expanded:""},on:{click:function(t){return e.$emit("next",!1)}}},[e._v("Нет")])],1),n("div",{staticClass:"column"},[n("b-button",{attrs:{type:"is-primary is-medium",outlined:"",expanded:""},on:{click:function(t){return e.$emit("next",!0)}}},[e._v("Да")])],1)])])},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-full"},[n("p",[e._v(" Есть ли у больного факторы риска атеросклероза (помимо семейной гиперлипидемии)? ")])])])}],T={name:"Slide2",data:function(){return{answer:null}}},E=T,P=Object(d["a"])(E,j,L,!1,null,null,null),M=P.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-4"},[e._v("Назначение терапии")]),e._m(0),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-half is-offset-one-quarter"},[n("b-field",[n("b-radio-button",{attrs:{"native-value":"AA"},model:{value:e.geneABCG2,callback:function(t){e.geneABCG2=t},expression:"geneABCG2"}},[e._v("AA")]),n("b-radio-button",{attrs:{"native-value":"AC"},model:{value:e.geneABCG2,callback:function(t){e.geneABCG2=t},expression:"geneABCG2"}},[e._v("AC")]),n("b-radio-button",{attrs:{"native-value":"CC"},model:{value:e.geneABCG2,callback:function(t){e.geneABCG2=t},expression:"geneABCG2"}},[e._v("CC")])],1)],1)]),e._m(1),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-half is-offset-one-quarter"},[n("b-field",[n("b-radio-button",{attrs:{"native-value":"TT"},model:{value:e.geneSLCO1B1,callback:function(t){e.geneSLCO1B1=t},expression:"geneSLCO1B1"}},[e._v("TT")]),n("b-radio-button",{attrs:{"native-value":"TC"},model:{value:e.geneSLCO1B1,callback:function(t){e.geneSLCO1B1=t},expression:"geneSLCO1B1"}},[e._v("TC")]),n("b-radio-button",{attrs:{"native-value":"CC"},model:{value:e.geneSLCO1B1,callback:function(t){e.geneSLCO1B1=t},expression:"geneSLCO1B1"}},[e._v("CC")])],1)],1)]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b-button",{attrs:{type:"is-light is-medium",expanded:""},on:{click:function(t){return e.$emit("next",null,null)}}},[e._v("Пропустить")])],1),n("div",{staticClass:"column"},[n("b-button",{attrs:{type:"is-primary is-medium",outlined:"",expanded:""},on:{click:function(t){return e.$emit("next",e.geneABCG2,e.geneSLCO1B1)}}},[e._v("Далее")])],1)])])},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column has-text-justified"},[e._v("Перед назначением высоких доз розувастатина может быть рекомендовано генетическое тестирование по панели "),n("b",[e._v("Профиль «ФАРМА-скрин-транспорт»")]),e._v(".Внесите результаты тестирования маркер rs2231142 в гене ABCG2:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column has-text-justified"},[e._v("Перед назначением высоких доз статинов желательно тестирование маркера rs4149056 гена SLCO1B1. Внесите результаты тестирования:")])])}],z={name:"Slide5",data:function(){return{answer:null,geneABCG2:null,geneSLCO1B1:null}}},I=z,J=Object(d["a"])(I,R,q,!1,null,null,null),D=J.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container content"},[n("h1",{staticClass:"title"},[e._v("Заключение")]),e.conclusionMessages.length?n("div",e._l(e.conclusionMessages,(function(t,s){return n("article",{key:s,class:["message","has-text-left","is-"+t.type]},[n("section",{staticClass:"message-body"},[n("div",{staticClass:"media"},[t.icon?n("div",{staticClass:"media-left"},[n("b-icon",{class:"is-"+t.type,attrs:{icon:t.icon,both:"",size:"is-small"}})],1):e._e(),n("div",{staticClass:"media-content",domProps:{innerHTML:e._s(t.text)}})])])])})),0):e._e()])},K=[],F={name:"Conclusion",props:{answers:Object},data:function(){return{}},computed:{conclusionMessages:function(){var e=[],t=null,n=null;return null!==this.answers.slide7&&(t=this.answers.slide7[0],n=this.answers.slide7[1]),this.answers.slide1?e.push({type:"info",icon:"information",text:"Данная часть заключения в стадии разработки."}):(e.push({type:"success",icon:"check-circle",text:"Вероятность семейной гиперлипидемии низкая."}),this.answers.slide2?("AA"===t?e.push({type:"warning",icon:"alert",text:"По результатам генетического тестирования выявлено носительство генотипа AA гена ABCG2 маркер rs2231142. Не рекомендуется использовать дозы розувастатина более 20 мг/сут"}):"AC"===t?e.push({type:"info",icon:"information",text:"По результатам генетического тестирования выявлено носительство генотипа AC гена ABCG2 маркер rs2231142. Могут быть использованы любые дозы розувастатина, с осторожностью - 40 мг/сут"}):"CC"===t?e.push({type:"info",icon:"information",text:"По результатам генетического тестирования выявлено носительство генотипа CC гена ABCG2 маркер rs2231142. Могут быть максимальные дозы розувастатина"}):e.push({type:"warning",icon:"alert",text:'В связи с наличием показаний к терапии статинами показано проведение тестирования гена ABCG2 маркер rs2231142 (профиль "ФАРМА-скрин-транспорт")'}),"TT"===n?e.push({type:"warning",icon:"alert",text:"\n                                У больного при проведении тестирования выявлен генотип TT маркера rs4149056 гена SLCO1B1. Не рекомендуется использовать дозы статинов выше указанных:\n                                <ul>\n                                    <li>Симвастатин, Аторвастатин и Правастатин &mdash; 80 мг/сут</li>\n                                    <li>Розувастатин &mdash; 40 мг/сут</li>\n                                </ul>\n                            "}):"TC"===n?e.push({type:"warning",icon:"alert",text:"\n                                У больного при проведении тестирования выявлен генотип TC маркера rs4149056 гена SLCO1B1. Не рекомендуется использовать дозы статинов выше указанных:\n                                <ul>\n                                    <li>Симвастатин, Аторвастатин и Правастатин &mdash; 40 мг/сут</li>\n                                    <li>Розувастатин &mdash; 20 мг/сут</li>\n                                </ul>\n                            "}):"CC"===n?e.push({type:"warning",icon:"alert",text:"\n                                У больного при проведении тестирования выявлен генотип CC маркера rs4149056 гена SLCO1B1. Не рекомендуется использовать дозы статинов выше указанных:\n                                <ul>\n                                    <li>Симвастатин, Аторвастатин &mdash; 20 мг/сут</li>\n                                    <li>Правастатин &mdash; 40 мг/сут</li>\n                                    <li>Розувастатин &mdash; 20 мг/сут (10 мг/сут при сочетании с носительством генотипа AA гена BCG2)</li>\n                                </ul>\n                            "}):e.push({type:"warning",icon:"alert",text:"В связи с наличием показаний к терапии статинами показано проведение тестирования гена SLCO1B1 маркер rs4149056"})):e.push({type:"success",icon:"check-circle",text:"Показаний для генетического тестирования нет."})),e}}},Q=F,U=Object(d["a"])(Q,H,K,!1,null,null,null),V=U.exports,W={name:"app",components:{Slide1:p,Slide2:_,Slide34:A,Slide5:G,Slide6:M,Slide7:D,Conclusion:V},data:function(){return{activeSlide:1,answers:{slide1:null,slide2:null,slide34:null,slide5:null,slide6:null,slide7:null}}},methods:{slide1Next:function(e){this.answers.slide1=e,this.activeSlide=e?3:2},slide2Next:function(e){this.answers.slide2=e,this.activeSlide=e?7:0},slide3Next:function(e){this.answers.slide3=e,this.activeSlide=e>=6?5:0},slide5Next:function(e){this.answers.slide5=e,this.activeSlide=null===e?6:0},slide6Next:function(e){this.answers.slide6=e,this.activeSlide=0},slide7Next:function(e,t){this.answers.slide7=null===e&&null===t?null:[e,t],this.activeSlide=0}}},X=W,Y=(n("034f"),Object(d["a"])(X,l,a,!1,null,null,null)),Z=Y.exports;s["a"].use(i["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(Z)}}).$mount("#app")},6535:function(e,t,n){"use strict";var s=n("9be3"),i=n.n(s);i.a},"85ec":function(e,t,n){},"9be3":function(e,t,n){}});
//# sourceMappingURL=app.3312621a.js.map