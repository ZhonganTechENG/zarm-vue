(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{496:function(t,e,n){},497:function(t,e,n){},498:function(t,e,n){"use strict";var a=n(496);n.n(a).a},499:function(t,e,n){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},s=(n(498),n(6)),i=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"main-container"},[this._t("default")],2)])}),[],!1,null,"4d605d3f",null);e.a=i.exports},500:function(t,e,n){"use strict";var a=n(497);n.n(a).a},501:function(t,e,n){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}},s=(n(500),n(6)),i=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"simulator"},[e("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])}),[],!1,null,"1196af06",null);e.a=i.exports},682:function(t,e,n){"use strict";n.r(e);var a=n(4),s=n(501),i={components:{Container:n(499).a,Simulator:s.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",(function(e,a){n.e(90).then(function(){var a=[n(609)(`./${t}/progress.md`)];e.apply(null,a)}.bind(this)).catch(n.oe)}))}},r=n(6),o=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("Container",[e("Demo"),this._v(" "),e("Simulator",{attrs:{url:this.path}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);