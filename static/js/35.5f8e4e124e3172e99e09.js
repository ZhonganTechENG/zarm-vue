(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{496:function(t,n,e){},497:function(t,n,e){},498:function(t,n,e){"use strict";var a=e(496);e.n(a).a},499:function(t,n,e){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},i=(e(498),e(6)),s=Object(i.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("main",[n("div",{staticClass:"main-container"},[this._t("default")],2)])}),[],!1,null,"4d605d3f",null);n.a=s.exports},500:function(t,n,e){"use strict";var a=e(497);e.n(a).a},501:function(t,n,e){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}},i=(e(500),e(6)),s=Object(i.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"simulator"},[n("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])}),[],!1,null,"1196af06",null);n.a=s.exports},669:function(t,n,e){"use strict";e.r(n);var a=e(4),i=e(501),s={components:{Container:e(499).a,Simulator:i.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",(function(n,a){e.e(89).then(function(){var a=[e(596)(`./${t}/panel.md`)];n.apply(null,a)}.bind(this)).catch(e.oe)}))}},r=e(6),o=Object(r.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("Container",[n("Demo"),this._v(" "),n("Simulator",{attrs:{url:this.path}})],1)}),[],!1,null,null,null);n.default=o.exports}}]);