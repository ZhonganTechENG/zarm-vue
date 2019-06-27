(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{538:function(s,t,a){"use strict";a.r(t);let l=0;var n={mounted(){this.refreshing2=!0,setTimeout(()=>{this.myData2=this.random(25),this.refreshing2=!1},1500)},data:()=>({i:null,myData2:[],refreshing1:!1,refreshing2:!1,loading:!1}),methods:{random(s){const t=[];for(let a=0;a<s;a++)t.push(Math.round(100*Math.random()));return t},refresh(s){return()=>new Promise((t,a)=>{this[`refreshing${s}`]=!0,setTimeout(()=>{this[`myData${s}`]=this.random(25),t(!0),this[`refreshing${s}`]=!1},1e3)})},loadData(){return this.loading=!0,new Promise((s,t)=>{setTimeout(()=>{if(Math.random()>.8)return t(!1);if(l<2){const t=this.myData2.length+1;for(let s=0;s<10;s++)this.myData2.push(t+s);s(!0)}else s(!1);this.loading=!1,l++},1200)})}}},e=a(6),i=Object(e.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-pull",{attrs:{"on-refresh":s.refresh(2),refreshing:s.refreshing2,loading:s.loading,"on-load":s.loadData},scopedSlots:s._u([{key:"refreshPull",fn:function(s){return[a("div",{staticClass:"custom-control",style:{transform:"scale("+s.percent/100+")"}},[a("img",{attrs:{src:"https://avatars2.githubusercontent.com/u/499550?v=4&s=72",alt:""}})])]}},{key:"refreshDrop",fn:function(t){return[a("div",{staticClass:"custom-control"},[s._v("\n      释放加载\n    ")])]}},{key:"refreshLoading",fn:function(s){return[a("div",{staticClass:"custom-control"},[a("za-activity-indicator",{staticClass:"rotate360"})],1)]}},{key:"refreshSuccess",fn:function(t){return[a("div",{staticClass:"custom-control"},[s._v("\n      加载成功\n    ")])]}}])},s._l(s.myData2,function(t,l){return a("za-cell",{key:l},[s._v("ID号 "+s._s(t)+" ")])}),1)],1)])]),a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[s._v("上拉加载下拉刷新 Pull")]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("上拉加载下拉刷新")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._m(1),s._v("\n  "),s._m(2),s._v("ID号 "+s._s(s.i)+" "),s._m(3),s._v("\n  "),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- 此处的几个slot用来覆盖默认样式，定义的会覆盖，不定义的依然使用默认样式 --\x3e")]),s._v("\n  "),s._m(4),s._v("\n    "),s._m(5),s._v("\n      "),s._m(6),s._v("\n    "),s._m(7),s._v("\n  "),s._m(8),s._v("\n  "),s._m(9),s._v("\n    "),s._m(10),s._v("\n      释放加载\n    "),s._m(11),s._v("\n  "),s._m(12),s._v("\n  "),s._m(13),s._v("\n    "),s._m(14),s._v("\n      "),s._m(15),s._v("\n    "),s._m(16),s._m(17),s._v("\n  "),s._m(18),s._v("\n  "),s._m(19),s._v("\n    "),s._m(20),s._v("\n      加载成功\n    "),s._m(21),s._v("\n  "),s._m(22),s._v("\n"),s._m(23),s._v("\n")])])]),s._v(" "),a("h4",[s._v("上拉加载下拉刷新(自定义提示内容)")]),s._v(" "),a("p",[s._v("使用 scopedSlots 来覆盖默认的样式")]),s._v(" "),s._m(24),s._v(" "),s._m(25),s._v(" "),a("p",[s._v("scopedSlots 用来覆盖默认样式，定义的会覆盖，不定义的默认使用内定样式")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._m(26),s._v("\n  "),s._m(27),s._v("\n    "),s._m(28),s._v("第 "+s._s(s.i)+" 行"),s._m(29),s._v("\n\n    "),s._m(30),s._v("\n      "),s._m(31),s._v("\n        "),s._m(32),s._v("\n      "),s._m(33),s._v("\n    "),s._m(34),s._v("\n\n    "),s._m(35),s._v("\n      "),s._m(36),s._v("\n        释放加载\n      "),s._m(37),s._v("\n    "),s._m(38),s._v("\n\n    "),s._m(39),s._v("\n      "),s._m(40),s._v("\n        "),s._m(41),s._v("\n      "),s._m(42),s._m(43),s._v("\n    "),s._m(44),s._v("\n\n    "),s._m(45),s._v("\n      "),s._m(46),s._v("\n        加载成功\n      "),s._m(47),s._v("\n    "),s._m(48),s._v("\n  "),s._m(49),s._v("\n"),s._m(50),s._v("\n"),s._m(51),s._m(52),s._m(53),s._v("\n")])]),s._v(" "),a("p",[s._v("on-refresh, on-load 这两个回调函数要求返回一个 Promise 对象。对于 on-refresh 来说，resolve 时表示刷新成功，reject 则表示刷新失败。而对于 on-load 来说，resolve(true) 表示加载成功，并且还有更多数据，resolve(false) 表示加载成功，但后续没有数据了。reject 则表示加载失败。")]),s._v(" "),s._m(54),s._v(" "),a("h3",[s._v("Vue Script")]),s._v(" "),s._m(55),s._v(" "),a("h3",[s._v("API")]),s._v(" "),a("h4",[s._v("Pull Attributes")]),s._v(" "),s._m(56)])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("上拉加载下拉刷新\n\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-pull")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":on-refresh")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refresh(2)"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":refreshing")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refreshing2"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":loading")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"loading"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":on-load")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"loadData"')]),s._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"(i, index) in myData2"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"index"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot-scope")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"props"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refreshPull"')]),s._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"custom-control"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{\n          transform: `scale(${props.percent / 100})`\n          }"')]),s._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://avatars2.githubusercontent.com/u/499550?v=4&s=72"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("alt")]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("template")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot-scope")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"props"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refreshDrop"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"custom-control"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("template")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot-scope")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"props"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refreshLoading"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"custom-control"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("za-activity-indicator")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"rotate360"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-activity-indicator")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("template")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot-scope")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"props"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refreshSuccess"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"custom-control"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("template")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-pull")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("上拉刷新的几个状态分别为 "),a("code",[s._v("refreshPull")]),s._v(", "),a("code",[s._v("refreshDrop")]),s._v(", "),a("code",[s._v("refreshLoading")]),s._v(", "),a("code",[s._v("refreshSuccess")]),s._v(", "),a("code",[s._v("refreshFailure")]),s._v(" 分别对应各自的 scopedSlots。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("下拉加载的几个状态分别为 "),t("code",[this._v("loadComplete")]),this._v(", "),t("code",[this._v("loadLoading")]),this._v(", "),t("code",[this._v("loadFailure")]),this._v(" 分别对应各自的 scopedSlots。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("za-panel-body")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-pull")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":on-refresh")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refresh"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":refreshing")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refreshing"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":loading")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"loading"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":on-load")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"loadData"')]),s._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i in myData"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scope")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"props"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refreshPull"')]),s._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"custom-control"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{\n        transform: `scale(${props.percent / 100})`\n        }"')]),s._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://avatars2.githubusercontent.com/u/499550?v=4&s=72"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("alt")]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("template")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scope")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"props"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refreshDrop"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"custom-control"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("template")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scope")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"props"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refreshLoading"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"custom-control"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("za-activity-indicator")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"rotate360"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-activity-indicator")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("template")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scope")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"props"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"refreshSuccess"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"custom-control"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("template")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-pull")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-panel-body")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("script")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("myData")]),s._v(": ["),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("],\n        "),a("span",{staticClass:"hljs-attr"},[s._v("refreshing")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("loading")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n      }\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      random(length) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" newData = []\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" i = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i < length; i++) {\n          newData.push("),a("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".round("),a("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".random() * "),a("span",{staticClass:"hljs-number"},[s._v("100")]),s._v("))\n        }\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" newData\n      },\n      refresh() {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".refreshing = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("resolve, reject")]),s._v(") =>")]),s._v(" {\n          fetch()\n            .then("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("res")]),s._v(" =>")]),s._v(" {\n              "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".refreshing = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n              resolve("),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(")\n            })\n            .catch("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(" =>")]),s._v(" {\n              "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".refreshing = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n              reject("),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(")\n            })\n        })\n      },\n      loadData() {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".loading = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("resolve, reject")]),s._v(") =>")]),s._v(" {\n          fetch()\n            .then("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("res")]),s._v(" =>")]),s._v(" {\n              "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".loading = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n              resolve("),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(")\n              "),a("span",{staticClass:"hljs-comment"},[s._v("// or resolve(false);")]),s._v("\n            })\n            .catch("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(" =>")]),s._v(" {\n              "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".loading = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n              reject("),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(")\n            })\n        })\n      }\n    }\n  }\n")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("script")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("注意: zarm-vue 本身并不带有 Promise 库，请您根据自己的运行环境决定是否需要用引入 Promise Pollyfill.")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"hljs"},[a("code",[s._v("<script name="),a("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" times = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n"),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" RandomLength = "),a("span",{staticClass:"hljs-number"},[s._v("25")]),s._v(";\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  mounted() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".refreshing2 = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    setTimeout("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".myData2 = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".random(RandomLength);\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".refreshing2 = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    }, "),a("span",{staticClass:"hljs-number"},[s._v("1500")]),s._v(")\n  },\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("i")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("myData2")]),s._v(": [],\n      "),a("span",{staticClass:"hljs-attr"},[s._v("refreshing1")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("refreshing2")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("loading")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    random(length){\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" newData = [];\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v("("),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" i = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i < length; i++){\n        newData.push("),a("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".round("),a("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".random() * "),a("span",{staticClass:"hljs-number"},[s._v("100")]),s._v("))\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" newData;\n    },\n    refresh(index) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("resolve, reject")]),s._v(") =>")]),s._v(" {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("["),a("span",{staticClass:"hljs-string"},[s._v("`refreshing"),a("span",{staticClass:"hljs-subst"},[s._v("${index}")]),s._v("`")]),s._v("] = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(";\n        setTimeout("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("["),a("span",{staticClass:"hljs-string"},[s._v("`myData"),a("span",{staticClass:"hljs-subst"},[s._v("${index}")]),s._v("`")]),s._v("] = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".random(RandomLength);\n          resolve("),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("["),a("span",{staticClass:"hljs-string"},[s._v("`refreshing"),a("span",{staticClass:"hljs-subst"},[s._v("${index}")]),s._v("`")]),s._v("] = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(";\n        }, "),a("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v(")\n      })\n    },\n    loadData() {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".loading = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("resolve, reject")]),s._v(") =>")]),s._v(" {\n        setTimeout("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),a("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".random() > "),a("span",{staticClass:"hljs-number"},[s._v("0.8")]),s._v(") {\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" reject("),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("); "),a("span",{staticClass:"hljs-comment"},[s._v("// capture error and reject it")]),s._v("\n          };\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(times < "),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("){\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" length = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".myData2.length + "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v("("),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" i = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i < "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("; i++) {\n              "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".myData2.push( length + i);\n            }\n            resolve("),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(") "),a("span",{staticClass:"hljs-comment"},[s._v("// has more")]),s._v("\n          }"),a("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v("{\n            resolve("),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(") "),a("span",{staticClass:"hljs-comment"},[s._v("// no more")]),s._v("\n          }\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".loading = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n          times++;\n        }, "),a("span",{staticClass:"hljs-number"},[s._v("1200")]),s._v(")\n      })\n    }\n  }\n}\n<"),a("span",{staticClass:"hljs-regexp"},[s._v("/script>\n")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("refreshing")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("boolean")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否正在刷新")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("loading")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("boolean")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否正在加载")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("refresh-init-distance")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("20")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("下拉助跑距离")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("refresh-distance")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("60")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("下拉距离阀值")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("duration")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("300")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("动画执行时间，单位：ms")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("stay-time")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("1500")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("加载成功停留时间")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("on-refresh")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("function")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("达到阀值后释放触发刷新的回调函数")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("on-load")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("function")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("下拉加载的回调函数")])])])])}],!1,null,null,null);t.default=i.exports}}]);