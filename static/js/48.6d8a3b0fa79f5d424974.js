(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{594:function(t,n,e){},595:function(t,n,e){},596:function(t,n,e){"use strict";var a=e(594);e.n(a).a},597:function(t,n,e){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},i=(e(596),e(0)),r=Object(i.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("main",[n("div",{staticClass:"main-container"},[this._t("default")],2)])}),[],!1,null,"4d605d3f",null);n.a=r.exports},598:function(t,n,e){"use strict";var a=e(595);e.n(a).a},599:function(t,n,e){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}},i=(e(598),e(0)),r=Object(i.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"simulator"},[n("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])}),[],!1,null,"1196af06",null);n.a=r.exports},790:function(t,n,e){"use strict";e.r(n);var a=e(3),i=e(599),r={components:{Container:e(597).a,Simulator:i.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",(function(n,a){e.e(97).then(function(){var a=[e(717)(`./${t}/tabBar.md`)];n.apply(null,a)}.bind(this)).catch(e.oe)}))}},s=e(0),o=Object(s.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("Container",[n("Demo"),this._v(" "),n("Simulator",{attrs:{url:this.path}})],1)}),[],!1,null,null,null);n.default=o.exports}}]);