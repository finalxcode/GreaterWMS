(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"5efd":function(e,t,a){"use strict";a("6a20")},"6a20":function(e,t,a){},eca1:function(e,t,a){"use strict";a.r(t);var n,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{style:{height:e.$q.screen.height,width:e.$q.screen.width},attrs:{view:"hHh LpR fFf"}},[a("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",elevated:""}},[a("q-toolbar",{staticClass:"main-headers text-white rounded-borders"},[a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawerleft=!e.drawerleft}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.hide_menu")))])],1)],1),a("q-space"),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{round:"",dense:"",flat:"",color:"white",icon:"translate"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.translate")))]),a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"}},e._l(e.langOptions,(function(t,n){return a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:n,attrs:{clickable:""},on:{click:function(a){return e.langChange(t.value)}}},[a("q-item-section",[e._v(e._s(t.label))])],1)})),1)],1)],1)],1),a("q-separator",{attrs:{vertical:""}}),"1"===e.authin?[a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn-dropdown",{attrs:{stretch:"",flat:"",color:"white-8",icon:"account_circle"},on:{click:function(t){e.chat=!1}}},[a("div",{staticClass:"row no-wrap q-pa-md"},[a("div",{staticClass:"column",staticStyle:{width:"150px"}},[a("div",{staticStyle:{width:"100%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[a("span",{staticStyle:{"margin-left":"9%","font-weight":"bold"}},[e._v(e._s(e.$t("index.current_user"))+":")]),a("span",{staticStyle:{"margin-left":"6%","font-weight":"bold"}},[e._v(e._s(e.login_name))])]),a("hr",{staticStyle:{height:"2px",border:"none","border-top":"1px solid #e1e1e1",width:"121%","margin-left":"-10.5%","margin-top":"8%"}}),a("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.change_user")},on:{click:function(t){e.login=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.change_user")))])],1),a("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.view_my_openid")},on:{click:function(t){e.authid=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.view_my_openid")))])],1),a("hr",{staticStyle:{height:"2px",border:"none","border-top":"1px solid #e1e1e1",width:"121%","margin-left":"-10.5%","margin-top":"8%"}}),a("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.logout")},on:{click:function(t){return e.Logout()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.contact_list")))])],1)],1)])])],1)]:e._e(),"0"===e.authin?[a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("index.login"),color:"primary"},on:{click:function(t){e.login=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.login_tip")))])],1)],1),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("index.register"),color:"primary"},on:{click:function(t){e.register=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.register_tip")))])],1)],1)]:e._e()],2)],1),a("q-drawer",{attrs:{"show-if-above":"",width:200,breakpoint:500,bordered:"","content-class":"bg-grey-3 shadow-24"},model:{value:e.drawerleft,callback:function(t){e.drawerleft=t},expression:"drawerleft"}},[a("q-scroll-area",{staticClass:"fit",staticStyle:{"overflow-y":"auto"}},[a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"dashboard"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"mp_inboundAndOutbound"},exact:"",active:"dashboard"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("dashboard")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"auto_graph"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.dashboard")))])],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"inbound"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"mp_asn"},exact:"",active:"inbound"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("inbound")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"speaker_notes"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.inbound")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"outbound"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"mp_dn"},exact:"",active:"outbound"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("outbound")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"rv_hookup"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.outbound")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"stock"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"mp_stocklist"},exact:"",active:"stock"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("stock")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"multiline_chart"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.stock")))])],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"finance"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"mp_capitallist"},exact:"",active:"finance"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("finance")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"devices_other"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.finance")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"goods"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"mp_goodslist"},exact:"",active:"goods"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("goods")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"shop_two"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.goods")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"baseinfo"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"mp_supplier"},exact:"",active:"baseinfo"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("baseinfo")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"info"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.baseinfo")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"warehouse"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"mp_warehouseset"},exact:"",active:"warehouse"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("warehouse")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"settings"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.warehouse")))])],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"staff"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"mp_stafflist"},exact:"",active:"staff"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("staff")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"assignment_ind"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.staff")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"driver"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"mp_driverlist"},exact:"",active:"driver"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("driver")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"transfer_within_a_station"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.driver")))])],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"show",rawName:"v-show",value:"zh-hans"===e.lang,expression:"lang === 'zh-hans'"}],attrs:{clickable:"",exact:""},on:{click:function(t){return e.brownlink("pdf/GreaterWMS_price.pdf")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"add_shopping_cart"}})],1),a("q-item-section",[e._v("适配硬件清单")])],1)],1)],1)],1),a("q-page-container",{staticClass:"main-page",style:{height:e.container_height,width:e.$q.screen.width}},[a("router-view")],1),a("q-dialog",{model:{value:e.chat,callback:function(t){e.chat=t},expression:"chat"}},[a("q-card",{staticStyle:{width:"600px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.receiver))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"},on:{click:function(t){return e.ChatClose()}}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh",height:"50vh"},attrs:{id:"chat_scroll"}},[[a("div",{staticClass:"q-pa-md row justify-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.chat_next,expression:"chat_next !== null"}],attrs:{flat:"",rounded:"",label:e.$t("index.chat_more")},on:{click:function(t){return e.LoadChatList()}}}),a("div",{staticStyle:{width:"100%"}},[a("q-chat-message",{directives:[{name:"show",rawName:"v-show",value:null===e.chat_next,expression:"chat_next === null"}],attrs:{label:e.$t("index.chat_no_more")}}),e._l(e.chat_list,(function(t){return a("div",{key:t.id},[t.sender===e.sender+"-"+e.openid?a("q-chat-message",{attrs:{name:e.sender,text:[t.detail],"bg-color":"light-green-4","name-sanitize":"",sent:"","text-sanitize":""}}):a("q-chat-message",{attrs:{name:e.receiver,text:[t.detail],"text-sanitize":"","name-sanitize":"","bg-color":"grey-4"}})],1)}))],2)],1)]],2),a("q-separator"),a("q-card-actions",{attrs:{align:"right"}},[a("q-input",{staticClass:"bg-white col",attrs:{autofocus:"",dense:"",outlined:"",square:"",placeholder:"Send Message"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.websocketsend()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.ChatClose()}]},model:{value:e.chat_text,callback:function(t){e.chat_text=t},expression:"chat_text"}}),a("q-btn",{attrs:{flat:"",label:e.$t("index.chat_send"),color:"primary"},on:{click:function(t){return e.websocketsend()}}})],1)],1)],1),a("q-dialog",{attrs:{position:"right"},model:{value:e.read,callback:function(t){e.read=t},expression:"read"}},[a("q-card",{staticStyle:{width:"300px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("index.unread"))+"("+e._s(e.read_num)+")")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh",height:"50vh"}},[a("q-list",e._l(e.read_list,(function(t){return a("div",{key:t.id},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{on:{click:function(a){e.ChatWith(t.sender.split("-")[0])}}},[e._v(e._s(t.sender.split("-")[0]))]),a("q-item-label",{attrs:{caption:"",lines:"2"},on:{click:function(a){e.ChatWith(t.sender.split("-")[0])}}},[e._v(e._s(t.detail))])],1)],1)],1)})),0)],1),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:e.read_num>30,expression:"read_num > 30"}]}),a("q-card-actions",{attrs:{align:"left"}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.read_previous,expression:"read_previous !== null"}],attrs:{flat:"",label:e.$t("index.previous"),color:"primary"},on:{click:function(t){return e.ReadnumPrevious()}}}),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.read_next,expression:"read_next !== null"}],attrs:{flat:"",label:e.$t("index.next"),color:"primary"},on:{click:function(t){return e.ReadnumNext()}}})],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.authid,callback:function(t){e.authid=t},expression:"authid"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("index.your_openid")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"q-pt-md"},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Openid",readonly:""},model:{value:e.openid,callback:function(t){e.openid=t},expression:"openid"}})],1)],1)],1),a("q-dialog",{attrs:{position:"right"},model:{value:e.friend,callback:function(t){e.friend=t},expression:"friend"}},[a("q-card",{staticStyle:{width:"300px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("index.contact_list"))+"("+e._s(e.friend_num)+")")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v("关闭")])],1)],1),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:e.$q.platform.is.desktop,expression:"$q.platform.is.desktop"}]}),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh",height:"50vh"}},[a("q-list",[e._l(e.friend_list,(function(t){return[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{on:{click:function(a){return e.ChatWith(t.staff_name)}}},[e._v(e._s(t.staff_name))])],1)],1)]}))],2)],1),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:e.friend_num>30,expression:"friend_num > 30"}]}),a("q-card-actions",{attrs:{align:"left"}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.friend_previous,expression:"friend_previous !== null"}],attrs:{flat:"",label:e.$t("index.previous"),color:"primary"},on:{click:function(t){return e.Friend_previous()}}}),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.friend_next,expression:"friend_next !== null"}],attrs:{flat:"",label:e.$t("index.next"),color:"primary"},on:{click:function(t){return e.Friend_next()}}})],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("q-tabs",{staticClass:"tabs",model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("q-tab",{attrs:{name:"user"},on:{click:function(t){e.admin=!1}}},[e._v("\n            "+e._s(e.$t("index.user_login"))+"\n            "),a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[5,5],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.user_login")))])],1),a("q-tab",{attrs:{name:"admin"},on:{click:function(t){e.admin=!0}}},[e._v("\n            "+e._s(e.$t("index.admin_login"))+"\n            "),a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[5,5],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.admin_login")))])],1)],1),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"q-pt-md"},[e.admin?[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.admin_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adminLogin()}},model:{value:e.adminlogin.name,callback:function(t){e.$set(e.adminlogin,"name",t)},expression:"adminlogin.name"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.password"),type:e.isPwd?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adminLogin()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:e.adminlogin.password,callback:function(t){e.$set(e.adminlogin,"password",t)},expression:"adminlogin.password"}})]:e._e(),e.admin?e._e():[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.your_openid")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.openid,callback:function(t){e.openid=t},expression:"openid"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.staff_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.login_name,callback:function(t){e.login_name=t},expression:"login_name"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("staff.check_code"),type:"number",autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.check_code,callback:function(t){e.check_code=e._n(t)},expression:"check_code"}})]],2),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"left"}},[a("q-space"),[a("q-btn",{staticStyle:{"font-size":"16px",margin:"0 8px",width:"100%"},attrs:{color:"primary",label:e.$t("index.login")},on:{click:function(t){e.admin?e.adminLogin():e.Login()}}})],a("div",{staticClass:"q-mx-auto"},[a("q-btn",{staticClass:"text-teal-4 q-mt-sm",attrs:{flat:""},on:{click:function(t){e.login=!1,e.register=!0}}},[e._v("\n            "+e._s(e.$t("index.register_tip"))+"\n          ")])],1)],2)],1)],1),a("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.register,callback:function(t){e.register=t},expression:"register"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("index.register_tip")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"q-pt-md"},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.staff_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},model:{value:e.registerform.name,callback:function(t){e.$set(e.registerform,"name",t)},expression:"registerform.name"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.password"),type:e.isPwd?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.registerform.password1,callback:function(t){e.$set(e.registerform,"password1",t)},expression:"registerform.password1"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.confirm_password"),type:e.isPwd2?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd2?"visibility_off":"visibility"},on:{click:function(t){e.isPwd2=!e.isPwd2}}})]},proxy:!0}]),model:{value:e.registerform.password2,callback:function(t){e.$set(e.registerform,"password2",t)},expression:"registerform.password2"}})],1),a("q-card-actions",{staticClass:"text-primary q-mx-sm",attrs:{align:"right"}},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:e.$t("index.register")},on:{click:function(t){return e.Register()}}})],1),a("q-card-actions",{staticStyle:{"margin-top":"-8px"},attrs:{align:"center"}},[a("q-btn",{staticClass:"text-teal-4",attrs:{flat:"",label:e.$t("index.return_to_login")},on:{click:function(t){e.login=!0,e.register=!1}}})],1)],1)],1)],1)},s=[],o=(a("26e9"),a("3004")),r=a("bd4c"),l=a("18d6"),c=a("a639"),d=a("b06b"),m=(a("0967"),a("bca8")),u={data(){return{activeTab:"user",device:l["a"].getItem("device"),device_name:l["a"].getItem("device_name"),lang:this.$i18n.locale,verCheck:!1,version:"",updateNow:!1,processpercent:0,downloadprocess:!1,container_height:this.$q.screen.height+"px",langOptions:[{value:"en-us",label:"English"},{value:"zh-hans",label:"中文简体"},{value:"zh-hant",label:"中文繁體"},{value:"fr",label:"Français"},{value:"pt",label:"Português"},{value:"ru",label:"Español"},{value:"de",label:"Deutsch"},{value:"ru",label:"русский язык"},{value:"ar",label:"Arabic"},{value:"fr",label:"Italiano"},{value:"ja",label:"日本語"}],title:this.$t("index.webtitle"),admin:!1,adminlogin:{name:"",password:""},openid:"",isPwd:!0,isPwd2:!0,authin:"0",authid:!1,left:!1,drawerleft:!1,tab:"",login:!1,link:"",login_name:"",check_code:"",register:!1,registerform:{name:"",password1:"",password2:""},friend:!1,friend_num:0,friend_list:[],friend_previous:null,friend_next:null,sender:"",receiver:"",chat:!1,chat_list:[],chat_text:"",chat_next:null,read:!1,read_num:0,read_list:[],read_previous:"",read_next:"",needLogin:""}},methods:{linkChange(e){var t=this;localStorage.removeItem("menulink",""),localStorage.setItem("menulink",e),t.link=e},drawerClick(e){var t=this;t.miniState&&(t.miniState=!1,e.stopPropagation())},brownlink(e){Object(d["a"])(e)},Login(){var e=this;""===e.login_name?e.$q.notify({message:"Please enter the login name",color:"negative",icon:"close"}):""===e.openid?e.$q.notify({message:"Please Enter The Openid",icon:"close",color:"negative"}):""===e.check_code?e.$q.notify({message:"Please Enter The Check Code",icon:"close",color:"negative"}):(l["a"].set("openid",e.openid),c["a"].set("axios_check","false"),Object(o["e"])("staff/?staff_name="+e.login_name+"&check_code="+e.check_code).then((t=>{1===t.count?(e.authin="1",e.login=!1,l["a"].set("auth","1"),l["a"].set("login_name",e.login_name),l["a"].set("login_mode","user"),e.$q.notify({message:"Success Login",icon:"check",color:"green"}),e.$router.push("/mobile")):e.$q.notify({message:"No User's Data Or Check Code Wrong",icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})})))},adminLogin(){var e=this;e.adminlogin.name?e.adminlogin.password?(c["a"].set("axios_check","false"),Object(o["g"])("login/",e.adminlogin).then((t=>{"200"===t.code?(e.authin="1",e.login=!1,e.admin=!1,e.openid=t.data.openid,e.login_name=t.data.name,l["a"].set("auth","1"),l["a"].set("openid",t.data.openid),l["a"].set("login_name",e.login_name),l["a"].set("login_mode","admin"),e.$q.notify({message:"Success Login",icon:"check",color:"green"}),e.$router.push("/mobile")):e.$q.notify({message:t.msg,icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))):e.$q.notify({message:"Please enter the admin password",icon:"close",color:"negative"}):e.$q.notify({message:"Please enter the admin name",color:"negative",icon:"close"})},Logout(){var e=this;e.authin="0",e.login_name="",l["a"].remove("auth"),c["a"].remove("axios_check"),l["a"].set("login_name",""),e.$q.notify({message:"Success Logout",icon:"check",color:"negative"}),e.$router.push("/mobile")},Register(){var e=this;c["a"].set("axios_check","false"),Object(o["g"])("register/",e.registerform).then((t=>{"200"===t.code?(e.register=!1,e.openid=t.data.openid,e.login_name=e.registerform.name,e.authin="1",l["a"].set("openid",t.data.openid),l["a"].set("login_name",e.registerform.name),l["a"].set("auth","1"),l["a"].set("login_mode","admin"),e.registerform={name:"",password1:"",password2:""},e.$q.notify({message:t.msg,icon:"check",color:"green"}),e.staffType(),e.$router.push("/mobile")):e.$q.notify({message:t.msg,icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},staffType(){var e=this;Object(o["e"])("staff/?staff_name="+e.login_name).then((e=>{l["a"].set("staff_type",e.results[0].staff_type)}))},initWebSocket(){var e=this;n=new WebSocket(o["l"]+"?sender="+e.login_name+"&receiver="+e.receiver+"&openid="+e.openid),n.onmessage=e.websocketonmessage,n.onopen=e.websocketonopen,n.onerror=e.websocketonerror,n.onclose=e.websocketclose},websocketonopen(){console.log("Success Connect")},websocketonerror(){var e=this;e.initWebSocket()},websocketonmessage(e){var t=this;c["a"].getItem("receiver")===JSON.parse(e.data).sender&&t.chat_list.push(JSON.parse(e.data)),t.Readnum(),t.$q.notify({message:JSON.parse(e.data).sender+" Send you a message",color:"deep-purple",icon:"textsms",position:"right",actions:[{label:"View",color:"yellow",handler:()=>{t.ChatWith(JSON.parse(e.data).sender)}}]})},websocketsend(){var e=this;""!==e.chat_text&&(n.send(e.chat_text),e.chat_list.push({sender:e.sender+"-"+e.openid,receiver:e.receiver,detail:e.chat_text,create_time:r["b"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss")}),e.chat_text="")},websocketclose(e){console.log("Disconnect",e)},ChatWith(e){var t=this;t.sender=t.login_name,t.receiver=e,c["a"].set("receiver",e),t.sender===t.receiver?t.$q.notify({message:"Cannot Chat with yourself",icon:"close",color:"negative"}):(t.chat=!0,t.chat_text="",t.initWebSocket(),Object(o["e"])("chat/?sender="+t.sender+"&receiver="+t.receiver).then((e=>{t.chat_list=e.results.reverse(),t.Readnum(),t.chat_next=e.next})).catch((e=>{console.log(e),t.$q.notify({message:e.detail,icon:"close",color:"negative"})})))},LoadChatList(){var e=this;Object(o["e"])(e.chat_next).then((t=>{t.results.forEach((t=>{e.chat_list.unshift(t)})),e.chat_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ChatClose(){var e=this;e.receiver="",c["a"].set("receiver",""),e.chat_list=[],e.chat_text="",e.chat_next=null},Readnum(){var e=this;Object(o["e"])("chat/read/?sender="+e.login_name).then((t=>{e.read_previous=t.previous,e.read_next=t.next,e.read_list=t.results,e.read_num=t.count})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ReadnumPrevious(){var e=this;Object(o["e"])(e.read_previous,{}).then((t=>{e.read_list=t.results,e.read_previous=t.previous,e.read_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ReadnumNext(){var e=this;Object(o["e"])(e.read_next,{}).then((t=>{e.read_list=t.results,e.read_previous=t.previous,e.read_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},Friend(){var e=this;e.friend=!0,Object(o["e"])("staff/",{}).then((t=>{e.friend_list=t.results,e.friend_previous=t.previous,e.friend_next=t.next,e.friend_num=t.count})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},Friend_previous(){var e=this;Object(o["e"])(e.friend_previous,{}).then((t=>{e.friend_list=t.results,e.friend_previous=t.previous,e.friend_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},Friend_next(){var e=this;Object(o["e"])(e.friend_next,{}).then((t=>{e.friend_list=t.results,e.friend_previous=t.previous,e.friend_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},langChange(e){var t=this;t.lang=e,window.setTimeout((()=>{location.reload()}),1)},isLoggedIn(){let e=this.$q.localStorage.getItem("login_mode");e&&(this.activeTab=e),this.$q.localStorage.getItem("openid")?(this.login=!0,"admin"===this.activeTab?this.admin=!0:this.admin=!1):this.register=!0}},beforeCreate(){},created(){var e=this;l["a"].has("openid")?e.openid=l["a"].getItem("openid"):(e.openid="",l["a"].set("openid","")),l["a"].has("login_name")?e.login_name=l["a"].getItem("login_name"):(e.login_name="",l["a"].set("login_name","")),l["a"].has("auth")?(e.authin="1",e.initWebSocket(),e.staffType(),e.Readnum()):(l["a"].set("staff_type","Admin"),e.authin="0",e.isLoggedIn()),l["a"].has("device")?e.device=l["a"].getItem("device"):e.device=0,l["a"].has("device_name")?e.device_name=l["a"].getItem("device_name"):e.device_name=""},mounted(){var e=this;e.link=localStorage.getItem("menulink"),m["a"].$on("needLogin",(t=>{e.isLoggedIn()}))},updated(){document.getElementById("chat_scroll")?document.getElementById("chat_scroll").scrollTop=document.getElementById("chat_scroll").scrollHeight:document.getElementById("m_chat_scroll")&&(document.getElementById("m_chat_scroll").scrollTop=document.getElementById("m_chat_scroll").scrollHeight)},beforeDestroy(){m["a"].$off("needLogin")},destroyed(){n&&n.readyState===n.OPEN&&n.close()},watch:{lang(e){var t=this;l["a"].set("lang",e),t.$i18n.locale=e}}},p=u,h=(a("5efd"),a("42e1")),f=a("4d5a"),g=a("e359"),v=a("65c6"),_=a("9c40"),b=a("05c0"),k=a("2c91"),x=a("4e73"),q=a("1c1c"),w=a("66e5"),y=a("4074"),$=a("eb85"),C=a("f20b"),S=a("9404"),I=a("4983"),N=a("0016"),O=a("09e3"),z=a("24e8"),L=a("f09f"),P=a("d847"),Q=a("a370"),E=a("8169"),j=a("4b7e"),T=a("27f9"),R=a("0170"),W=a("429b"),D=a("7460"),B=a("7f67"),F=a("714f"),H=a("eebe"),J=a.n(H),M=Object(h["a"])(p,i,s,!1,null,null,null);t["default"]=M.exports;J()(M,"components",{QLayout:f["a"],QHeader:g["a"],QToolbar:v["a"],QBtn:_["a"],QTooltip:b["a"],QSpace:k["a"],QMenu:x["a"],QList:q["a"],QItem:w["a"],QItemSection:y["a"],QSeparator:$["a"],QBtnDropdown:C["a"],QDrawer:S["a"],QScrollArea:I["a"],QIcon:N["a"],QPageContainer:O["a"],QDialog:z["a"],QCard:L["a"],QBar:P["a"],QCardSection:Q["a"],QChatMessage:E["a"],QCardActions:j["a"],QInput:T["a"],QItemLabel:R["a"],QTabs:W["a"],QTab:D["a"]}),J()(M,"directives",{ClosePopup:B["a"],Ripple:F["a"]})}}]);