(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1199:function(t,e,n){"use strict";n.r(e);n(79),n(80);var r=n(20),o=n(3),l=n.n(o),d=[{title:"来自",dataIndex:"fetcher_name"},{title:"代理类型",dataIndex:"protocal"},{title:"IP",dataIndex:"ip"},{title:"端口",dataIndex:"port"},{title:"上次验证时间",dataIndex:"validate_date",customRender:function(t){return t?l()(t).format("YYYY-MM-DD HH:mm:ss"):""}},{dataIndex:"to_validate_date",slots:{title:"to_validate_date"},customRender:function(t){return t?l()(t).format("YYYY-MM-DD HH:mm:ss"):""}}],c={data:function(){return{columns:d,proxies:[],sum_proxies_cnt:0,validated_proxies_cnt:0,pending_proxies_cnt:0,autoupdate:!0,lastupdate:"",handle:null}},mounted:function(){var t=this;this.handle=setInterval((function(){t.autoupdate&&t.update()}),2e3),this.update()},destroyed:function(){this.handle&&clearInterval(this.handle),this.handle=null},methods:{update:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/proxies_status");case 2:data=e.sent,t.proxies=data.proxies,t.sum_proxies_cnt=data.sum_proxies_cnt,t.validated_proxies_cnt=data.validated_proxies_cnt,t.pending_proxies_cnt=data.pending_proxies_cnt,t.lastupdate=l()().format("HH:mm:ss");case 8:case"end":return e.stop()}}),e)})))()}}},_=n(100),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:4}},[n("a-card",{attrs:{"body-style":{padding:"20px 24px 14px"}}},[n("a-statistic",{staticStyle:{"margin-right":"50px"},attrs:{value:t.sum_proxies_cnt,"value-style":{color:"#3f8600"}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v("\n                            全部代理数量\n                            "),n("a-tooltip",{attrs:{title:"目前数据库中的代理总数，包含没有通过验证的代理"}},[n("a-icon",{attrs:{type:"question-circle"}})],1)],1)]},proxy:!0}])})],1)],1),t._v(" "),n("a-col",{attrs:{span:4}},[n("a-card",{attrs:{"body-style":{padding:"20px 24px 14px"}}},[n("a-statistic",{staticStyle:{"margin-right":"50px"},attrs:{title:"当前可用代理数量",value:t.validated_proxies_cnt,"value-style":{color:"#3f8600"}}})],1)],1),t._v(" "),n("a-col",{attrs:{span:4}},[n("a-card",{attrs:{"body-style":{padding:"20px 24px 14px"}}},[n("a-statistic",{staticStyle:{"margin-right":"50px"},attrs:{value:t.pending_proxies_cnt,"value-style":{color:"#3f8600"}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v("\n                            等待验证代理数量\n                            "),n("a-tooltip",{scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v("\n                                        表示这些代理的`下次验证时间`已经到了，但是还没有完成验证。\n                                        如果该数字突然增大，有可能是爬取器突然网数据库中添加了一批代理，是正常现象，慢慢等待即可。\n                                        如果该数字一直较大，则表示验证器忙不过来了。\n                                    ")])]},proxy:!0}])},[t._v(" "),n("a-icon",{attrs:{type:"question-circle"}})],1)],1)]},proxy:!0}])})],1)],1),t._v(" "),n("a-col",{attrs:{span:4}},[n("a-card",{attrs:{"body-style":{padding:"20px 24px 4px"}}},[n("p",[t._v("\n                    自动刷新:\n                    "),n("a-switch",{model:{value:t.autoupdate,callback:function(e){t.autoupdate=e},expression:"autoupdate"}})],1),t._v(" "),n("p",[t._v("刷新时间："+t._s(t.lastupdate))])])],1)],1),t._v(" "),n("br"),t._v(" "),n("a-table",{attrs:{columns:t.columns,"data-source":t.proxies,"row-key":function(t){return t.protocal+"://"+t.ip+":"+t.port},pagination:!1,bordered:!0}},[n("span",{attrs:{slot:"to_validate_date"},slot:"to_validate_date"},[t._v("\n            下次验证时间\n            "),n("a-tooltip",{scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v("\n                        验证器会不断从数据库中取出满足`下次验证时间`在当前时间之前的代理进行验证。\n                    ")])]},proxy:!0}])},[t._v(" "),n("a-icon",{attrs:{type:"question-circle"}})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);