(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{496:function(t,e,n){},497:function(t,e,n){},498:function(t,e,n){"use strict";var a=n(496);n.n(a).a},499:function(t,e,n){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},i=(n(498),n(6)),r=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"main-container"},[this._t("default")],2)])},[],!1,null,"4d605d3f",null);e.a=r.exports},500:function(t,e,n){"use strict";var a=n(497);n.n(a).a},501:function(t,e,n){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}},i=(n(500),n(6)),r=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"simulator"},[e("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])},[],!1,null,"1196af06",null);e.a=r.exports},653:function(t,e,n){"use strict";n.r(e);var a=n(5),i=n(501),r={components:{Container:n(499).a,Simulator:i.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",function(e,a){Promise.all([n.e(3),n.e(104)]).then(function(){var a=[n(594)(`./${t}/datePicker.md`)];e.apply(null,a)}.bind(this)).catch(n.oe)})}},s=n(6),o=Object(s.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("Container",[e("Demo"),this._v(" "),e("Simulator",{attrs:{url:this.path}})],1)},[],!1,null,null,null);e.default=o.exports}}]);