(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{338:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{items:[{src:"Carousel01.png"},{src:"Carousel02.png"},{src:"Carousel03.png"},{src:"Carousel04.png"}]}}},n=r(44),o=r(74),c=r.n(o),m=r(352),f=r(353),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-carousel",{attrs:{height:"600"}},this._l(this.items,(function(t,i){return e("v-carousel-item",{key:i,attrs:{src:t.src}})})),1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCarousel:m.a,VCarouselItem:f.a})},348:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"Please enter valid contact number"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}]}},methods:{validate:function(){this.$refs.form.validate()}}},n=r(44),o=r(74),c=r.n(o),m=r(135),f=r(292),d=r(310),v=r(346),h=r(297),_=r(301),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("carousel"),t._v(" "),r("br"),t._v(" "),r("v-divider",{attrs:{color:"lightgrey"}}),t._v(" "),r("v-container",[r("h1",{staticClass:"font-weight-medium pa-sm-2",staticStyle:{color:"#0160B0","font-family":"Futura std"}},[t._v("PAY BILLS/ RECHARGE")]),t._v(" "),r("br"),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"2",sm:"12"}},[r("h3",{staticClass:"font-weight-medium pa-sm-2",staticStyle:{"font-family":"Futura std",color:"black"}},[t._v("ENTER NUMBER")])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"8",sm:"5",xs:"2"}},[r("v-text-field",{staticClass:"pa-xs-auto pa-sm-6 ",staticStyle:{"font-family":"futura std"},attrs:{counter:10,colr:"white",light:"",fixed:"",app:"","background-color":"#F3F3F3",rules:t.nameRules,solo:"",label:"Enter Mobile Number",require:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"2",sm:"5",xs:"2"}},[r("v-btn",{staticClass:"text-center font-weight-regular shaped-pill d-inline-flex align-center justify-center ma-3  pa-sm-6 ",staticStyle:{"font-family":"futura std"},attrs:{height:"45",width:"128",color:"red"},on:{click:function(e){return t.$router.push("PayBills")}}},[t._v("\n      SUBMIT\n    ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Carousel:r(338).default}),c()(component,{VBtn:m.a,VCol:f.a,VContainer:d.a,VDivider:v.a,VRow:h.a,VTextField:_.a})}}]);